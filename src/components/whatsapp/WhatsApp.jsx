import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/919847341800?text=hello"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-icon shadow-lg"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppIcon;
