/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  runtime: "experimental-edge",
};

const handler = async (req: NextApiRequest, _res: NextApiResponse) => {
  const Inter = await fetch(
    "https://www.oasido.dev/fonts/inter-v12-latin-regular.woff"
  ).then(async (res) => res.arrayBuffer());

  const JetBrainsMono = await fetch(
    "https://www.oasido.dev/fonts/JetBrainsMonoRegular.ttf"
  ).then((res) => res.arrayBuffer());

  const { searchParams } = new URL(req.url!);
  const title = searchParams.get("title");
  const top = searchParams.get("top");

  const lg = {
    fontSize: "72px",
    lineHeight: "80px",
    fontWeight: 700,
    fontFamily: "Inter",
    color: "#cabdff",
  };

  const md = {
    fontSize: "62px",
    lineHeight: "70px",
    fontWeight: 500,
    fontFamily: "Inter",
    color: "#cabdff",
  };

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          background: "#161616",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "1200px",
            height: "630px",
            padding: "80px",
          }}
        >
          <p
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: "28px",
              marginBottom: "25px",
              color: "#c4c4c4",
            }}
          >
            {top}
          </p>

          <h1 style={title!.length < 60 ? lg : md}>{title}</h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <p
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "28px",
                color: "#c4c4c4",
              }}
            >
              oasido.dev
            </p>
            <img
              src="https://www.oasido.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Foasido.708e642b.png&w=256&q=75"
              alt="oasido's avatar"
              width={70}
              height={70}
              style={{
                borderRadius: "100px",
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      fonts: [
        {
          name: "Inter",
          data: Inter,
          weight: 700,
          style: "normal",
        },
        {
          name: "JetBrains Mono",
          data: JetBrainsMono,
          weight: 500,
          style: "normal",
        },
      ],
    }
  );
};

export default handler;
