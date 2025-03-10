import Image from "next/image";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="relative flex flex-col w-full items-center justify-center py-12 min-h-[70vh] md:min-h-[80vh] bg-aztecBlack-dark">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-50"
          style={{
            backgroundImage: "url('/static/bg_1.jpg')",
          }}
        />

        {/* Foreground Content (Moves on Scroll) */}
        <h2 className="text-4xl md:text-9xl tracking-wide font-extrabold text-white mb-4 z-10">
          Privacy <span className="text-aztecBlue">Policy</span>
        </h2>
      </div>
      <div className="w-full max-w-6xl px-6 py-12">
        <p className="text-lg leading-relaxed mb-6">
          At <span className="text-aztecBlue font-semibold">O Detail</span>, we
          are committed to protecting the personal information entrusted to us
          by our clients. We manage your personal information in compliance with
          Alberta’s <strong>Personal Information Protection Act (PIPA)</strong>,
          the federal <strong>Canadian Anti-Spam Legislation (CASL)</strong>,
          and all other applicable laws. This page outlines the key principles
          and practices of our privacy policy.
        </p>

        {/* Marketing Emails */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Marketing Emails</h2>
        <p className="text-lg leading-relaxed mb-6">
          From time to time, we may send promotional offers to customers who
          have opted into our marketing communications. We share your dislike
          for spam and promise to keep these emails infrequent, relevant, and
          valuable. If you wish to receive marketing emails, you can opt in by
          checking the appropriate box when requesting a quote. By participating
          in our online contests, you are also opting into our marketing emails.
          You can unsubscribe at any time by clicking the link in the footer of
          any marketing email.
        </p>

        {/* Transactional Emails */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Transactional Emails</h2>
        <p className="text-lg leading-relaxed mb-6">
          We collect only the personal information necessary to provide our
          services to you. This typically includes your name, contact details
          (email and phone number), and details about the service you require
          (e.g., vehicle information and, in some cases, your address). We
          usually collect this information directly from you, but we may also
          collect it from other sources with your consent or as permitted by
          law.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          By submitting a request for a quote, you consent (as required by CASL)
          to us using your information to fulfill your request. This may include
          sharing a portion of your information (typically vehicle details) with
          third-party vendors as needed.
        </p>

        {/* What to Expect When You Request a Quote */}
        <h2 className="text-2xl font-bold mt-8 mb-4">
          What to Expect When You Request a Quote
        </h2>
        <ul className="list-disc pl-8 mb-6 text-lg leading-relaxed">
          <li>
            One of our friendly representatives will give you a call to confirm
            all the details of your service and ensure everything is exactly as
            you requested.
          </li>
          <li>
            If you book with us, you will receive a booking confirmation email
            with all relevant details.
          </li>
          <li>
            The day before your appointment, you will receive a reminder email.
          </li>
          <li>
            Once your service is completed, we will send you a detailed invoice
            outlining all the services performed.
          </li>
          <li>
            All future communications from O Detail will be initiated only at
            your request. You can unsubscribe from transactional emails at any
            time during the quote process by clicking the unsubscribe button.
          </li>
        </ul>

        {/* Storage of Personal Data */}
        <h2 className="text-2xl font-bold mt-8 mb-4">
          Storage of Personal Data
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          We retain your information for warranty purposes and to comply with
          government regulations. While we hope you never experience any issues,
          we need your information on file in case any problems arise.
          Additionally, we are required by law to keep transaction records for
          seven years for tax purposes. Your information is safe with us—we will
          never sell or share it with anyone unless required by law or a court
          order. Guaranteed.
        </p>

        {/* Cookies */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Cookies</h2>
        <p className="text-lg leading-relaxed mb-6">
          We use cookies to enhance your online experience on the O Detail
          website. Cookies are small text files sent to your browser when you
          visit our site. They help us understand how our website is used and
          enable us to provide more relevant advertising through platforms like
          Google Ads and Facebook. You can disable or delete cookies by
          adjusting your browser settings, but please note that doing so may
          affect your experience on our site. For more information about how we
          use cookies, please visit our{" "}
          <a
            href="http://www.google.com/analytics/"
            className="text-aztecBlue font-semibold"
          >
            Cookies Policy
          </a>
          .
        </p>

        {/* Contact Us */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
        <p className="text-lg leading-relaxed mb-6">
          For a full copy of our Privacy Policy in more detailed legal terms or
          if you have any privacy-related questions or concerns, please contact
          our Privacy Officer at{" "}
          <a
            href="mailto:quotes@odetail.ca"
            className="text-aztecBlue font-semibold"
          >
            quotes@odetail.ca
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
