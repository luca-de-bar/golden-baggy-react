import React from "react";
import "./CardColumns.css"

type Card = {
  id: number;
  content: string;
  glitchText: string;
};

const CardColumns: React.FC<{ cards: Card[] }> = ({ cards }) => {
  const middleIndex = Math.ceil(cards.length / 2);
  const leftColumnCards = cards.slice(0, middleIndex);
  const rightColumnCards = cards.slice(middleIndex);

  return (
    <div className="flex justify-center items-center my-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-x-[5rem] md:gap-x-[5rem] lg:gap-x-[13rem] max-w-3xl w-full">
        {/* Colonna sinistra */}
        <div className="space-y-6 flex flex-col items-center sm:items-end md:items-end lg:items-end">
          {leftColumnCards.map((card) => (
            <div
              key={card.id}
              className="relative bg-white p-4 shadow-lg rounded-lg w-60 h-80 flex items-center justify-center transition-transform transform hover:scale-105 hover:shadow-2xl group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 text-gray-500 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.25 9a3.75 3.75 0 1 1 7.5 0c0 2.25-3.75 3-3.75 6m0 4.5h.007v.008H12v-.008z" />
              </svg>
              <div className="glitch-wrapper absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div className="glitch" data-glitch={card.glitchText}>
                  {card.glitchText}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Colonna destra */}
        <div className="space-y-6 flex flex-col items-center sm:items-start md:items-start lg:items-start">
          {rightColumnCards.map((card) => (
            <div
              key={card.id}
              className="relative bg-white p-4 shadow-lg rounded-lg w-60 h-80 flex items-center justify-center transition-transform transform hover:scale-105 hover:shadow-2xl group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 text-gray-500 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.25 9a3.75 3.75 0 1 1 7.5 0c0 2.25-3.75 3-3.75 6m0 4.5h.007v.008H12v-.008z" />
              </svg>
              <div className="glitch-wrapper absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div className="glitch" data-glitch={card.glitchText}>
                  {card.glitchText}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Here you can control number of cards and what text should appear. The glitch effect is applied by the CardColumn.css :)
const MisteryBox: React.FC = () => {
  const cards = [
    { id: 1, content: "Card 1", glitchText: "ARISE" },
    { id: 2, content: "Card 2", glitchText: "PHOENIX" },
    { id: 3, content: "Card 3", glitchText: "VANITY" },
    { id: 4, content: "Card 4", glitchText: "ENVY" },
    { id: 5, content: "Card 5", glitchText: "ACEDIA" },
    { id: 6, content: "Card 6", glitchText: "PEGASUS" },
  ];

  return <CardColumns cards={cards} />;
};

export default MisteryBox;
