import { getNavigationItems } from "../../../../shared/common/core-base";
import type { NavigationItem } from "../../../../shared/common/model";

const Navigation = () => {
  const links: NavigationItem[] = getNavigationItems();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <a
            href={link.path}
            key={index}
            className={`${
              link.path === window.location.pathname &&
              "text-link-accent border-b-2 border-link-accent"
            } capitalize font-karla text-lg hover:text-link-accent transition-all`}
          >
            {link.name}
          </a>
        );
      })}
    </nav>
  );
};

export default Navigation;
