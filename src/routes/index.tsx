import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/image-1.jpg";
import aboutImg from "@/assets/photo.jpg";
import rentImg from "@/assets/image-4.jpg";
import deckImg from "@/assets/image-2-2.jpg";
import y1 from "@/assets/img-yaht.jpg";
import y2 from "@/assets/img-yaht-2.jpg";
import y3 from "@/assets/img-yaht-3.jpg";
import a1 from "@/assets/image.jpg";
import a2 from "@/assets/image-2.jpg";
import a3 from "@/assets/image-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YachtJet — Luxury Yacht Rentals" },
      { name: "description", content: "Explore the high seas with YachtJet luxury yacht rentals." },
      { property: "og:title", content: "YachtJet — Luxury Yacht Rentals" },
      { property: "og:description", content: "Explore the high seas with YachtJet luxury yacht rentals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#about", label: "About" },
  { href: "#yachts", label: "Yachts" },
  { href: "#reviews", label: "Reviews" },
];

function Icons() {
  return (
    <svg className="hidden" aria-hidden="true">
      <symbol id="i-instagram" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="12" fill="currentColor" />
        <rect x="6.5" y="6.5" width="11" height="11" rx="3" fill="none" stroke="var(--background)" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="2.6" fill="none" stroke="var(--background)" strokeWidth="1.6" />
        <circle cx="15.4" cy="8.6" r="0.9" fill="var(--background)" />
      </symbol>
      <symbol id="i-youtube" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="12" fill="currentColor" />
        <path d="M10 8.5v7l6-3.5z" fill="var(--background)" />
      </symbol>
      <symbol id="i-facebook" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="12" fill="currentColor" />
        <path d="M13 19v-6h2l.4-2.4H13V9.2c0-.7.3-1.2 1.2-1.2h1.3V5.9c-.3 0-1-.1-1.9-.1-2 0-3.1 1.2-3.1 3.2v1.6H8.4V13h2.1v6z" fill="var(--background)" />
      </symbol>
      <symbol id="i-menu" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" /></symbol>
      <symbol id="i-close" viewBox="0 0 24 24"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" /></symbol>
    </svg>
  );
}

function Social({ className = "" }: { className?: string }) {
  const items = [
    ["instagram", "https://www.instagram.com/goitclub/", "Instagram"],
    ["youtube", "https://www.youtube.com/c/GoIT", "YouTube"],
    ["facebook", "https://www.facebook.com/goITclub/", "Facebook"],
  ];
  return (
    <ul className={`flex gap-2 ${className}`}>
      {items.map(([id, href, label]) => (
        <li key={id}>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="block transition-opacity hover:opacity-70">
            <svg className="h-6 w-6"><use href={`#i-${id}`} /></svg>
          </a>
        </li>
      ))}
    </ul>
  );
}

