import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Heart,
  Music2,
  VolumeX,
  X,
} from "lucide-react";
import { memories } from "./data/memories";

// Sample content only. Personalize here without uploading private letters.
const moments = [
  [
    "☕",
    "A little chai",
    "Our café memory",
    "Add a favourite café memory here.",
  ],
  [
    "🍟",
    "Favourite snacks",
    "Something delicious",
    "Add your own food story or inside joke here.",
  ],
  [
    "🎬",
    "Movie nights",
    "One more episode?",
    "Add a movie, show, or funny review here.",
  ],
  [
    "☔",
    "Rainy days",
    "A little rain",
    "Add your favourite rainy-day memory here.",
  ],
  [
    "🍦",
    "Something sweet",
    "A little treat",
    "Add her favourite flavour and a happy memory here.",
  ],
  [
    "🏡",
    "Our kind of happy",
    "The little things",
    "Add an ordinary moment that became special here.",
  ],
];
const letters = [
  {
    title: "Birthday girl ke naam",
    label: "For today",
    text: "Dear Sukku,\n\nHappy birthday! This envelope is waiting for your birthday message. Write what you love about her and what you wish for her this year.\n\nAdd your own words here, in the way you would say them.",
  },
  {
    title: "Chhoti baatein, badi khushi",
    label: "For a little smile",
    text: "Dear Sukku,\n\nThis letter is a place for a favourite memory. Add a funny moment, a tiny detail, or an inside joke that only you two understand.\n\nMake it yours.",
  },
  {
    title: "So many tomorrows",
    label: "For the days ahead",
    text: "Dear Sukku,\n\nThis letter is for the memories still to come. Add a place you want to visit, something you want to do together, or a little birthday promise.\n\nYour own words belong here.",
  },
];

