import React from "react";
import { Link } from "react-router-dom";
import { useAppStore } from "~/store";
import { FaYoutube, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const { catalogs } = useAppStore();
  return (
    <div className="w-full bg-blue-600 text-white">
      <div className="w-full lg:w-main p-4 py-12 mx-auto flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-fit px-4 mb-6 flex items-center justify-center">
          <img src="/logow.png" alt="" className="h-[48px] object-contain" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 text-lg lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-xl">HỆ THỐNG</h2>
            <div className="flex flex-col gap-3">
              {catalogs?.map((el) => (
                <Link key={el.id} to={el.slug} className="text-lg">
                  {el.value}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-xl">VỀ CHÚNG TÔI</h2>
            <div className="flex flex-col gap-3">
              <span className="text-lg">
                Hotline:{" "}
                <a
                  href="tel:0971784954"
                  className="text-white-500 hover:text-red-700 text-lg"
                >
                  0971784954
                </a>
              </span>
              <span className="text-lg">
                Email:{" "}
                <a
                  href="mailto:vantinluu.vtl@admin.com"
                  className="text-white-500 hover:text-red-700 text-lg"
                >
                  vantinluu.vtl@admin.com
                </a>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.youtube.com/@tinluucode"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={32} className="text-white hover:text-red-500" />
              </a>
              <a
                href="https://github.com/tinluuVTL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={32} className="text-white hover:text-red-500" />
              </a>
              <a
                href="https://www.facebook.com/vantin.luu.98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={32} className="text-white hover:text-red-500" />
              </a>
              <a
                href="https://www.instagram.com/tinluuvtl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={32} className="text-white hover:text-red-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;