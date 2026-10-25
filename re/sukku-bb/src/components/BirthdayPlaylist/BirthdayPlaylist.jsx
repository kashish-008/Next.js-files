import SukkuSticker from "../SukkuSticker";
import { useEffect, useImperativeHandle, useRef, useState } from "react";
import {
  Music2,
  Pause,
  Play,
  Plus,
  SkipBack,
  SkipForward,
  X,
} from "lucide-react";

const birthdayTrack = {
  id: "birthday",
  title: "A birthday music box",
  detail: "A little instrumental for Sukku",
  url: "/music/birthday-music-box.mp3",
};

const permanentTracks = [
  birthdayTrack,
  {
    id: "happy-birthday-diljit",
    title: "Happy Birthday",
    detail: "Diljit Dosanjh",
    url: "/music/happy-birthday-diljit-dosanjh.mp3",
  },
  {
    id: "birthday-jordan-sandhu",
    title: "Birthday",
    detail: "Jordan Sandhu",
    url: "/music/birthday-jordan-sandhu.mp3",
  },
];

export default function BirthdayPlaylist({ playerRef }) {
  const [tracks, setTracks] = useState(permanentTracks);
  const [selected, setSelected] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const audio = useRef(null);
  const panel = useRef(null);
  const trigger = useRef(null);
  const localUrls = useRef([]);
  const openingStarted = useRef(false);
  const revealTimer = useRef(null);
  useImperativeHandle(
    playerRef,
    () => ({
      startAfterOpening(delay) {
        if (openingStarted.current) return;
        openingStarted.current = true;
        const player = audio.current;
        // Start inside the gift click so mobile browsers grant audio playback.
        // Keep it silent until the curtains have finished opening.
        player.volume = 0;
        player.src = birthdayTrack.url;
        setSelected(0);
        setError("");
        player
          .play()
          .then(() => setPlaying(true))
          .catch(() => {
            setPlaying(false);
            setError("Tap play to start your birthday music.");
          });
        revealTimer.current = setTimeout(() => {
          player.volume = 0.65;
        }, delay);
      },
    }),
    [],
  );
  useEffect(() => {
    const player = audio.current;
    return () => {
      clearTimeout(revealTimer.current);
      player.pause();
    };
  }, []);
  useEffect(
    () => () => localUrls.current.forEach((url) => URL.revokeObjectURL(url)),
    [],
  );
  useEffect(() => {
    if (!open) return;
    const dialog = panel.current;
    const opener = trigger.current;
    dialog.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      opener?.focus();
    };
  }, [open]);
  async function play(index = selected) {
    const track = tracks[index];
    if (!track) return;
    setSelected(index);
    setError("");
    audio.current.volume = 0.65;
    if (audio.current.getAttribute("src") !== track.url)
      audio.current.src = track.url;
    try {
      await audio.current.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
      setError("Could not play this song. Choose another file or try again.");
    }
  }
  function pause() {
    audio.current.pause();
    setPlaying(false);
  }
  function addSongs(event) {
    const files = Array.from(event.target.files || []).slice(
      0,
      Math.max(0, 4 - tracks.length),
    );
    const added = files.map((file, i) => {
      const url = URL.createObjectURL(file);
      localUrls.current.push(url);
      return {
        id: `local-${localUrls.current.length}-${i}`,
        title: file.name.replace(/\.[^.]+$/, ""),
        detail: "Your song · this session",
        url,
      };
    });
    setTracks((current) => [...current, ...added]);
    event.target.value = "";
    setError("");
  }
  return (
    <>
      <audio
        ref={audio}
        src={birthdayTrack.url}
        preload="none"
        onEnded={() => play((selected + 1) % tracks.length)}
        onError={() => {
          setPlaying(false);
          setError("This audio file could not be loaded.");
        }}
      />
      <button
        ref={trigger}
        className={`music-toggle ${playing ? "music-playing" : ""}`}
        onClick={() => setOpen(true)}
        aria-label="Open birthday playlist"
        aria-haspopup="dialog"
      >
        <Music2 size={17} />
        <span>{playing ? "Birthday radio is on" : "Birthday playlist"}</span>
        {playing && (
          <span className="music-levels" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        )}
      </button>
      {open && (
        <dialog
          ref={panel}
          className="playlist-panel"
          aria-labelledby="playlist-title"
          onCancel={() => setOpen(false)}
          onClick={(e) => {
            if (e.target === panel.current) setOpen(false);
          }}
        >
          <button
            className="close"
            onClick={() => setOpen(false)}
            aria-label="Close playlist"
          >
            <X size={19} />
          </button>
          <p className="eyebrow">Birthday girl gets the aux</p>
          <h2 id="playlist-title">Sukku's birthday radio.</h2>
          <SukkuSticker mood="smile" className="playlist-sticker" />
          <div
            className={`playlist-record ${playing ? "record-playing" : ""}`}
            aria-hidden="true"
          >
            <span>
              27
              <br />
              <small>OCT</small>
            </span>
          </div>
          <p className="playlist-now">
            {playing ? "Now playing" : "Ready when you are"}
          </p>
          <h3 className="playlist-current" aria-live="polite">
            {tracks[selected].title}
          </h3>
          <div className="playlist-controls">
            <button
              aria-label="Previous song"
              onClick={() =>
                play((selected + tracks.length - 1) % tracks.length)
              }
            >
              <SkipBack size={20} />
            </button>
            <button
              className="playlist-play"
              aria-label={
                playing ? "Pause birthday music" : "Play birthday music"
              }
              onClick={() => (playing ? pause() : play())}
            >
              {playing ? <Pause size={22} /> : <Play size={22} />}
            </button>
            <button
              aria-label="Next song"
              onClick={() => play((selected + 1) % tracks.length)}
            >
              <SkipForward size={20} />
            </button>
          </div>
          <ol className="playlist-tracks">
            {tracks.map((track, i) => (
              <li key={track.id}>
                <button
                  className={i === selected ? "selected-song" : ""}
                  onClick={() => play(i)}
                  aria-label={`Play ${track.title}`}
                  aria-current={i === selected ? "true" : undefined}
                >
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <strong>{track.title}</strong>
                    <small>{track.detail}</small>
                  </span>
                  {i === selected && playing ? (
                    <Music2 size={17} />
                  ) : (
                    <Play size={16} />
                  )}
                </button>
              </li>
            ))}
          </ol>
          <label
            className={`playlist-upload ${tracks.length >= 4 ? "playlist-full" : ""}`}
          >
            <Plus size={17} />
            {tracks.length >= 4 ? "Playlist is full" : "Add up to 3 songs"}
            <input
              type="file"
              accept="audio/*,.mp3,.m4a,.wav,.ogg"
              multiple
              onChange={addSongs}
              disabled={tracks.length >= 4}
            />
          </label>
          <p className="playlist-help">
            Added songs stay in this browser session. Send Abhi the files to
            include them in the shared page.
          </p>
          {error && (
            <p className="playlist-error" role="alert">
              {error}
            </p>
          )}
        </dialog>
      )}
    </>
  );
}
