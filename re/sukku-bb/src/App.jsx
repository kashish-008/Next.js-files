import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  X,
  Heart,
  Gift,
  Sparkles,
  PartyPopper,
  Cake,
} from "lucide-react";
import { memories } from "./data/memories";
import BirthdayPlaylist from "./components/BirthdayPlaylist/BirthdayPlaylist";

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
    label: "Pooja ke time",
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

function BirthdayBackdrop() {
  const decorations = [
    Heart,
    Gift,
    Sparkles,
    Cake,
    Heart,
    PartyPopper,
    Gift,
    Heart,
    Sparkles,
    Cake,
    PartyPopper,
    Heart,
  ];
  return (
    <div className="birthday-backdrop" aria-hidden="true">
      {decorations.map((Icon, i) => (
        <span
          key={i}
          className="background-charm"
          style={{
            "--charm-x": `${i % 2 ? 94 : 2}%`,
            "--charm-y": `${8 + Math.floor(i / 2) * 16}%`,
            "--charm-delay": `${-i * 0.8}s`,
            "--charm-turn": `${i % 2 ? 15 : -18}deg`,
          }}
        >
          <Icon size={i % 3 === 0 ? 28 : 22} strokeWidth={1.2} />
        </span>
      ))}
    </div>
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
  const [surpriseStep, setSurpriseStep] = useState(0);
  const [finalOpen, setFinalOpen] = useState(false);
  const [fortune, setFortune] = useState(-1);
  const [foundStars, setFoundStars] = useState([]);
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
  function followClue(target) {
    setNote(null);
    requestAnimationFrame(() => {
      const element = document.getElementById(target);
      element?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "center",
      });
      element?.focus({ preventScroll: true });
    });
  }
  function openBalloon(index) {
    setSurpriseStep((step) => Math.max(step, 1));
    const surprises = [
      [
        "Sukku, aapke naam ek secret…",
        "Iss page mein teen chhoti surprises chhupayi hain. Pehla clue: kuch photos ke peeche bhi baatein hoti hain. Agle section mein photo ke paas ek laal tab dhoondho.",
      ],
      [
        "Madam ji, no peeking!",
        "Aapne secret trail dhoondh li. Ab seedha neeche mat bhaagna… pehle photo ke peeche wala laal tab kholna. Wahan kuch aapka wait kar raha hai.",
      ],
      [
        "Ek balloon, pehla clue",
        "Aapka birthday mission shuru. Ek photo hai, uske paas ek chhota laal tab hai. Usko kheenchne se pehla secret khulega. Ready?",
      ],
    ];
    setNote({
      title: surprises[index][0],
      text: surprises[index][1],
      nextTarget: "photo-surprise",
      nextLabel: "Pehla clue dhoondhein →",
    });
    celebrate();
  }
  function celebrate() {
    setBurst((b) => b + 1);
  }
  const memory = memories[slide];
  return (
    <>
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
        <BirthdayBackdrop />
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
                <button
                  className="portrait-heart"
                  aria-label="Open the little heart on Sukku's photo"
                  onClick={() => {
                    setNote({
                      title: "Photo ke kone mein ek chhoti si baat",
                      text: "Aaj gallery mein apni ek nayi favourite photo add karna. Birthday girl ki smile waali. Iss frame ki tarah, apni khushi ko bhi thoda sambhal ke rakhna.",
                    });
                    celebrate();
                  }}
                >
                  ♡
                </button>
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
                (text, i) => (
                  <button
                    key={i}
                    className={`balloon balloon-${i}`}
                    aria-label={`Open birthday surprise ${i + 1}`}
                    onClick={() => openBalloon(i)}
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
            <div className="ticker-track">
              {[0, 1].map((copy) => (
                <div className="ticker-group" key={copy}>
                  {[
                    "birthday hugs",
                    "madam ji ke nakhre",
                    "one more ice cream",
                    "a little extra pyaar",
                    "happy sukku day",
                  ].map((text, i) => (
                    <span key={text}>
                      {text} <i>{i % 2 ? "♡" : "✳"}</i>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <aside
            className="surprise-trail"
            aria-label="Birthday surprise trail"
          >
            <div>
              <span className="eyebrow">Sukku's little birthday mission</span>
              <p aria-live="polite">
                {
                  [
                    "Teen secrets chhupe hain. Ek balloon se shuru karo.",
                    "Pehla clue mil gaya. Ab photo ke paas dekho.",
                    "Ab ek khaas seal aapka wait kar rahi hai.",
                    "Secrets mil gaye. Ab apni wish maango.",
                    "All secrets found. Lekin ek last baat…",
                  ][surpriseStep]
                }
              </p>
            </div>
            <ol>
              {[
                "A balloon",
                "Photo ke peeche",
                "The secret seal",
                "Your wish",
              ].map((label, i) => (
                <li
                  key={label}
                  className={
                    surpriseStep > i
                      ? "trail-found"
                      : surpriseStep === i
                        ? "trail-current"
                        : ""
                  }
                >
                  <span>
                    {surpriseStep > i ? "✓" : String(i + 1).padStart(2, "0")}
                  </span>
                  {surpriseStep >= i ? label : "???"}
                </li>
              ))}
            </ol>
          </aside>
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
                <button
                  id="photo-surprise"
                  className={`photo-secret ${surpriseStep >= 2 ? "secret-found" : ""}`}
                  disabled={surpriseStep < 1}
                  aria-label={
                    surpriseStep < 1
                      ? "Open a balloon to unlock the hidden photo note"
                      : "Open the secret behind the photo"
                  }
                  onClick={() => {
                    setSurpriseStep((step) => Math.max(step, 2));
                    setNote({
                      title: "Birthday rule no. 1",
                      text: "Aaj ke din apne aap ko thoda extra pyaar dena. Apni favourite photo lena, apne nakhre poore karna, aur bina kisi reason ke bhi smile karna.\n\nAur haan… abhi ek sealed surprise baaki hai. Letters ke neeche ek golden seal dhoondho. Us par sirf aapka naam hai.",
                      nextTarget: "secret-seal",
                      nextLabel: "Agla secret dhoondho →",
                    });
                    celebrate();
                  }}
                >
                  <span aria-hidden="true">↗</span>
                  {surpriseStep < 1
                    ? "A balloon has the key"
                    : surpriseStep >= 2
                      ? "Read your secret again"
                      : "Psst… photo ke peeche"}
                </button>
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
          <div className="fortune-stop">
            <div>
              <span className="eyebrow">Ek chhota sa birthday detour</span>
              <h2>Madam ji ki lucky chit.</h2>
              <p>Folded paper. Ek chhota sa message. Kya niklega?</p>
            </div>
            <button
              className={`fortune-ticket ${fortune >= 0 ? "fortune-open" : ""}`}
              aria-label="Unfold a birthday fortune"
              onClick={() => {
                setFortune((n) => (n + 1) % 3);
                celebrate();
              }}
            >
              <span className="fortune-fold" aria-hidden="true">
                ✧
              </span>
              <span className="fortune-paper" aria-live="polite">
                {fortune < 0
                  ? "Sukku ke liye. No peeking."
                  : [
                      "Aaj koi chhoti si khushi choose karo. Bina “baad mein” bole.",
                      "Birthday forecast: extra smiles, zero boring wishes, aur thode se nakhre allowed.",
                      "Aaj apni favourite cheez ke liye haan bolna. Yeh chit permission hai.",
                    ][fortune]}
              </span>
              <small>
                {fortune < 0 ? "tap to unfold" : "ek aur chit? tap again ↗"}
              </small>
            </button>
          </div>
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
            className="sealed-surprise"
            id="secret-seal"
            tabIndex={-1}
            aria-labelledby="seal-heading"
          >
            <div>
              <span className="eyebrow">For Sukku's eyes only</span>
              <h2 id="seal-heading">Iske andar kya hai?</h2>
              <p>
                {surpriseStep < 2
                  ? "Photo ke peeche wali note mein iski chaabi hai."
                  : "Aap yahan tak aa gayi. Ab seal khol kar dekho."}
              </p>
            </div>
            <button
              className={`secret-seal-button ${surpriseStep >= 3 ? "seal-broken" : ""}`}
              disabled={surpriseStep < 2}
              aria-label="Break Sukku's secret seal"
              onClick={() => {
                setSurpriseStep((step) => Math.max(step, 3));
                setNote({
                  title: "Aaj aapka din hai, Sukku.",
                  text: "Toh ek chhoti si request hai: iss waqt sab kuch side par rakh kar apne liye ek wish socho. Koi aisi cheez jo aap dil se chahti ho.\n\nMujhe batana zaroori nahi. Yeh wali wish sirf aapki hai. Agla surprise candles ke bujhne ke baad milega.",
                  nextTarget: "wish",
                  nextLabel: "Apni wish maangein →",
                });
                celebrate();
              }}
            >
              <span aria-hidden="true">♡</span>
              <strong>{surpriseStep < 2 ? "Sealed" : "Sukku"}</strong>
              <small>
                {surpriseStep >= 3
                  ? "open again"
                  : surpriseStep < 2
                    ? "find the key first"
                    : "tap to break the seal"}
              </small>
            </button>
          </section>
          <section
            className={`wish-section section reveal ${wish ? "wish-made" : ""}`}
            id="wish"
            tabIndex={-1}
          >
            <div className="wish-constellation">
              {Array.from({ length: 16 }, (_, i) =>
                i % 5 === 0 ? (
                  <button
                    key={i}
                    className={`wish-secret-star ${foundStars.includes(i) ? "star-found" : ""}`}
                    style={{
                      "--star-x": `${(i * 37) % 100}%`,
                      "--star-y": `${(i * 23) % 95}%`,
                    }}
                    aria-label={`Catch birthday star ${i / 5 + 1}`}
                    onClick={() => {
                      setFoundStars((stars) =>
                        stars.includes(i) ? stars : [...stars, i],
                      );
                      setNote({
                        title: "Aapne ek birthday star pakad liya!",
                        text: [
                          "Yeh star aapki courage ke naam. Apne dreams ke liye ek chhota step, jab aap ready ho.",
                          "Yeh star aapke rest ke naam. Kabhi khud ko bhi utna hi pyaar se treat karna.",
                          "Yeh star aapki curiosity ke naam. Kuch naya try karna, sirf isliye kyunki mann hai.",
                          "Aur yeh wala… bas isliye, kyunki birthday girl ko ek extra star milna chahiye.",
                        ][i / 5],
                      });
                      celebrate();
                    }}
                  >
                    {foundStars.includes(i) ? "★" : "✧"}
                  </button>
                ) : (
                  <span
                    key={i}
                    aria-hidden="true"
                    style={{
                      "--star-x": `${(i * 37) % 100}%`,
                      "--star-y": `${(i * 23) % 95}%`,
                      "--star-delay": `${i * 0.19}s`,
                    }}
                  >
                    {i % 3 === 0 ? "✦" : "✧"}
                  </span>
                ),
              )}
            </div>
            <p className="eyebrow">04 / A birthday wish, just yours</p>
            <span className="star-hint handwritten">
              psst… four stars have something inside.{" "}
              {foundStars.length > 0 ? `${foundStars.length}/4 found` : ""}
            </span>
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
                  if (!wish) {
                    celebrate();
                    if (surpriseStep >= 3) setSurpriseStep(4);
                  }
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
            <div className="last-surprise" aria-live="polite">
              {surpriseStep >= 3 && wish && !finalOpen ? (
                <>
                  <span className="handwritten">Ruko… ek last cheez hai.</span>
                  <button
                    className="final-secret-button"
                    onClick={() => {
                      setFinalOpen(true);
                      celebrate();
                    }}
                  >
                    Sirf aapke liye. Open? <Gift size={18} />
                  </button>
                </>
              ) : null}
              {finalOpen && (
                <div className="final-birthday-note">
                  <span className="eyebrow">You found every little secret</span>
                  <h3>Mera birthday plan successful?</h3>
                  <p>
                    Sukku, iss page ka har click aapko thoda aur smile karwane
                    ke liye tha. Agar abhi aap muskura rahi ho, toh haan,
                    successful hai.
                  </p>
                  <p>
                    Happy birthday, mera Chotta Don. Aapki khushi mere liye
                    bahut matter karti hai.
                  </p>
                  <span className="handwritten">
                    Ab ek smile toh banti hai. — Abhi ♡
                  </span>
                </div>
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
        <BirthdayPlaylist />
      </div>
      {note && (
        <Modal
          title={note.title}
          scene={note.scene}
          date={note.date}
          onClose={() => setNote(null)}
        >
          <p className="letter-text">{note.text}</p>
          {note.nextTarget && (
            <button
              className="primary clue-button"
              onClick={() => followClue(note.nextTarget)}
            >
              {note.nextLabel}
            </button>
          )}
        </Modal>
      )}
    </>
  );
}