function Confetti({ burst }) {
  return (
    <div className="confetti" key={burst} aria-hidden="true">
      {burst > 0 &&
        Array.from({ length: 55 }, (_, i) => (
          <i
            key={i}
            style={{
              "--x": `${(i * 37) % 100}%`,
              "--delay": `${(i % 8) * 0.07}s`,
              "--turn": `${i * 47}deg`,
              "--colour": ["#ab283c", "#e8b54a", "#eea8ac", "#5e7461"][i % 4],
            }}
          />
        ))}
    </div>
  );
}
function Modal({ title, children, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const dialog = ref.current;
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className="note-dialog"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      <button className="close" onClick={onClose} aria-label="Close note">
        <X size={20} />
      </button>
      <span className="eyebrow">A little piece of us</span>
      <h2>{title}</h2>
      {children}
      <div className="signature">
        Apka pyaar,
        <br />
        <strong>Abhi ♡</strong>
      </div>
    </dialog>
  );
}
export default function App() {
  const [opened, setOpened] = useState(false);
  const [burst, setBurst] = useState(0);
  const [slide, setSlide] = useState(0);
  const [note, setNote] = useState(null);
  const [wish, setWish] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [popped, setPopped] = useState([]);
  const audio = useRef(null);
  useEffect(() => {
    if (opened) return;
    const before = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = before;
    };
  }, [opened]);
  useEffect(() => {
    if (!opened) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((e) => observer.observe(e));
    return () => observer.disconnect();
  }, [opened]);
  async function toggleMusic() {
    if (playing) {
      audio.current.pause();
      setPlaying(false);
    } else {
      try {
        await audio.current.play();
        setPlaying(true);
        setAudioError(false);
      } catch {
        setAudioError(true);
      }
    }
  }
  function celebrate() {
    setBurst((b) => b + 1);
  }
  const memory = memories[slide];
  return (
    <>
      <audio ref={audio} src="/music/our-song.mp3" loop preload="none" />
      <Confetti burst={burst} />
      {!opened && (
        <div className="gift-opening">
          <span className="opening-star star-a">✳</span>
          <span className="opening-star star-b">✧</span>
          <p className="eyebrow">27 October · A very special delivery</p>
          <h1>
            For my favourite
            <br />
            <em>birthday girl.</em>
          </h1>
          <p>Sukku, aapke liye kuch banaya hai.</p>
          <button
            className="gift"
            onClick={() => {
              setOpened(true);
              celebrate();
            }}
            aria-label="Unwrap your birthday surprise"
          >
            <span className="bow">୨୧</span>
            <span className="gift-lid" />
            <span className="gift-ribbon" />
            <span className="gift-tag">
              To Sukku
              <br />
              with love ♡
            </span>
          </button>
          <span className="handwritten">tap the present to unwrap ↗</span>
          <small>Made with a little nervousness & a lot of pyaar.</small>
        </div>
      )}
      <div
        className={`birthday-app ${opened ? "is-open" : ""}`}
        inert={!opened}
      >
        <header>
          <a href="#home" className="brand">
            S<span>♡</span>A
          </a>
          <span className="header-note">a little birthday keepsake</span>
          <a href="#letters" className="header-link">
            A note for you ↗
          </a>
        </header>
        <main>
          <section className="hero" id="home">
            <div className="bunting" aria-hidden="true">
              {Array.from({ length: 11 }, (_, i) => (
                <i key={i} />
              ))}
            </div>
            <div className="hero-copy">
              <p className="eyebrow">27 October · Officially Sukku day</p>
              <h1>
                Happy
                <br />
                <em>birthday,</em>
                <br />
                <span>
                  Sukku<span className="title-star">✳</span>
                </span>
              </h1>
              <p className="hero-description">
                Thode surprises. Bahut saari yaadein.
                <br />
                Aur aapke liye, mera saara pyaar.
              </p>
              <a className="primary" href="#memories">
                Your first little surprise <ArrowDown size={17} />
              </a>
              <span className="handwritten hero-note">
                yes, all of this is for you ♡
              </span>
            </div>
            <div className="hero-art">
              <div className="birthday-stamp">
                BIRTHDAY
                <br />
                <strong>27</strong>
                <br />
                OCTOBER
              </div>
              <div className="polaroid hero-photo">
                <img
                  src={memories[0].image}
                  alt="A photo from our memory collection"
                />
                <span>my favourite person, always.</span>
              </div>
              <div className="mini-note">
                Dear Sukku,
                <br />
                aaj aap extra
                <br />
                <strong>special ho.</strong>
                <span>— Abhi ♡</span>
              </div>
              <span className="art-spark" aria-hidden="true">
                ✧
              </span>
              {["Make a wish!", "Extra pyaar today", "Birthday hugs!"].map(
                (text, i) =>
                  !popped.includes(i) && (
                    <button
                      key={i}
                      className={`balloon balloon-${i}`}
                      aria-label={`Pop balloon ${i + 1}`}
                      onClick={() => {
                        setPopped((p) => [...p, i]);
                        setNote({
                          title: text,
                          text: "A little birthday reminder: aap meri favourite person ho. ♡",
                        });
                        celebrate();
                      }}
                    >
                      <span>♡</span>
                    </button>
                  ),
              )}
              <span className="balloon-hint handwritten">
                psst… tap a balloon
              </span>
            </div>
            <div className="hero-bottom">
              <span>A tiny world, made just for you</span>
              <span>Scroll slowly. Smile often. ↓</span>
            </div>
          </section>
          <div className="ticker" aria-hidden="true">
            <span>
              birthday hugs ✳ madam ji ke nakhre ♡ one more ice cream ✳ a little
              extra pyaar ♡ happy sukku day ✳
            </span>
          </div>
          <section className="scrapbook section reveal" id="memories">
            <div className="section-heading">
              <div>
                <p className="eyebrow">01 / Little pieces of us</p>
                <h2>
                  Some days stay
                  <br />
                  <em>with you.</em>
                </h2>
              </div>
              <p>
                Photos, chhoti baatein, aur woh feelings.
                <br />
                Our favourite kind of time travel.
              </p>
            </div>
            <div className="scrapbook-layout">
              <div className="memory-stack">
                <div className="paper-behind" />
                <article className="polaroid memory-photo" key={memory.id}>
                  <span className="tape" />
                  <img src={memory.image} alt={memory.title} loading="lazy" />
                  <span>
                    {String(slide + 1).padStart(2, "0")} / little moments, big
                    feelings ♡
                  </span>
                </article>
              </div>
              <div className="memory-caption" aria-live="polite">
                <span className="handwritten">
                  filed under: favourite memories
                </span>
                <p className="eyebrow">{memory.date}</p>
                <h3>{memory.title}</h3>
                <p>{memory.text}</p>
                <div className="deck-controls">
                  <button
                    aria-label="Previous memory"
                    onClick={() =>
                      setSlide(
                        (s) => (s + memories.length - 1) % memories.length,
                      )
                    }
                  >
                    <ArrowLeft />
                  </button>
                  <span>
                    {String(slide + 1).padStart(2, "0")}{" "}
                    <i>/ {memories.length}</i>
                  </span>
                  <button
                    aria-label="Next memory"
                    onClick={() => setSlide((s) => (s + 1) % memories.length)}
                  >
                    <ArrowRight />
                  </button>
                </div>
                <small>
                  Photos are from the existing collection.
                  <br />A little space for your favourite captions.
                </small>
              </div>
            </div>
          </section>
          <section className="world section reveal" id="world">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / The little things</p>
                <h2>
                  Special moments.
                  <br />
                  <em>Our little world.</em>
                </h2>
              </div>
              <p>
                Not every memory needs a date.
                <br />
                Tap a little thing. Find a little feeling.
              </p>
            </div>
            <div className="world-map">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="world-center">
                <span>you + me</span>
                <strong>
                  our little
                  <br />
                  world
                </strong>
                <Heart size={25} />
              </div>
              {moments.map(([icon, label, title, text], i) => (
                <button
                  key={title}
                  className={`world-object object-${i}`}
                  onClick={() => setNote({ title, text })}
                >
                  <span className="object-icon">{icon}</span>
                  <span>{label}</span>
                  <i>↗</i>
                </button>
              ))}
              <span className="world-doodle doodle-one">✧</span>
              <span className="world-doodle doodle-two">♡</span>
            </div>
          </section>
          <section className="love-strip reveal">
            <span className="eyebrow">A small confession</span>
            <p>
              Aapke saath ordinary days bhi
              <br />
              <em>favourite memories</em> ban jaate hain.
            </p>
            <span className="handwritten">
              and that’s my favourite thing about us.
            </span>
          </section>
          <section className="letters section reveal" id="letters">
            <div className="section-heading">
              <div>
                <p className="eyebrow">03 / Sealed with pyaar</p>
                <h2>
                  Some things deserve
                  <br />
                  <em>a little letter.</em>
                </h2>
              </div>
              <p>
                Text message se thoda zyada.
                <br />
                Dil se, aapke liye. Open any envelope.
              </p>
            </div>
            <div className="envelopes">
              {letters.map((letter, i) => (
                <button
                  className={`envelope envelope-${i}`}
                  key={letter.title}
                  onClick={() => setNote(letter)}
                >
                  <span className="envelope-body">
                    <span className="envelope-flap" />
                    <span className="postmark">
                      WITH LOVE
                      <br />
                      27 / OCT
                    </span>
                    <span className="seal">♡</span>
                    <span className="envelope-to">Sukku ke liye</span>
                  </span>
                  <span className="envelope-caption">
                    <small>
                      0{i + 1} / {letter.label}
                    </small>
                    <strong>{letter.title}</strong>
                    <span className="handwritten">open me ↗</span>
                  </span>
                </button>
              ))}
            </div>
          </section>
          <section className="wish-section section reveal" id="wish">
            <p className="eyebrow">04 / One last birthday ritual</p>
            <h2>
              Close your eyes.
              <br />
              <em>Make a wish.</em>
            </h2>
            <p>
              Jo bhi dil mein hai… bas soch lo.
              <br />
              Ready? Candle aapka wait kar rahi hai.
            </p>
            <button
              className={`cake ${wish ? "blown" : ""}`}
              aria-label={
                wish ? "Relight birthday candles" : "Blow out birthday candles"
              }
              onClick={() => {
                setWish((w) => !w);
                if (!wish) celebrate();
              }}
            >
              <span className="candles">
                {[0, 1, 2].map((i) => (
                  <span className="candle" key={i}>
                    <i className="flame" />
                  </span>
                ))}
              </span>
              <span className="icing">♡ ♡ ♡</span>
              <span className="cake-layer">for Sukku</span>
              <span className="cake-plate" />
            </button>
            <span className="handwritten">
              {wish
                ? "one more wish? tap to relight"
                : "tap the cake to blow out the candles ↑"}
            </span>
            <div className="wish-message" aria-live="polite">
              {wish ? (
                <>
                  <h3>Happy birthday, meri jaan! ♡</h3>
                  <p>
                    Aap khush raho. Aapke sapne poore hon.
                    <br />
                    Aur hum aur bahut saari yaadein banayein.
                  </p>
                  <button className="primary" onClick={celebrate}>
                    A little more celebration ✳
                  </button>
                </>
              ) : (
                <p className="quiet">A little wish. A whole lot of love.</p>
              )}
            </div>
          </section>
        </main>
        <footer>
          <a href="#home" className="brand">
            S<span>♡</span>A
          </a>
          <p>
            Made just for you, Sukku.
            <br />
            <span className="handwritten">Apka pyaar, Abhi ♡</span>
          </p>
          <a href="#home">Back to the birthday girl ↑</a>
        </footer>
        <button
          className="music-toggle"
          onClick={toggleMusic}
          aria-label={playing ? "Pause music" : "Play music"}
          aria-pressed={playing}
        >
          {playing ? <Music2 size={17} /> : <VolumeX size={17} />}
          <span>
            {audioError
              ? "Tap to retry music"
              : playing
                ? "Our little soundtrack"
                : "Music off"}
          </span>
        </button>
      </div>
      {note && (
        <Modal title={note.title} onClose={() => setNote(null)}>
          <p className="letter-text">{note.text}</p>
        </Modal>
      )}
    </>
  );
}
