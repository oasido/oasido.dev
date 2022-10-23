import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { FC } from "react";
import { clsx } from "clsx";

const NavItem: FC<{ href: string; text: string; router: NextRouter }> = ({
  href,
  text,
  router,
}) => {
  const isActive = router.pathname.replace(/[^\/]+/g, "") === href;

  return (
    <Link href={href}>
      <a
        className={`text-md mr-4 md:mr-6 md:text-lg
          ${
            isActive
              ? "font-bold text-t-pink"
              : "transition-colors duration-300 hover:text-t-pink"
          }`}
      >
        {text}
      </a>
    </Link>
  );
};

const Navbar = () => {
  const router = useRouter();
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Blog", link: "blog" },
    { label: "Guestbook", link: "guestbook" },
    { label: "FAQ", link: "faq" },
    { label: "More", link: "more" },
  ];

  return (
    <nav className="flex items-center justify-between max-w-sm mx-auto">
      {menuItems.map((item, idx) => (
        <NavItem href={item.link} text={item.label} router={router} key={idx} />
      ))}
    </nav>
  );
};

export default Navbar;
