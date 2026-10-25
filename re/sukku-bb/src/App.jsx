import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Music2,
  VolumeX,
  X,
} from "lucide-react";
import { memories } from "./data/memories";

// Memories grounded in the supplied letters; no invented exact day for the summer scenes.
const moments = [
  {
    icon: "☔",
    label: "Sector 22 ki baarish",
    title: "Woh raat, jab hum bheeg kar ghar aaye",
    date: "June–July 2025",
    scene: "rain",
    text: "Sector 22 ki market gaye the hum. Phir achanak itni tez baarish shuru ho gayi. Raat ko hum dono poore bheege hue ghar pahunche. Aaj bhi us raat ko sochta hoon toh woh saath hone wali feeling yaad aati hai. Kya raat thi woh, Sukku.",
  },
  {
    icon: "🎡",
    label: "Sector 34 ka mela",
    title: "Horror house mein aapka haath",
    date: "June–July 2025",
    scene: "fair",
    text: "Sector 34 ke mele mein jab hum horror house gaye, aap itna darr gayi thi ki mujhe kas ke pakad liya. Mere liye us jagah ka sabse yaadgaar hissa koi scary cheez nahi thi. Bas aapka mere itne paas hona tha.",
  },
  {
    icon: "🪔",
    label: "Pooja ke baad",
    title: "Matha tekte waqt, aapka haath",
    date: "23–29 October 2025",
    scene: "prayer",
    text: "Subah naha kar saath pooja karna. Aur aakhir mein matha tekte waqt aapka haath pakadna. Aapke jaane ke baad main floor mat ka right corner pakad kar wahi pal imagine karta tha. Sukku, woh chhota sa moment bahut miss hota hai.",
  },
  {
    icon: "🌙",
    label: "Ek din aur",
    title: "Jab ek aur din mil gaya",
    date: "28 October 2025",
    scene: "night",
    text: "Hum almost ready ho gaye the aur aapki aankhon mein paani aa gaya. Aapne kaha, bas ek aur din ruk jaate hain. Jab mumma ne allow kiya, hum dono kitne khush hue. Uss raat baatein karte-karte teen baj gaye. Paanch baje uthne ka plan toh bas plan hi reh gaya.",
  },
  {
    icon: "💌",
    label: "Woh goodbye",
    title: "Bus chalne se pehle",
    date: "29 October 2025",
    scene: "farewell",
    text: "Thand thi aur hoodie pehenne ko lekar hamari chhoti si nok-jhok bhi hui. Bus stand par aapko bus mil gayi. Jaane se pehle aapke forehead par kiss ki. Saamne smile rakhi, par bus chalte hi aankhen bhar aayi. Har baar bas thoda aur waqt chahiye hota hai.",
  },
  {
    icon: "♡",
    label: "Pehli kiss",
    title: "Jab duniya mein sirf hum the",
    date: "14–17 March 2025",
    scene: "heart",
    text: "Main nervous tha, bas aapko dekhta reh gaya. Kisne pehla move kiya, kaise hua, uss waqt kuch samajh hi nahi aaya. Sab apne aap hua. Bas itna yaad hai ki us pal duniya mein sirf hum dono the.",
  },
];
const letters = [
  {
    title: "Meri birthday girl",
    label: "Aaj, sirf aapke liye",
    stampDate: "27 / OCT",
    text: "Meri Pyari Sukku,\n\nAapke birthday ki tayari karte waqt mere mann mein hamesha ek hi baat hoti hai: aapko special kaise feel karwaun? Pichli baar colours, pages, glue aur photos the. Is baar yeh chhoti si website hai.\n\nMain kabhi-kabhi words mein apna pyaar theek se nahi bata pata. Toh jo bol nahi paata, woh banane ki koshish karta hoon. Har chhoti cheez mein bas yahi hai: aapki smile dekhni hai.\n\nHappy birthday, meri jaan. Aapki khushiyan, aapke sapne, aur aapka woh pyaara sa bachpana hamesha aise hi rahe.",
  },
  {
    title: "Woh sab jo yaad reh gaya",
    label: "Hamari chhoti-chhoti baatein",
    stampDate: "FEB – JUL",
    stampYear: "2025",
    text: "Meri Pyari Sukku,\n\nMujhe lagta tha jab milenge toh bahut kuch bolunga. Phir aap saamne aayi aur main chup ho gaya. Aapka woh message, café ki paas wali chair, aur mere thande haathon ko apne haathon mein pakadna… abhi tak yaad hai.\n\nPhir kitne chapters aaye. Shinchan, fries, mehndi, Harry Potter gift. Shaam ko milna, golgappe, ice cream. Baarish mein bheeg kar aana aur Squid Game dekhte-dekhte subah kar dena.\n\nKabhi socha tha calls par ki ek din yeh sab karenge. Ab dekho, kitni saari yaadein ho gayi hain. Aur main inmein se ek bhi khona nahi chahta.",
  },
  {
    title: "Abhi kitaab baaki hai",
    label: "Hamare aane wale kal ke liye",
    stampDate: "27 / OCT",
    text: "Meri Pyari Sukku,\n\nMujhe aapse materialistic kuch nahi chahiye. Aapka trust, aapka saath, aur ek simple si life jahan hum apne sapne milkar poore karein.\n\nSaath khana banana, shaam ko kya khayenge sochna, aur bina jaane ki tension ke baith kar baatein karna. Chhoti cheezein hain, par mere liye bahut badi khushi hain.\n\nMeri wish hai ki hum ek dusre ko samajhte rahein, support karein, aur har naye phase mein saath grow karein. Ek din kisi pahadi jagah par coffee peete hue in letters ko phir padhein.\n\nApni story ke bahut saare khoobsurat pages likh chuke hain. Abhi poori kitaab likhni baaki hai.",
  },
];

