import React from "react";

export default function StayCard({ stay }) {
  if (!stay) return null;

  return (
    <article className="card rounded-2xl lg:mb-6 min-w-[250px] max-w-[395px] hover:scale-105 transition-transform duration-300  ">
      <div className="imgCard w-full overflow-hidden flex justify-center">
        <img
          src={stay.photo}
          alt={stay.title}
          className="w-full h-50 sm:h-64 object-cover rounded-2xl md:w-[95%] md:h-58 lg:h-60 xl:h-64"
        />
      </div>

      <div className="px-2 mt-1 md:-mt-8 lg:-mt-6 xl:-mt-2">
        <div className="flex justify-between items-center text-[11px] md:text-[13px] lg:text-[12.5px] text-gray-700 -mb-2 dark:text-gray-100">
          <div className="flex items-center gap-3 dark:text-white">
            {stay.superHost && (
              <span className="text-[11px] font-semibold uppercase px-3 py-1 rounded-full border border-gray-300 text-gray-700 dark:text-white">
                SUPERHOST
              </span>
            )}
            <span>
              {stay.type}
              {stay.beds ? ` · ${stay.beds} beds` : ""}
            </span>
          </div>

          <div className="flex items-center ">
            <img src="./img/star.svg" alt="star raiting" className="red h-4 " />
            {stay.rating}
          </div>
        </div>

        <h3 className="font-semibold text-gray-800 mt-2 mb-5 text-[13px] md:text-[14px] dark:text-white">
          {stay.title}
        </h3>
      </div>
    </article>
  );
}
