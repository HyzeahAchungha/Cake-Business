import { FaTiktok, FaWhatsapp, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export const FooterSocial = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-2">
      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@the.3bsbakery0?_r=1&_t=ZN-92HJD19nIpk"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-black/10 text-black hover:bg-black hover:text-white transition"
      >
        <FaTiktok className="h-4 w-4" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/message/PUXCQAPGBFNZ01"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-black/10 text-black hover:bg-green-600 hover:text-white transition"
      >
        <FaWhatsapp className="h-4 w-4" />
      </a>

      {/* Instagram */}
      <a
        href="#"
        className="p-2 rounded-full bg-black/10 text-black hover:bg-pink-600 hover:text-white transition"
      >
        <FaInstagram className="h-4 w-4" />
      </a>

      {/* Facebook */}
      <a
        href="#"
        className="p-2 rounded-full bg-black/10 text-black hover:bg-blue-600 hover:text-white transition"
      >
        <FaFacebookF className="h-4 w-4" />
      </a>

      {/* X (Twitter) */}
      <a
        href="#"
        className="p-2 rounded-full bg-black/10 text-black hover:bg-black hover:text-white transition"
      >
        <FaXTwitter className="h-4 w-4" />
      </a>
    </div>
  );
};
