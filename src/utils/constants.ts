export const CarTypes = [
  { name: "Sedan", qName: "car", image: "/static/cars/sedan.png" },
  { name: "Truck", qName: "truck", image: "/static/cars/truck.png" },
  { name: "SUV", qName: "vehicle", image: "/static/cars/suv.png" },
  { name: "Minivan", qName: "vehicle", image: "/static/cars/minivan.png" },
  {
    name: "Convertible",
    qName: "vehicle",
    image: "/static/cars/convertible.png",
  },
  { name: "Hatchback", qName: "vehicle", image: "/static/cars/hatchback.png" },
  { name: "Coupe", qName: "car", image: "/static/cars/coupe.png" },
];

export const AdditionalOptions = [
  { label: "Rain Sensors", name: "rain_sensors" },
  { label: "Rain & Lane Sensors", name: "rain_lane_sensors" },
  { label: "Heads-Up Display", name: "heads_up_display" },
  { label: "Not Sure", name: "not_sure" },
];

export const Tints = [
  {
    title: "Front Tint",
    description:
      "Enhance privacy and reduce glare with a tinted front windshield",
    icon: "/static/icons/windshield.png",
    category: "tinting",
    duration: "90",
    width: 55,
    height: 55,
  },
  {
    title: "Back Tint",
    description:
      "Improve comfort and reduce interior heat by tinting the rear windows",
    icon: "/static/icons/rear.png",
    category: "tinting",
    duration: "240",
    width: 55,
    height: 55,
  },
  {
    title: "Sun Strip",
    description:
      "A tinted strip at the top of the windshield to reduce sun glare",
    icon: "/static/icons/windshield.png",
    category: "tinting",
    duration: "90",
    width: 55,
    height: 55,
  },
  {
    title: "Full Tint",
    description:
      "Complete window tinting for maximum UV protection and privacy",
    icon: "/static/icons/car.png",
    category: "tinting",
    duration: "300",
    width: 55,
    height: 55,
  },
];

export const Windshields = [
  {
    title: "Windshield",
    description: "Windshield Replacement",
    icon: "/static/icons/windshield.png",
    category: "windshield",
    duration: "90",
    width: 55,
    height: 55,
  },
  {
    title: "Side Glass",
    description: "Side Glass Replacement",
    icon: "/static/icons/side_door.png",
    category: "windshield",
    duration: "60",
    width: 45,
    height: 45,
  },
  {
    title: "Back Glass",
    description: "Back Glass Replacement",
    icon: "/static/icons/rear.png",
    category: "windshield",
    duration: "120",
    width: 50,
    height: 50,
  },
  {
    title: "Sunroof",
    description: "Sunroof Glass Replacement",
    icon: "/static/icons/sunroof.png",
    category: "windshield",
    duration: "120",
    width: 60,
    height: 60,
  },
];

