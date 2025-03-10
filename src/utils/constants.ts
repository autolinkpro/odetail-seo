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

export const Addons = [
  {
    title: "Windshield",
    description: "Windshield Replacement",
    icon: "/static/icons/windshield.png",
    width: 55,
    height: 55,
  },
  {
    title: "Side Glass",
    description: "Side Glass Replacement",
    icon: "/static/icons/side_door.png",
    width: 45,
    height: 45,
  },
  {
    title: "Back Glass",
    description: "Back Glass Replacement",
    icon: "/static/icons/rear.png",
    width: 50,
    height: 50,
  },
  {
    title: "Sunroof",
    description: "Sunroof Glass Replacement",
    icon: "/static/icons/sunroof.png",
    width: 60,
    height: 60,
  },
  {
    title: "Pet Hair Removal",
    description: "Pet Hair Removal",
    icon: "/static/icons/pet.png",
    width: 45,
    height: 45,
  },
  {
    title: "Ozone",
    description: "Ozone Treatment",
    icon: "/static/icons/ozone.png",
    width: 50,
    height: 50,
  },
  {
    title: "Shine Package",
    description: "Only for express package",
    icon: "/static/icons/shine.png",
    width: 45,
    height: 45,
  },
];

export const detailPackages = [
  {
    title: "💨 Xpress Plus Detail",
    price: "149",
    time: "90 Minutes",
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
    title: "🌟 Deluxe Detail",
    price: "289",
    time: "240 Minutes",
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
    time: "180 Minutes",
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
