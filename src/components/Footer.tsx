import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <p className="px-4 pt-24 pb-6 md:text-base">
        This website was forked{" "}
        <a
          href="https://github.com/nexxeln/nexxel.dev"
          target="_blank"
          rel="noreferrer"
          className="text-t-purple opacity-75 transition-opacity duration-300 hover:opacity-100"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
