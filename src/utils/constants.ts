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
    description: "Takes a minimum of 1 hour",
    icon: "/static/icons/pet.png",
    category: "detail",
    price: "50",
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
    price: "20",
    width: 45,
    height: 45,
  },
  {
    title: "Headliner Treatment",
    description: "Headliner Treatment",
    icon: "/static/icons/wipe.png",
    category: "detail",
    price: "25",
    width: 45,
    height: 45,
  },
  {
    title: "Stain Treatment",
    description: "Spot treatment for tough stains",
    icon: "/static/icons/spray-bottle.png",
    category: "detail",
    price: "25",
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
    description: "Priced between $50–$150 based on severity",
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
    price: "65",
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
];

export const detailPackages = [
  {
    title: "💨 Xpress Plus Detail",
    price: "149",
    time: "90",
    description:
      "Quick. Affordable. Effective. A fast refresh for your vehicle, perfect for a quick clean without sacrificing quality.",
    features: [
      "Quick vacuum (seats, carpets, mats, trunk)",
      "Wipe down of dash, console & door panels",
      "Streak-free interior window clean",
      "Exterior wash & dry",
      "Save time. Skip the hassle. Drive away fresh in just 90 minutes.",
    ],
  },
  {
    title: "✨ Premium Detail",
    price: "349",
    time: "300",
    description:
      "Showroom Perfection with Our Deepest Clean For those who want nothing but the best — leaving your vehicle in showroom condition.",
    features: [
      "Comprehensive vacuum (mats, carpets, seats, and trunk)",
      "Steam treatment for mats, seats, and carpets",
      "Deep clean of dashboard, door panels, center console, cup holders, and vents",
      "Interior windows cleaned for a streak-free finish",
      "Exterior wash & dry including door jambs",
      "Tires, rims, and wheel wells cleaned",
      "Full shampoo for seats, carpets, and mats",
    ],
    shinePackage: ["Tire shine", "Engine shine", "Mats & plastic trim shine"],
  },
  {
    title: "🌟 Deluxe Detail",
    price: "289",
    time: "240",
    description:
      "💎 Our Most Popular Choice! 💎 A complete detail topped off with a premium shine for that ultimate finish.",
    features: [
      "Comprehensive vacuum (mats, carpets, seats, and trunk)",
      "Steam treatment for mats, seats, and carpets",
      "Deep clean of dashboard, door panels, center console, cup holders, and vents",
      "Interior windows cleaned for a streak-free finish",
      "Exterior wash & dry including door jambs",
      "Tires, rims, and wheel wells cleaned",
    ],
    shinePackage: ["Tire shine", "Engine shine", "Mats & plastic trim shine"],
  },
  {
    title: "💎 Value Detail",
    price: "195",
    time: "180",
    description:
      "More Time. More Detail. More Value. A deeper clean with extra attention to the areas that matter most.",
    features: [
      "Comprehensive vacuum (mats, carpets, seats, and trunk)",
      "Deep clean of dashboard, door panels, center console, cup holders, and vents",
      "Interior windows cleaned for a streak-free finish",
      "Exterior wash & dry including door jambs",
      "Tires and rims wash",
    ],
  },
];
