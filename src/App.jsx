import React, { useState } from "react";
import "./App.css";
import Bg from "./assets/bg.jpg";

const App = () => {
  const quoteGenerator = [
    {
      text: "Be yourself everyone else is already taken.",
      author: "Oscar Wilde",
    },

    {
      text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
      author: "Marilyn Monroe",
    },
    {
      text: "So many books, so little time.",
      author: "Frank Zappa",
    },
    {
      text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein",
    },
  ];

  const [quote, setQuote] = useState("");

  const randomQuoteGenerator = () => {
    const randomQuote = Math.floor(Math.random() * quoteGenerator.length);
    // const updatedQuote = [...quote,quoteGenerator[randomQuote] ]
    // setQuote([updatedQuote]);
    setQuote(quoteGenerator[randomQuote]);
  };

  // console.log(quote);
  return (
    <>
      <div className="">
        <div className="lg: w-full h-screen md:h-screen lg:h-screen relative object-cover ">
          <img className="w-full h-full relative" src={Bg} alt="" />
          <div className="absolute left-[10%] md:left-[20%] lg:left-[30%] top-[30%] md:top-[20%] lg:top-[10%] w-[350px] md:w-[620px] lg:w-[620px] h-[300px] md:h-[420px] lg:h-[540px] border shadow-xl bg-pink-200 px-5 md:px-20 lg:px-20">
            <div>
              <h1 className="capitalize text-[20px] lg:text-3xl font-bold text-center py-2 md:py-8 lg:py-10 old-standard-tt-bold underline">
                Random Quote Generator
              </h1>
            </div>
            <div className="text-center py-1 md:py-5 lg:py-5 lg: text-2xl old-standard-tt-regular-italic">
              {quote.text}
            </div>
            <div className="lg:py-10 py-1 text-center underline old-standard-tt-regular-italic">
              {quote.author}
            </div>

            <button
              className="px-4 py-2  bg-[#DDFAFE] text-black text-xl lg:text-2xl rounded-lg text-center absolute bottom-5 md:bottom-8 lg:bottom-12 left-[30%] md:left-[40%] old-standard-tt-regular"
              onClick={randomQuoteGenerator}
            >
              New Quote
            </button>
          </div>

          <span className="bg-red-400 rounded-full w-10 h-10  ball1"></span>
          <span className="bg-red-400 rounded-full w-10 h-10  ball2"></span>
        </div>
      </div>
    </>
  );
};

export default App;
