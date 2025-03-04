import SUV from "/static/cars/suv.png";
import Truck from "/static/cars/truck.png";
import Sedan from "/static/cars/sedan.png";
import Minivan from "/static/cars/minivan.png";
import Convertible from "/static/cars/convertible.png";
import Hatchback from "/static/cars/hatchback.png";
import Coupe from "/static/cars/coupe.png";
import WindshieldIcon from "/static/icons/windshield.png";
import SideGlassIcon from "/static/icons/side_door.png";
import SunroofIcon from "/static/icons/sunroof.png";
import RearWindshieldIcon from "/static/icons/rear.png";

export const CarTypes = [
  { name: "Sedan", qName: "car", image: Sedan },
  { name: "Truck", qName: "truck", image: Truck },
  { name: "SUV", qName: "vehicle", image: SUV },
  { name: "Minivan", qName: "vehicle", image: Minivan },
  { name: "Convertible", qName: "vehicle", image: Convertible },
  { name: "Hatchback", qName: "vehicle", image: Hatchback },
  { name: "Coupe", qName: "car", image: Coupe },
];

export const AdditionalOptions = [
  { label: "Rain Sensors", name: "rain_sensors" },
  { label: "Rain & Lane Sensors", name: "rain_lane_sensors" },
  { label: "Heads-Up Display", name: "heads_up_display" },
  { label: "Not Sure", name: "not_sure" },
];

export const GlassTypes = [
  {
    title: "Windshield",
    description: "Premium glass with optimal safety standards.",
    time: "90 min",
    icon: WindshieldIcon,
  },
  {
    title: "Side Glass",
    description: "Enhanced durability and thermal protection.",
    time: "60 min",
    icon: SideGlassIcon,
  },
  {
    title: "Back Glass",
    description: "Technology integrated for safety and convenience.",
    time: "120 min",
    icon: RearWindshieldIcon,
  },
  {
    title: "Sunroof",
    description: "Enhanced protection with advanced design.",
    time: "120 min",
    icon: SunroofIcon,
  },
];
