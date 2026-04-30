export const images = Array.from({ length: 19 }, (_, index) => {
  const id = String(index + 1).padStart(2, "0");
  return `/assets/images/event-${id}.jpg`;
});

export const menuGroups = [
  {
    title: "Private Events",
    links: [
      ["Kigali", "/private-events/kigali"],
      ["Destination Rwanda", "/private-events/destination-rwanda"],
      ["Weddings", "/private-events/weddings"],
      ["40th Birthday", "/private-events/birthdays/40th-birthday"],
      ["50th Birthday", "/private-events/birthdays/50th-birthday"],
      ["60th Birthday", "/private-events/birthdays/60th-birthday"],
      ["Themed Parties", "/private-events/themed-parties"],
    ],
  },
  {
    title: "Corporate",
    links: [
      ["Corporate Events", "/corporate/corporate-events"],
      ["Festive Events", "/corporate/festive-events"],
    ],
  },
  {
    title: "Inkindi decor Kigali",
    links: [
      ["Venues", "/venues"],
      ["About", "/about"],
      ["Case Studies", "/case-studies"],
      ["Blog", "/blog"],
      ["Contact Us", "/contact"],
    ],
  },
];

export const pageContent: Record<
  string,
  {
    title: string;
    kicker: string;
    hero: string;
    intro: string;
    body: string[];
    image: string;
  }
