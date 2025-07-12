import { getSocials } from '@/app/data/api/common';
import { Social } from '@/app/data/common/types';
import Link from 'next/link';

type SocialsProps = {
  containerStyles: string,
  iconStyles: string
};

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  const socialList: Social[] = getSocials();
  return (
    <div className={containerStyles}>
      {
        socialList.map((item, index) => {
          return (
            <Link
              href={item.href}
              key={index}
            >
              <div className={iconStyles}>
                {item.icon}
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Socials;