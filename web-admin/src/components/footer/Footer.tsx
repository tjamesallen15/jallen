import { getFooterSocials } from "@shared/common/core-react";

interface FooterProps {
  authentication: boolean;
}

const Footer = ({ authentication }: FooterProps) => {
  const socialList = getFooterSocials();
  return (
    <footer
      className={
        "fixed w-full flex-row justify-between bg-ja-darkblue bottom-0 p-4 hidden md:flex transition-all duration-1000 " +
        (authentication === false
          ? "invisible opacity-0"
          : "visible opacity-100")
      }
    >
      <span className="text-xs text-ja-active">
        Created using React &#169; Copyright 2020 of James Allen All Rights
        Reserved.
      </span>
      <div className="flex flex-row gap-6 items-center">
        {socialList.map((social, index) => {
          return (
            <div key={index} className="flex flex-row gap-2">
              <span className="text-ja-active">{social.icon}</span>
              <a
                href={social.href}
                className="text-xs text-ja-active hover:underline"
              >
                <span className="text-ja-active">{social.name}</span>
              </a>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
