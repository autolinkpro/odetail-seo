import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Marginer } from "@/components/Marginer";
import Location from "@/components/Location";
import ContactCard from "@/components/ContactCard";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="relative flex flex-col w-full items-center justify-center py-12 min-h-[60vh] md:min-h-[65vh] bg-aztecBlack-dark">
        {/* Background Image */}
        {/* <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-50"
          style={{
            backgroundImage: "url('/static/bg_1.jpg')",
          }}
        /> */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-50 bg-[url('/static/carbon_2.png')]"
          style={{
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
          }}
        />

        {/* Foreground Content (Moves on Scroll) */}
        <h2 className="text-4xl md:text-9xl tracking-wide font-extrabold text-white mb-4 z-10">
          Contact <span className="text-aztecBlue">Us</span>
        </h2>
      </div>
      <Marginer direction="vertical" margin="4em" />
      {/* Contact Icons */}
      <div className="flex flex-row justify-between w-full max-w-lg px-8 md:px-2 mb-8">
        {[
          {
            href: "mailto:quotes@odetail.ca",
            icon: faEnvelope,
          },
          {
            href: "https://www.facebook.com/ODetailAirdrie/",
            icon: faFacebook,
          },
          {
            href: "https://www.instagram.com/odetailairdrie",
            icon: faInstagram,
          },
        ].map(({ href, icon }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-aztecBlue text-4xl md:text-5xl cursor-pointer transition-transform duration-100 hover:scale-105"
          >
            <FontAwesomeIcon icon={icon} />
          </a>
        ))}
      </div>
      <Marginer direction="vertical" margin="2em" />
      <ContactCard />
      <Marginer direction="vertical" margin="2em" />
      <Location />
      <Marginer direction="vertical" margin="2em" />
    </div>
  );
};

export default Contact;
