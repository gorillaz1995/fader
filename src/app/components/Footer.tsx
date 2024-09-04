import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#023d82] text-[#ededed] p-4 grid lg:grid-cols-3 grid-cols-1 gap-4 items-center">
      <div className="flex flex-col">
        <h2 className="text-lg font-medium mb-1 text-[#ededed] font-stint-ultra-expanded">
          Contacteaza-ne:
        </h2>
        <a
          href="tel:+40723403403"
          className="text-sm text-[#ededed] font-pontano-sans flex items-center hover:underline w-full"
        >
          <FaPhone className="mr-2 flex-shrink-0" />
          <span className="flex-grow truncate">(+40) 723 403 403</span>
        </a>
        <a
          href="tel:+40723705702"
          className="text-sm text-[#ededed] font-pontano-sans flex items-center mt-1 hover:underline w-full"
        >
          <FaPhone className="mr-2 flex-shrink-0" />
          <span className="flex-grow truncate">(+40) 723 705 702</span>
        </a>
        <a
          href="tel:+40771418581"
          className="text-sm text-[#ededed] font-pontano-sans flex items-center mt-1 hover:underline w-full"
        >
          <FaPhone className="mr-2 flex-shrink-0" />
          <span className="flex-grow truncate">(+40) 771 418 581</span>
        </a>
        <a
          href="mailto:contact@fadeacademy.ro"
          className="text-sm text-[#ededed] font-pontano-sans hover:underline flex items-center mt-1"
        >
          <FaEnvelope className="mr-2 flex-shrink-0" />
          <span className="flex-grow truncate">contact@fadeacademy.ro</span>
        </a>
      </div>
      <div className="text-center">
        <p className="text-sm text-[#ededed] font-pontano-sans mb-2">
          Lideri in industrie | Garantam excelenta
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.facebook.com/byCiprianUngureanu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ededed] hover:text-gray-300"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.instagram.com/ciprian_ungureanu_fadeacademy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ededed] hover:text-gray-300"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.tiktok.com/@byciprianungureanu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ededed] hover:text-gray-300"
          >
            <FaTiktok size={20} />
          </a>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xs text-[#ededed] font-pontano-sans">
          © 2024 Usagi Technologies
        </p>
      </div>
    </footer>
  );
};

export default Footer;
