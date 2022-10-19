import { FC, ReactNode } from "react";
import Wrapper from "~/components/Wrapper";

const Qna: FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-2xl font-bold text-t-pink">{question}</p>
      <p className="text-lg">{answer}</p>
    </div>
  );
};

const CustomQna = ({
  question,
  children,
}: {
  question: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-2xl font-bold text-t-pink">{question}</p>
      {children}
    </div>
  );
};

const Link: FC<{ to: string; text: string }> = ({ to, text }) => {
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer"
      className="text-t-purple opacity-90 transition-opacity duration-300 hover:opacity-100"
    >
      {text}
    </a>
  );
};

const FAQPage = () => {
  return (
    <Wrapper title="oasido • faq" description="FAQ page for oasido.dev">
      <h1 className="pt-14 text-4xl font-bold text-white">FAQ</h1>
      <p className="pt-1 text-lg text-slate-200">
        Some questions you may or may not have - answered.
      </p>

      <div className="pt-10" />

      <div className="flex flex-col gap-6">
        <Qna
          question="When did you start coding?"
          answer="I technically started in 2015 when I built random websites mainly for myself, but seriously in 2018."
        />
        <CustomQna question="What's your stack?">
          <p className="text-lg">
            I prefer to use the <Link to="https://init.tips" text="T3 Stack" />,
            which includes TypeScript, Next.js, tRPC, Tailwind, Prisma,
            NextAuth.js.
          </p>
        </CustomQna>
        <Qna
          question="How did you learn to code?"
          answer="Trying to build things & lots of Googling. You can learn just about ANYTHING on the internet, for free."
        />
        <CustomQna question="What code editor do you use?">
          <p className="text-lg">
            <Link
              to="https://code.visualstudio.com/"
              text="Visual Studio Code"
            />
          </p>
        </CustomQna>

        <CustomQna question="What theme do you use?">
          <p className="text-lg">
            <Link
              to="https://marketplace.visualstudio.com/items?itemName=ngryman.codesandbox-theme"
              text="CodeSandBox Black 2021"
            />
          </p>
        </CustomQna>

        <CustomQna question="What font do you use for coding?">
          <p className="text-lg">
            Big fan of <Link to="https://www.monolisa.dev/" text="MonoLisa" />{" "}
            (paid) &{" "}
            <Link to="https://github.com/source-foundry/Hack" text="Hack" />.
          </p>
        </CustomQna>
      </div>
    </Wrapper>
  );
};

export default FAQPage;
