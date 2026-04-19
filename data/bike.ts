export type BikeComponent = {
  position: string;
  category: string;
  name: string;
  tagline: string;
  detail: string;
  brand?: string;
  url?: string;
  brandUrl?: string;
  images?: { src: string; alt: string }[];
};

export const bike = {
  name: "Madone SLR 7 AXS",
  generation: "Gen 8",
  year: 2026,
  size: "Medium",
  frameColor: "Tour Replica '24",
  wheels: "Enve SES 4.5",
  estimatedWeight: "7.3 kg",
};

export const components: BikeComponent[] = [
  {
    position: "01",
    category: "Frame",
    name: "Trek Madone SLR Gen 8",
    tagline: "Lidl-Trek 2024 Tour de France team replica.",
    detail:
      "900 Series OCLV carbon. Same frame as the SLR 9 the pros race. Finished in the 2024 Tour de France team replica livery that Lidl-Trek rode in France. Trek killed the Emonda because this does both: aero and lightweight. 1,146g frame.",
    brand: "Trek",
    url: "https://www.trekbikes.com/us/en_US/bikes/road-bikes/performance-road-bikes/madone/madone-slr/madone-slr-7-axs-gen-8/p/46688/",
    brandUrl: "https://www.trekbikes.com",
  },
  {
    position: "02",
    category: "Groupset",
    name: "SRAM Force AXS D2",
    tagline: "Second tier, current gen, durability sorted.",
    detail:
      "Wireless electronic shifting. 2x12 drivetrain. Red AXS saves 150g and $3,000. Force shifts identically and wears longer.",
    brand: "SRAM",
    url: "https://www.sram.com/en/sram/road/series/force-axs",
    brandUrl: "https://www.sram.com",
  },
  {
    position: "03",
    category: "Wheels",
    name: "Enve SES 4.5",
    tagline: "Hookless, wide internal, built for comfort.",
    detail:
      "49mm front, 55mm rear. Swapped in for the stock Bontrager Aeolus Pro 51. Wider rim bed rounds out the tire for more compliance and better handling. White decals.",
    brand: "Enve",
    url: "https://enve.com/products/ses-4-5",
    brandUrl: "https://enve.com",
  },
  {
    position: "04",
    category: "Tires",
    name: "Pirelli P Zero Race TLR RS",
    tagline: "Fast without being fragile.",
    detail:
      "Tubeless-ready. Race-level rolling resistance with enough sidewall protection for real-world Chicago roads.",
    brand: "Pirelli",
    url: "https://velo.pirelli.com/us/en-us/road/racing/p-zero-race-tlr-rs",
    brandUrl: "https://velo.pirelli.com",
  },
  {
    position: "05",
    category: "Crankset",
    name: "SRAM Force 170mm with Quarq DZero",
    tagline: "Non-negotiable. For the knee.",
    detail:
      "Most riders my height run 172.5mm. Shorter cranks open up the hip angle, reduce knee stress, work better at higher cadence. Power meter integrated.",
    brand: "SRAM",
    url: "https://www.sram.com/en/sram/road/products/cranksets",
    brandUrl: "https://www.sram.com",
  },
  {
    position: "06",
    category: "Cockpit",
    name: "Trek RSL Aero one-piece",
    tagline: "80 / 42 / 90. Fit comes first.",
    detail:
      "One-piece carbon bar/stem. 80mm reach, 42cm drop width, 90mm stem length. 3cm narrower at the tops than the drops for aero positioning.",
    brand: "Trek / Bontrager",
    url: "https://www.trekbikes.com/us/en_US/equipment/cycling-components/bike-bar-tape-grips-handlebars/road-bike-handlebars/c/B329/",
    brandUrl: "https://www.trekbikes.com",
  },
  {
    position: "07",
    category: "Pedals",
    name: "Look Keo Blade Carbon Ceramic",
    tagline: "Low stack, because the cranks are short.",
    detail:
      "8.5mm stack height from spindle to cleat contact. Pairing low-stack pedals with short cranks compounds the knee-friendly pedaling geometry.",
    brand: "Look Cycle",
    url: "https://www.lookcycle.com/us-en/product/keo-blade-carbon-ceramic",
    brandUrl: "https://www.lookcycle.com",
  },
  {
    position: "08",
    category: "Shoes",
    name: "Shimano S-Phyre RC703",
    tagline: "Shares DNA with the RC903. Saves $200.",
    detail:
      "Same carbon sole stiffness as Shimano's top-tier S-Phyre. BOA Li2 dials, race-level fit, half the price of the flagship.",
    brand: "Shimano",
    url: "https://bike.shimano.com/en-US/product/apparel/SH-RC703.html",
    brandUrl: "https://bike.shimano.com",
  },
  {
    position: "09",
    category: "Helmet",
    name: "MET Manta MIPS",
    tagline: "Aero first. Pogačar's choice.",
    detail:
      "MET's flagship aero road helmet. Solid top shell reduces drag, internal channeling keeps airflow honest, MIPS liner handles rotational impacts. What UAE Team Emirates races in.",
    brand: "MET",
    url: "https://www.met-helmets.com/en/helmets/road/manta-mips",
    brandUrl: "https://www.met-helmets.com",
  },
  {
    position: "10",
    category: "Computer",
    name: "Wahoo Elemnt Bolt V3",
    tagline: "Wahoo wins on the ride.",
    detail:
      "Physical buttons you can hit with cold or gloved hands. Better screen visibility in direct sun than Garmin. Native integration with SRAM AXS for gear data.",
    brand: "Wahoo",
    url: "https://www.wahoofitness.com/devices/bike-computers/gps-bike-computers/elemnt-bolt",
    brandUrl: "https://www.wahoofitness.com",
  },
  {
    position: "11",
    category: "Eyewear",
    name: "Oakley Sutro Lite Sweep",
    tagline: "Prizm Road. Sweep geometry. Matte black.",
    detail:
      "Half-frame for downward visibility, swept lens shape for wind protection, Prizm Road lens tuned to enhance road hazard contrast.",
    brand: "Oakley",
    url: "https://www.oakley.com/en-us/product/W0OO9465",
    brandUrl: "https://www.oakley.com",
  },
  {
    position: "12",
    category: "Bibs",
    name: "Assos Equipe R S11",
    tagline: "The flagship bib. No compromises on long rides.",
    detail:
      "Assos's top-tier bib short. goldenGate A10 chamois, compressive eight-panel construction, built to sit quiet for six hours on the saddle. Worth the splurge if you spend real time out there.",
    brand: "Assos",
    url: "https://www.assos.com/us/equipe-r-bib-shorts-s11-11-10-290-18.html",
    brandUrl: "https://www.assos.com",
  },
  {
    position: "13",
    category: "Jersey",
    name: "Rapha Pro Team Jersey II",
    tagline: "The cut Rapha uses for its sponsored riders.",
    detail:
      "Pro Team fit, race-level compression, no clubhouse required. The quiet flagship. Rapha's most honest answer to what a jersey should be.",
    brand: "Rapha",
    url: "https://www.rapha.cc/us/en/product/mens-pro-team-jersey-ii/CUM01XXBBK",
    brandUrl: "https://www.rapha.cc",
  },
  {
    position: "14",
    category: "Jersey",
    name: "Pedal Mafia × Keith Haring",
    tagline: "Pop art on the bike.",
    detail:
      "Keith Haring is my other artistic north star alongside Lichtenstein. Same instinct: bold lines, immediate imagery, art that meets you where you are. He democratized pop art through subway drawings and the Pop Shop because he believed it belonged to everyone, not just collectors. This jersey puts his chalk-figure language on the road.",
    brand: "Pedal Mafia",
    url: "https://usa.pedalmafia.cc/products/mens-core-jersey-keith-haring-x-pm-black",
    brandUrl: "https://usa.pedalmafia.cc",
    images: [
      {
        src: "/assets/Keith_Haring_Pedal_Mafia_1.webp",
        alt: "Pedal Mafia × Keith Haring jersey, front.",
      },
      {
        src: "/assets/Keith_Haring_Pedal_Mafia_2.webp",
        alt: "Pedal Mafia × Keith Haring jersey, back.",
      },
    ],
  },
  {
    position: "15",
    category: "The Fit",
    name: "80 / 42 / 90 with 170mm cranks",
    tagline: "The one spec that dictated all the others.",
    detail:
      "Every component on this list traces back to one thing: the fit. 170mm cranks for knee clearance. 42cm bars narrower than stock to match shoulder width. Low-stack pedals to preserve the hip angle. Fit first, components follow. Full fit-session writeup coming soon.",
  },
];
