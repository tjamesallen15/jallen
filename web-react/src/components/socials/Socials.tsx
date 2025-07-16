import React from "react";
import { getSocials } from "../../../../shared/common/core-react";
import type { Social } from "../../../../shared/common/model";

type SocialsProps = {
  containerStyles: string;
  iconStyles: string;
};

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  const socialList: Social[] = getSocials();
  return (
    <div className={containerStyles}>
      {socialList.map((item, index) => {
        return (
          <a href={item.href} key={index}>
            <div className={iconStyles}>{item.icon}</div>
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
