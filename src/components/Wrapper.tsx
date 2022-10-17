import Head from "next/head";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import Footer from "./Footer";

import Navbar from "./Navbar";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 200);
    };

    addEventListener("scroll", toggleVisibility);
    return () => removeEventListener("scroll", toggleVisibility);
  });

  return (
    <>
      {isVisible && (
        <div
          onClick={() => {
            scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="fixed bottom-8 right-8 flex animate-fade-in-up cursor-pointer items-center justify-center rounded-full border-2 border-t-pink bg-zinc-800 p-4 text-xl text-t-pink transition-transform duration-200 hover:scale-110"
        >
          <FiArrowUp size={24} />
        </div>
      )}
    </>
  );
};

const Wrapper: FC<{
  title: string;
  description: string;
  children: ReactNode;
  image?: string;
}> = ({ title, description, children, image }) => {
  const router = useRouter();

  if (!image) {
    image = "/images/banner.png";
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={description} name="description" />
        <meta
          property="og:url"
          content={`https://oasido.dev${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Shoubhit Dash" />
        <meta name="theme-color" content="#fabec0" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>

      <div className="mx-4 h-screen items-center p-2 md:mx-auto md:flex md:max-w-[700px] md:flex-col">
        <div className="pt-10" />
        <div className="px-2 md:px-5">
          <Navbar />
        </div>

        <main id="main">
          {children}
          <div className="pb-8" />
          <BackToTop />
        </main>

        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Wrapper;