export const Addons = [
  {
    title: "Pet Hair Removal",
    description: "starting from $59, subject to change based on severity",
    icon: "/static/icons/pet.png",
    category: "detail",
    price: "59",
    width: 45,
    height: 45,
  },
  {
    title: "Ozone Treatment",
    description: "Eliminates airborne smells, smoke, and odors",
    icon: "/static/icons/ozone.png",
    category: "detail",
    price: "50",
    width: 50,
    height: 50,
  },
  {
    title: "Shine Package",
    description: "Only for express package",
    icon: "/static/icons/shine.png",
    category: "detail",
    price: "99",
    width: 45,
    height: 45,
  },
  {
    title: "Bug Removal",
    description: "Removes stuck-on bugs",
    icon: "/static/icons/spray-bottle.png",
    category: "detail",
    price: "29",
    width: 45,
    height: 45,
  },
  {
    title: "Headliner Treatment",
    description: "Headliner Treatment",
    icon: "/static/icons/wipe.png",
    category: "detail",
    price: "35",
    width: 45,
    height: 45,
  },
  {
    title: "Stain & Odour Treatment",
    description: "Starting at $35, subject to change based on severity",
    icon: "/static/icons/spray-bottle.png",
    category: "detail",
    price: "35",
    width: 50,
    height: 50,
  },
  {
    title: "Tree Sap",
    description: "Gets rid of stubborn sap",
    icon: "/static/icons/spray-gun.png",
    category: "detail",
    price: "25",
    width: 45,
    height: 45,
  },
  {
    title: "Mud Removal",
    description: "Priced between $50-$150 based on severity",
    icon: "/static/icons/wash.png",
    category: "detail",
    price: "50",
    width: 50,
    height: 50,
  },
  {
    title: "Engine Bay",
    description: "Deep clean for your engine and finishing shine",
    icon: "/static/icons/wipe.png",
    category: "detail",
    price: "75",
    width: 45,
    height: 45,
  },
  {
    title: "Shampoo Treatment",
    description:
      "Full deep clean of carpets, floors, seats, mats, and trunk. Removes stubborn dirt, grime, and odors",
    icon: "/static/icons/wipe.png",
    category: "detail",
    price: "99",
    width: 45,
    height: 45,
  },
  {
    title: "Headlight Restoration",
    description:
      "Price shown is per headlight and can increase depending on severity",
    icon: "/static/icons/wipe.png",
    category: "detail",
    price: "50",
    width: 45,
    height: 45,
  },
  {
    title: "Steam & Sanitization Cleaning Service",
    description:
      "Use high-temperature steam to sanitize surfaces and eliminate germs, grime, and odors.",
    icon: "/static/icons/wipe.png",
    category: "detail",
    price: "79",
    width: 45,
    height: 45,
  },
  {
    title: "Claybar & Paint Decontamination Service",
    description: "Starting from $99 subject to change based on vehicle",
    icon: "/static/icons/wash.png",
    category: "detail",
    price: "99",
    width: 45,
    height: 45,
  },
];

export const detailPackages = [
  {
    title: "💨 Express Detail Package",
    price: "149",
    time: "90",
    description:
      "Fast, fresh, and flawless — a quick 90-minute clean that leaves your car feeling brand new.",
    features: [
      "Quick vacuum (seats, carpets, mats, trunk)",
      "Wipe down of dash, console & door panels",
      "Streak-free interior window clean",
      "Exterior pressure wash & dry",
      "Save time. Skip the hassle. Drive away fresh in just 90 minutes.",
    ],
  },
  {
    title: "🌟 Signature Detail Package",
    price: "289",
    time: "240",
    description:
      "💎 Our Most Popular Choice! 💎 — deep clean, premium shine, and lasting protection.",
    features: [
      "Everything from the Express Detail",
      "Full hand-contact wash",
      "Door jamb cleaning",
      "Complete engine wash",
      "Comprehensive vacuum (mats, carpets, seats, and trunk)",
      "Deep clean of dashboard, door panels, center console, cup holders, and vents",
      "Fresh car scent",
      "Tire, rims, and shine (valued at $29)",
      "Full shine package (engine, interior plastic shine, mats, exterior shine - valued at $99)",
      "30-Day Ceramic Sealant included (valued at $49)",
    ],
    // shinePackage: ["Tire shine", "Engine shine", "Mats & plastic trim shine"],
  },
  {
    title: "✨ Ultimate Detail Package",
    price: "349",
    time: "480",
    description:
      "The complete transformation — deep steam sanitization, paint restoration, and a 1-year ceramic coat for a true showroom finish.",
    features: [
      "Everything from the Signature Detail",
      "Full clay-bar and paint decontamination treatment",
      "Full shampoo for seats, carpets, and mats",
      "Steam & sanitization treatment for all surfaces, mats, seats, and carpets",
      "Headliner clean and deodorization treatment",
      "Full paint power polish with 1-year warranty ceramic coating",
    ],
    // shinePackage: ["Tire shine", "Engine shine", "Mats & plastic trim shine"],
  },
];