function MemoryPhoto({ memory, eager = false }) {
  return (
    <svg
      className="personal-photo"
      viewBox={memory.crop.join(" ")}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={memory.title}
    >
      <image
        href={memory.image}
        width={memory.size[0]}
        height={memory.size[1]}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
      />
    </svg>
  );
}

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
function Modal({ title, children, onClose, scene, date }) {
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
      aria-labelledby="note-title"
      className={`note-dialog ${scene ? `memory-scene scene-${scene}` : ""}`}
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      <button className="close" onClick={onClose} aria-label="Close note">
        <X size={20} />
      </button>
      {scene === "rain" && (
        <div className="memory-rain" aria-hidden="true">
          {Array.from({ length: 18 }, (_, i) => (
            <i
              key={i}
              style={{
                "--drop": `${i * 5.8}%`,
                "--drop-delay": `${i * 0.13}s`,
              }}
            />
          ))}
        </div>
      )}
      <span className="eyebrow">{date || "A little piece of us"}</span>
      <h2 id="note-title">{title}</h2>
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
    if (!opened && !unwrapping) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            // Keep reveal state outside React-managed className: wish changes rerender it.
            e.target.dataset.revealed = "true";
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((e) => observer.observe(e));
    return () => observer.disconnect();
  }, [opened, unwrapping]);
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
          <div className="stage-curtain curtain-left" aria-hidden="true" />
          <div className="stage-curtain curtain-right" aria-hidden="true" />
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
                reduced ? 0 : 2200,
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
        className={`birthday-app ${opened || unwrapping ? "is-open" : ""}`}
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
                <MemoryPhoto memory={memories[1]} eager />
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
                  <MemoryPhoto memory={memory} />
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
                  Your photos, little pieces of our world.
                  <br />
                  Some things are worth keeping.
                </small>
              </div>
            </div>
          </section>
          <section className="world section reveal" id="world">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / Yaad hai aapko?</p>
                <h2>
                  Special moments.
                  <br />
                  <em>Sirf hamare.</em>
                </h2>
              </div>
              <p>
                Kuch pal bas hum dono ke hain.
                <br />
                Ek yaad kholo. Phir se uss pal mein chalo.
              </p>
            </div>
            <div className="world-map">
              <div className="orbit orbit-one" aria-hidden="true" />
              <div className="orbit orbit-two" aria-hidden="true" />
              <div className="world-center">
                <span>you + me</span>
                <strong>
                  hamari
                  <br />
                  yaadein
                </strong>
                <span aria-hidden="true">♡</span>
              </div>
              {moments.map((moment, i) => (
                <button
                  key={moment.scene}
                  className={`world-object object-${i}`}
                  onClick={() => setNote(moment)}
                  aria-label={`Open memory: ${moment.label}`}
                >
                  <span className="object-icon" aria-hidden="true">
                    {moment.icon}
                  </span>
                  <span>{moment.label}</span>
                  <i aria-hidden="true">↗</i>
                </button>
              ))}
              <span className="world-doodle doodle-one" aria-hidden="true">
                ✧
              </span>
              <span className="world-doodle doodle-two" aria-hidden="true">
                ♡
              </span>
            </div>
          </section>

          <section className="story-chapters section reveal" id="story">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Hamari kahani ke milestones</p>
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
                  "YouTube par ek live song ki chat mein mile. Uske baad Snapchat par add kiya. Tab humein kya pata tha ki yeh hello kahaan tak le jaayegi.",
                  "Ek naam, jo dheere-dheere sabse khaas ho gaya.",
                ],
                [
                  "02",
                  "Wapas aayi woh baatein",
                  "29 October 2024",
                  "Kuch waqt ki doori ke baad phir baat shuru hui. Pehli call raat ek baje se chaar-paanch baje tak chali. Mere “aur batao” par aapki hansi ab bhi yaad hai.",
                  "Conversation khatam hi nahi ho rahi thi.",
                ],
                [
                  "03",
                  "Ek bus, do shehar",
                  "3 March 2025",
                  "Hoshiarpur se Ludhiana tak saath safar kiya. Uss din aapko ek chhota sa teddy diya tha. Chhota sa route tha, lekin mere liye ek naya chapter.",
                  "Safar ka favourite hissa, paas wali seat.",
                ],
                [
                  "04",
                  "Pehla poora saal",
                  "2 February 2026",
                  "Ek saal officially saath. College se office tak kitne phases badle. Hamari anniversary par peeche dekha toh laga, pehle sirf plans the, ab ek saal bhar ki kahani thi.",
                  "Ek milestone, aur aage bahut saara safar.",
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
                <p className="eyebrow">Sambhal kar rakha hai</p>
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
                <span>KEPT CLOSE</span>
                <strong>
                  A rose.
                  <br />
                  Two photos.
                </strong>
                <small>
                  A little chocolate.
                  <br />A lot to remember.
                </small>
                <span>KEEP THIS ONE FOREVER ♡</span>
              </div>
              <div className="keepsake-writing">
                <p>
                  Pehli mulaqat ka rose, chocolate, aur aapki woh do photos jo
                  mere wallet mein hain. Kuch cheezein bas rakh nahi di jaati,
                  sambhal kar rakhi jaati hain.
                </p>
                <p>
                  Aapne kiss karke jo tissue diya tha, woh bhi. Kisi aur ko
                  shayad ek chhoti si cheez lage. Mere liye us din ka ek hissa
                  hai.
                </p>
                <span className="handwritten">
                  Inki jagah kabhi koi aur cheez nahi le sakti.
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
                      {letter.stampDate || "27 / OCT"}
                      {letter.stampYear && (
                        <>
                          <br />
                          {letter.stampYear}
                        </>
                      )}
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
          <section
            className={`wish-section section reveal ${wish ? "wish-made" : ""}`}
            id="wish"
          >
            <div className="wish-constellation" aria-hidden="true">
              {Array.from({ length: 16 }, (_, i) => (
                <span
                  key={i}
                  style={{
                    "--star-x": `${(i * 37) % 100}%`,
                    "--star-y": `${(i * 23) % 95}%`,
                    "--star-delay": `${i * 0.19}s`,
                  }}
                >
                  {i % 3 === 0 ? "✦" : "✧"}
                </span>
              ))}
            </div>
            <p className="eyebrow">04 / A birthday wish, just yours</p>
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
            <div className="birthday-table">
              <span className="wish-orbit orbit-a" aria-hidden="true" />
              <span className="wish-orbit orbit-b" aria-hidden="true" />
              <span className="table-note handwritten">
                Birthday girl gets the first wish.
              </span>
              <button
                className={`cake ${wish ? "blown" : ""}`}
                aria-label={
                  wish
                    ? "Relight birthday candles"
                    : "Blow out birthday candles"
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
                <span className="cake-topper">Sukku</span>
                <span className="icing">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                <span className="cake-layer">
                  <span>♡</span>
                  <i className="cake-piping" />
                </span>
                <span className="cake-bottom-tier">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                <span className="cake-plate" />
              </button>
              <span className="cake-pedestal" aria-hidden="true" />
              {wish && (
                <span className="wish-ribbon" key={burst}>
                  Your wish is on its way ♡
                </span>
              )}
            </div>
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
        <Modal
          title={note.title}
          scene={note.scene}
          date={note.date}
          onClose={() => setNote(null)}
        >
          <p className="letter-text">{note.text}</p>
        </Modal>
      )}
    </>
  );
}