> = {
  "private-events/kigali": {
    title: "Private Event Planner Kigali",
    kicker: "Private Events",
    hero: "Elegant private celebrations in the heart of Rwanda.",
    intro:
      "Inkindi decor Kigali plans birthdays, introductions, family dinners, and milestone evenings with a polished Kigali sensibility.",
    body: [
      "We shape every layer of the guest experience, from venue flow and tablescape to entertainment, lighting, sound, catering direction, and final production cues.",
      "Our process is calm, collaborative, and detail-led, giving hosts the freedom to enjoy the night while the room moves exactly as planned.",
    ],
    image: images[0],
  },
  "private-events/destination-rwanda": {
    title: "Destination Rwanda Events",
    kicker: "Private Events",
    hero: "Host guests against Rwanda's most memorable backdrops.",
    intro:
      "From Kigali rooftops to garden venues and lakeside escapes, we create celebrations that feel rooted in place.",
    body: [
      "We support venue sourcing, supplier coordination, guest logistics, styling, production, and hospitality details for local and visiting hosts.",
      "The result is a destination event that feels generous, personal, and beautifully managed from arrival to farewell.",
    ],
    image: images[18],
  },
  "private-events/weddings": {
    title: "Wedding Planner Rwanda",
    kicker: "Weddings",
    hero: "Weddings with atmosphere, grace, and a clear plan.",
    intro:
      "Inkindi decor Kigali designs wedding days that balance cultural meaning, modern production, and the joy of bringing people together.",
    body: [
      "We help couples refine their vision, build the right supplier team, and choreograph the day so every transition feels natural.",
      "Florals, stage design, ceremony spaces, lighting, guest seating, and reception flow are handled as one connected experience.",
    ],
    image: images[10],
  },
  "private-events/birthdays/40th-birthday": {
    title: "40th Birthday Parties",
    kicker: "Birthdays",
    hero: "A milestone birthday with grown-up drama.",
    intro:
      "We turn 40th birthdays into immersive evenings with bold rooms, generous hospitality, and a proper dance floor.",
    body: [
      "Whether the brief is black tie, cultural, tropical, lounge, or full concert energy, we build the concept and run the production.",
      "Guests arrive to a clear world, then move through food, music, speeches, and surprises without feeling the logistics behind them.",
    ],
    image: images[3],
  },
  "private-events/birthdays/50th-birthday": {
    title: "50th Birthday Parties",
    kicker: "Birthdays",
    hero: "A celebration with polish, sentiment, and scale.",
    intro:
      "For 50th birthdays, Inkindi decor Kigali blends personal storytelling with refined styling and confident event management.",
    body: [
      "We can design seated dinners, cocktail celebrations, family-led evenings, or high-energy parties for hundreds of guests.",
      "The work is bespoke: guest arrival, stage moments, menus, florals, lighting, music, and the details that make the night feel personal.",
    ],
    image: images[7],
  },
  "private-events/birthdays/60th-birthday": {
    title: "60th Birthday Parties",
    kicker: "Birthdays",
    hero: "A warm, elegant milestone for every generation.",
    intro:
      "We create 60th birthday events that honor the guest of honor while keeping the room joyful and effortless.",
    body: [
      "From intimate family dinners to large formal receptions, Inkindi decor Kigali coordinates the planning, styling, hospitality, and on-site running.",
      "Our team keeps the pace comfortable, the details refined, and the celebration full of life.",
    ],
    image: images[15],
  },
  "private-events/themed-parties": {
    title: "Themed Parties Rwanda",
    kicker: "Private Events",
    hero: "Original party worlds, built from first impression to final song.",
    intro:
      "Inkindi decor Kigali creates theme-led celebrations with custom entrances, stage moments, florals, bars, entertainment, and lighting.",
    body: [
      "A strong theme should feel immersive without feeling forced. We keep the concept sharp and the guest journey easy.",
      "Our production approach makes each visual choice, supplier, and timeline decision serve the feeling of the night.",
    ],
    image: images[9],
  },
  "corporate/corporate-events": {
    title: "Corporate Event Planner Rwanda",
    kicker: "Corporate",
    hero: "Company events with clarity, pace, and presence.",
    intro:
      "We plan launches, conferences, staff parties, award nights, and gala dinners for teams that need a polished guest experience.",
    body: [
      "Inkindi decor Kigali handles production schedules, room layout, stage design, audiovisual suppliers, guest registration, catering flow, and protocol-sensitive details.",
      "The experience can be understated or spectacular, but the delivery is always organized and calm.",
    ],
    image: images[8],
  },
  "corporate/festive-events": {
    title: "Festive Corporate Events",
    kicker: "Corporate",
    hero: "End-of-year gatherings that feel fresh, generous, and easy to attend.",
    intro:
      "Inkindi decor Kigali creates festive staff events, client dinners, and appreciation nights with strong styling and smooth production.",
    body: [
      "We can build a full seasonal concept or refine a simple brief into a room that feels celebratory and on-brand.",
      "Entertainment, food, lighting, speeches, transport, and guest flow are all coordinated through one plan.",
    ],
    image: images[13],
  },
  venues: {
    title: "Rwanda Venues",
    kicker: "Venues",
    hero: "The right venue changes the whole event.",
    intro:
      "We help clients choose, transform, and produce events in Rwanda's hotels, gardens, halls, private homes, and outdoor spaces.",
    body: [
      "Venue selection is more than capacity. We look at guest arrival, production access, acoustics, power, catering flow, weather, photography, and how the space will feel after dark.",
      "Inkindi decor Kigali then designs the room around the venue's strengths, turning constraints into atmosphere.",
    ],
    image: images[12],
  },
  about: {
    title: "About Inkindi decor Kigali",
    kicker: "Who Are We?",
    hero: "A Rwanda event team built around creative detail and steady delivery.",
    intro:
      "Inkindi decor Kigali is based in Kigali and works with clients who want events to feel considered, generous, and memorable.",
    body: [
      "We are planners, stylists, coordinators, and production partners. Our role is to listen carefully, shape a clear idea, and then manage the many moving parts that make the idea real.",
      "The best events feel effortless to guests. Behind that ease is planning, timing, hospitality, and a team that knows how to keep the room moving.",
    ],
    image: images[17],
  },
  "case-studies": {
    title: "Case Studies",
    kicker: "Get Inspired",
    hero: "Recent event stories from Inkindi decor Kigali productions.",
    intro:
      "Explore how a brief becomes a guest journey, from first concept to final room reveal.",
    body: [
      "Each case study begins with a feeling: elegant, high-energy, cultural, intimate, corporate, or theatrical.",
      "From there, we build the visual direction, production plan, supplier team, and timeline that make the feeling tangible.",
    ],
    image: images[1],
  },
  blog: {
    title: "Inkindi decor Kigali Journal",
    kicker: "Get Inspired",
    hero: "Ideas for planning events in Rwanda.",
    intro:
      "A practical journal for hosts thinking about venues, themes, production, guest comfort, and memorable details.",
    body: [
      "Start with what guests should feel when they arrive. Then make every choice support that: the entrance, the table, the light, the music, the pace, and the final goodbye.",
      "Inkindi decor Kigali shares planning notes for couples, families, and companies preparing events across Rwanda.",
    ],
    image: images[5],
  },
  contact: {
    title: "Contact Inkindi decor Kigali",
    kicker: "Get In Touch",
    hero: "Tell us the date, the place, and the feeling.",
    intro:
      "For weddings, private parties, corporate events, and venue transformations, start with a short note.",
    body: [
      "Phone: +250 789 448 107",
      "Phone: +250 788 720 326",
      "Email: hello@inkindidecorkigali.rw",
      "Location: Kigali, Rwanda",
    ],
    image: images[16],
  },
};
