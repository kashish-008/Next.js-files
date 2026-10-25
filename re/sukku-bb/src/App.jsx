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
    title: "Meri birthday girl",
    label: "Aaj, sirf aapke liye",
    text: "Meri Pyari Sukku,\n\nAapke birthday ki tayari karte waqt mere mann mein hamesha ek hi baat hoti hai: aapko special kaise feel karwaun? Pichli baar colours, pages, glue aur photos the. Is baar yeh chhoti si website hai.\n\nMain kabhi-kabhi words mein apna pyaar theek se nahi bata pata. Toh jo bol nahi paata, woh banane ki koshish karta hoon. Har chhoti cheez mein bas yahi hai: aapki smile dekhni hai.\n\nHappy birthday, meri jaan. Aapki khushiyan, aapke sapne, aur aapka woh pyaara sa bachpana hamesha aise hi rahe.",
  },
  {
    title: "Woh sab jo yaad reh gaya",
    label: "Hamari chhoti-chhoti baatein",
    text: "Meri Pyari Sukku,\n\nMujhe lagta tha jab milenge toh bahut kuch bolunga. Phir aap saamne aayi aur main chup ho gaya. Aapka woh message, café ki paas wali chair, aur mere thande haathon ko apne haathon mein pakadna… abhi tak yaad hai.\n\nPhir kitne chapters aaye. Shinchan, fries, mehndi, Harry Potter gift. Shaam ko milna, golgappe, ice cream. Baarish mein bheeg kar aana aur Squid Game dekhte-dekhte subah kar dena.\n\nKabhi socha tha calls par ki ek din yeh sab karenge. Ab dekho, kitni saari yaadein ho gayi hain. Aur main inmein se ek bhi khona nahi chahta.",
  },
  {
    title: "Abhi kitaab baaki hai",
    label: "Hamare aane wale kal ke liye",
    text: "Meri Pyari Sukku,\n\nMujhe aapse materialistic kuch nahi chahiye. Aapka trust, aapka saath, aur ek simple si life jahan hum apne sapne milkar poore karein.\n\nSaath khana banana, shaam ko kya khayenge sochna, aur bina jaane ki tension ke baith kar baatein karna. Chhoti cheezein hain, par mere liye bahut badi khushi hain.\n\nMeri wish hai ki hum ek dusre ko samajhte rahein, support karein, aur har naye phase mein saath grow karein. Ek din kisi pahadi jagah par coffee peete hue in letters ko phir padhein.\n\nApni story ke bahut saare khoobsurat pages likh chuke hain. Abhi poori kitaab likhni baaki hai.",
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
  const [unwrapping, setUnwrapping] = useState(false);
  const openingTimer = useRef(null);
  useEffect(() => () => clearTimeout(openingTimer.current), []);
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
        <div
          className={`gift-opening ${unwrapping ? "unwrapping" : ""}`}
          aria-busy={unwrapping}
        >
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
            disabled={unwrapping}
            onClick={() => {
              setUnwrapping(true);
              const reduced = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
              ).matches;
              openingTimer.current = setTimeout(
                () => {
                  setOpened(true);
                  celebrate();
                },
                reduced ? 0 : 1450,
              );
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

          <section className="story-chapters section reveal" id="story">
            <div className="section-heading">
              <div>
                <p className="eyebrow">The story behind this little world</p>
                <h2>
                  Kitni door se,
                  <br />
                  <em>kitne paas.</em>
                </h2>
              </div>
              <p>
                Har chapter mein ek chhoti si baat hai jo ab bhi yaad hai. Aapko
                bhi?
              </p>
            </div>
            <div className="chapter-list">
              {[
                [
                  "01",
                  "Ek random chat",
                  "21 July 2021",
                  "Ek live song ki chat se shuru hui baat Snapchat tak pahunch gayi. Tab kya pata tha ki screen ke us paar wali ladki ek din meri favourite person ban jayegi.",
                  "“Aur batao…”",
                ],
                [
                  "02",
                  "Phir se shuru hui baatein",
                  "29 October 2024",
                  "Pehli call par nervousness thi. Phir baatein aisi chali ki raat ke ek baje se chaar-paanch baj gaye. Mere paas sawaal kam the, “aur batao” bahut zyada.",
                  "Ek call. Aur phir roz ka intezaar.",
                ],
                [
                  "03",
                  "Finally, aap saamne thi",
                  "2 February 2025",
                  "Subah chaar baje uthna, bus ka safar, aur phir Bathinda mein aapko pehli baar dekhna. Black-white top, flower earrings… kuch details dil bina koshish ke yaad rakh leta hai. Café mein saamne baitha toh aapne paas bula liya.",
                  "Saamne wali chair nahi. Paas wali.",
                ],
                [
                  "04",
                  "Woh chaar din",
                  "March 2025",
                  "Shinchan, burger aur fries, mehndi, dance seekhna aur Harry Potter wala gift. Calls par jo simple si cheezein imagine ki thi, woh ek-ek karke real ho rahi thi.",
                  "Ek din aur ruk jao na.",
                ],
                [
                  "05",
                  "200 km se 3 km",
                  "June–July 2025",
                  "Training ke dino mein shaam ka matlab tha aapse milna. Park, phase 5 ka dosa, 3B2 ke golgappe, Sukhna Lake ki photos aur woh pehli movie date. Movie kaisi bhi thi… company toh best thi.",
                  "Bas aaj hi khayenge, kal nahi.",
                ],
                [
                  "06",
                  "Birthday ki secret tayari",
                  "October 2025",
                  "Stationery ki shopping, photos select karna aur raat ko thoda-thoda cards banana. Kisi ke aane par samaan bed ke neeche chhupa dena. Aapko smile karwana tha, toh thodi mehnat banti thi.",
                  "Gift se zyada, uske peeche ka pyaar.",
                ],
              ].map(([number, title, date, text, aside]) => (
                <article className="chapter reveal" key={number}>
                  <span className="chapter-number">{number}</span>
                  <div>
                    <p className="eyebrow">{date}</p>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <span className="handwritten">{aside}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section className="keepsakes section reveal">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Small things I kept</p>
                <h2>
                  Cheezein chhoti thi.
                  <br />
                  <em>Feeling nahi.</em>
                </h2>
              </div>
              <p>
                Some souvenirs don't belong in a drawer. They stay with you.
              </p>
            </div>
            <div className="keepsake-layout">
              <div className="keepsake-ticket">
                <span>ADMIT TWO</span>
                <strong>
                  Our first
                  <br />
                  movie date
                </strong>
                <small>
                  Film: questionable
                  <br />
                  Company: favourite
                </small>
                <span>KEEP THIS ONE FOREVER ♡</span>
              </div>
              <div className="keepsake-writing">
                <p>
                  Wallet mein rakhi photos. Harry Potter wala gift. Ek chhota sa
                  teddy. Har cheez kisi moment ka shortcut hai.
                </p>
                <p>
                  Aur kuch yaadein toh bina kisi souvenir ke reh gayi: baarish
                  mein ghar aana, saath khana banana, aur ek episode ke chakkar
                  mein subah ke paanch baj jaana.
                </p>
                <span className="handwritten">
                  ordinary things. very extraordinary company.
                </span>
              </div>
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
