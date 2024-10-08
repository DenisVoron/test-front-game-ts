import { FC } from "react";
import InputField from "../InputField";
import NoticeField from "../NoticeField";

const Game: FC = (): JSX.Element => (
  <>
    <header className="h-14 p-[18px] border border-b-cyan-800 bg-orange-400">
      <p className="text-center text-base text-slate-50 font-medium">
        Start your gaming
      </p>
    </header>
    <main>
      <section className="h-24 py-6 bg-orange-200">
        <div className="container mx-auto">
          <h2 className="h2 w-80 text-center mx-auto text-xl text-green-400 font-semibold">
            Guess the number from 0 to 100
          </h2>
        </div>
      </section>
      <section className="h-44 py-6">
        <InputField />
      </section>
      <section className="h-[410px] py-6 bg-orange-200 ">
        <NoticeField />
      </section>
    </main>
  </>
);

export default Game;