function NavList({ onClick, light }: { onClick?: () => void; light?: boolean }) {
  return (
    <ul className="flex flex-col gap-2 md:flex-row">
      {nav.map((n, i) => (
        <li key={n.href}>
          <a
            href={n.href}
            onClick={onClick}
            className={`block rounded-lg px-4 py-2 text-xs uppercase transition-colors ${
              light ? "bg-foreground/20 text-foreground hover:bg-teal" : i === 0 ? "bg-teal text-primary-foreground" : "bg-muted-foreground/60 text-primary-foreground hover:bg-teal"
            }`}
          >
            {n.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

const yachts = [
  { img: y1, name: "Arrow", rows: [["Length", "48m (155ft)"], ["Builder", "Admiral"], ["Built", "2021"], ["Guests", "11 in 5 cabins"], ["Price", "€33,500,000"]] },
  { img: y2, name: "Benetti Oasis 40M BO122", rows: [["Length", "41m (133ft)"], ["Shipyard", "Benetti"], ["Built", "2025"], ["Guests", "10 in 5 cabins"], ["Price", "€23,210,000"]] },
  { img: y3, name: "Belle Anna", rows: [["Length", "50m (155ft)"], ["Shipyard", "ISA"], ["Built", "2012"], ["Guests", "12 in 6 cabins"], ["Price", "€21,000,000"]] },
];

const advantages = [
  "Swimming and water sports: try your hand at water skiing",
  "Fishing: try to catch your own dinner",
  "Sightseeing tours: take a shore or island tour, enjoy the views and sunsets from the water",
  "Rest and relaxation: read a book or listen to music while enjoying the outdoor atmosphere.",
];

const reviews = [
  { img: a1, name: "John Wax", text: "I rented the Lagoon 620 with my family for a week-long vacation and it was the best decision ever. The yacht was spacious, comfortable, and luxurious, and the crew took care of everything." },
  { img: a2, name: "Victoria Romashenko", text: "The Sunseeker Manhattan 66 was the perfect choice for our romantic getaway. The yacht was beautifully designed, with all the amenities we needed, and the crew was attentive and friendly." },
  { img: a3, name: "Ihor Trachuk", text: "The Azimut 80 was the most luxurious yacht I've ever been on. The cabins were spacious and elegant, and the outdoor areas were perfect for relaxing and entertaining. Worth every penny!" },
];

const field = "w-full rounded-lg border border-input bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none";
const container = "mx-auto w-full max-w-[1440px] px-4 sm:px-5 md:px-8 xl:px-[100px]";

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Icons />
      <header className="absolute inset-x-0 top-0 z-30 pt-6">
        <div className={container}>
          <div className="flex items-center justify-between rounded-xl bg-card px-4 py-2.5 text-card-foreground md:px-6">
            <a href="#" className="text-base font-medium">yachtjet</a>
            <nav className="hidden md:block"><NavList /></nav>
            <Social className="hidden text-teal md:flex" />
            <button className="md:hidden" aria-label="Open menu" onClick={() => setOpen(true)}>
              <svg className="h-6 w-6"><use href="#i-menu" /></svg>
            </button>
          </div>
        </div>
        <div className={`fixed inset-0 z-40 bg-ink/60 transition-opacity md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setOpen(false)} />
        <aside className={`fixed right-0 top-0 z-50 flex h-screen w-64 flex-col justify-between bg-teal p-6 transition-transform md:hidden ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div>
            <button className="mb-10 ml-auto block" aria-label="Close menu" onClick={() => setOpen(false)}>
              <svg className="h-6 w-6"><use href="#i-close" /></svg>
            </button>
            <nav><NavList light onClick={() => setOpen(false)} /></nav>
          </div>
          <Social className="text-foreground" />
        </aside>
      </header>

      <main>
        <section className="relative flex min-h-[640px] items-center justify-center overflow-hidden md:min-h-[800px]">
          <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className={`${container} relative flex flex-col items-center gap-12 pt-24 text-center`}>
            <div className="flex flex-col items-center gap-6">
              <h1 className="max-w-[1001px] text-4xl font-medium leading-none tracking-[-0.02em] md:text-6xl xl:text-[80px]">Explore the High Seas with Our Luxury Yacht Rentals</h1>
              <p className="max-w-[597px] text-base font-light leading-snug text-foreground/70">Experience the freedom and luxury of yachting on the open seas. Choose from our top-of-the-line yachts and embark on an unforgettable journey surrounded by breathtaking views and state-of-the-art amenities.</p>
            </div>
            <a href="#rent" className="rounded-2xl bg-teal px-10 py-4 text-lg font-medium tracking-[-0.02em] transition-opacity hover:opacity-80">Yacht rental</a>
          </div>
        </section>

        <section id="about" className={`${container} -mt-16 relative`}>
          <div className="overflow-hidden rounded-2xl bg-card text-card-foreground">
            <div className="grid gap-8 p-6 md:grid-cols-2 md:p-10 xl:p-14">
              <h2 className="text-3xl font-medium leading-none tracking-[-0.02em] text-teal xl:text-[40px]">YachtJet fleet is here to take you on the ultimate adventure</h2>
              <div className="md:ml-auto md:max-w-[400px]">
                <p className="mb-4 text-lg leading-tight text-teal">From spacious decks to state-of-the-art technology, our yachts are designed to provide the perfect blend of luxury and functionality.</p>
                <p className="text-xs font-light text-muted-foreground">Take a look at our selection below and choose the yacht that matches your needs and preferences. No matter which yacht you choose, our experienced crew will ensure that your journey is smooth and enjoyable. Book now and get ready for an unforgettable adventure on the high seas.</p>
              </div>
            </div>
            <img src={aboutImg} alt="Black luxury yacht with underwater lights at night" loading="lazy" className="w-full rounded-t-2xl object-cover" />
          </div>
        </section>

        <section id="yachts" className={`${container} py-20 md:py-32`}>
          <h2 className="mx-auto mb-14 max-w-[620px] text-center text-3xl font-medium leading-none tracking-[-0.02em] xl:text-[40px]">Choose your dream yacht and sail away into the sunset</h2>
          <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {yachts.map((y) => (
              <li key={y.name} className="rounded-2xl bg-card p-4 text-card-foreground">
                <img src={y.img} alt={y.name} loading="lazy" className="mb-6 aspect-[4/3] w-full rounded-xl object-cover" />
                <div className="px-3 pb-4">
                  <div className="mb-4 flex justify-between gap-2 border-b border-ink/10 pb-4 text-sm">
                    <h3 className="truncate font-medium uppercase text-teal">{y.name}</h3>
                    <span className="shrink-0 text-xs uppercase text-muted-foreground">Luxury yachts</span>
                  </div>
                  <dl className="grid grid-cols-2 gap-y-1 text-sm">
                    {y.rows.map(([k, v]) => (
                      <div key={k} className="contents">
                        <dt className="uppercase text-muted-foreground">{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <a href="#rent" className="inline-block rounded-2xl border border-border px-10 py-4 text-lg font-medium transition-colors hover:bg-teal">Yacht rental</a>
          </div>
        </section>

        <section className={`${container} grid gap-5 pb-20 md:pb-32 xl:grid-cols-[1fr_440px]`}>
          <h2 className="sr-only">Advantages of renting a yacht</h2>
          <ol className="grid gap-10 rounded-2xl bg-teal p-8 sm:grid-cols-2 md:p-12">
            {advantages.map((a, i) => (
              <li key={a}>
                <span className="mb-4 block border-b border-foreground/20 pb-4 text-3xl">0{i + 1}</span>
                <p className="text-sm font-light">{a}</p>
              </li>
            ))}
          </ol>
          <img src={deckImg} alt="Yacht deck with dining area" loading="lazy" className="h-full w-full rounded-2xl object-cover" />
        </section>

        <section id="rent" className={`${container} grid items-center gap-10 pb-20 md:pb-32 xl:grid-cols-[1fr_440px]`}>
          <img src={rentImg} alt="Dark yacht on calm lake with mountains" loading="lazy" className="w-full rounded-2xl object-cover" />
          <div>
            <h2 className="mb-8 text-3xl font-medium tracking-[-0.02em] xl:text-[40px]">Rent a yacht now</h2>
            <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); e.currentTarget.reset(); }}>
              <input className={field} name="name" placeholder="Full Name" required aria-label="Full name" />
              <input className={field} type="email" name="email" placeholder="Email" required aria-label="Email" pattern="([A-z0-9_.\-]{1,})@([A-z0-9_.\-]{1,}).([A-z]{2,8})" />
              <input className={field} type="tel" name="phone" placeholder="Phone number" required aria-label="Phone number" pattern="^\+\d{2}-\d{3}-\d{3}-\d{2}-\d{2}$" title="+38-050-123-45-67" />
              <textarea className={`${field} h-32 resize-none`} name="comment" placeholder="Comment" aria-label="Comment" />
              <button type="submit" className="mt-4 self-start rounded-2xl bg-teal px-20 py-4 text-lg font-medium transition-opacity hover:opacity-80">Send</button>
            </form>
          </div>
        </section>

        <section id="reviews" className={`${container} pb-20 md:pb-32`}>
          <h2 className="mx-auto mb-6 max-w-[820px] text-center text-3xl font-medium leading-none tracking-[-0.02em] xl:text-[48px]">YachtJet take pride in providing the best possible service and experience to our customers</h2>
          <p className="mx-auto mb-14 max-w-[600px] text-center text-sm font-light text-muted-foreground">Our customers have enjoyed unforgettable moments on our yachts. Don't just take our word for it - read on to find out what they have to say about their journey with us.</p>
          <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {reviews.map((r) => (
              <li key={r.name} className="rounded-2xl bg-card p-8 text-center text-card-foreground">
                <img src={r.img} alt={r.name} width={56} height={56} loading="lazy" className="mx-auto mb-4 h-14 w-14 rounded-full" />
                <h3 className="mb-2 font-medium">{r.name}</h3>
                <p className="text-sm font-light text-muted-foreground">{r.text}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="mx-auto max-w-[1440px] px-4 md:px-5">
        <div className="rounded-t-3xl bg-teal px-6 pb-10 pt-10 md:px-12">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <a href="#" className="font-medium">yachtjet</a>
            <nav><ul className="flex gap-1">{nav.map((n) => (<li key={n.href}><a href={n.href} className="block rounded-lg bg-foreground/20 px-4 py-2 text-xs uppercase hover:bg-foreground/30">{n.label}</a></li>))}</ul></nav>
            <Social className="text-foreground" />
          </div>
          <p className="mx-auto my-16 max-w-[640px] text-center text-2xl leading-tight md:my-24 md:text-3xl">No matter which yacht you choose, our experienced crew will ensure that your journey is smooth and enjoyable.</p>
          <div className="flex justify-center gap-10 text-xs text-foreground/50">
            <span>2023. Yacht Adventures</span>
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
