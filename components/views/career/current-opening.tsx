"use client";

import { useOpeningChangeState } from "@/state";

export const CurrentOpening = () => {
  const setView = useOpeningChangeState((state) => state.setOpening);

  return (
    <div className="flex flex-col items-start gap-y-4 w-full">
      {/* <button
        onClick={() => setView(1)}
        className="px-4 py-2 border-2 text-sm sm:text-base border-white font-extralight hover:border-yellow-400 hover:text-yellow-400"
      >
        Jr. React Js Developer
      </button>{" "}
      <button
        onClick={() => setView(2)}
        className="px-4 py-2 border-2 text-sm sm:text-base border-white font-extralight hover:border-yellow-400 hover:text-yellow-400"
      >
        Content Writer (English)
      </button>{" "}
      <button
        onClick={() => setView(3)}
        className="px-4 py-2 border-2 text-sm sm:text-base border-white font-extralight hover:border-yellow-400 hover:text-yellow-400"
      >
        SEO Developer
      </button>
      <button
        onClick={() => setView(4)}
        className="px-4 py-2 border-2 text-sm sm:text-base border-white font-extralight hover:border-yellow-400 hover:text-yellow-400"
      >
        Mobile App Developer (Flutter)
      </button> */}
      <h3>
        There are no current openings with Us! If you still want to contact us
        Feel free to drop an Email on <u> career@truepubmedia.com</u>
      </h3>
    </div>
  );
};
