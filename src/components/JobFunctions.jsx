import React, { useState } from 'react';

export default function JobItem({ job, isEven, isLast }) {
  const [expanded, setExpanded] = useState(false);
  const itemsToShow = expanded ? job.description.length : 1;

  return (
    <div
      className={`timeline-item mb-0 flex ${
        isEven ? 'justify-start' : 'justify-end'
      } relative ${isLast ? 'sm:mt-0 mt-4' : ''}`}
    >
      <div className="timeline-content bg-white shadow-md hover:shadow-xl transition-shadow rounded-lg p-4 w-full sm:w-8/12 md:w-6/12 lg:w-5/12 relative">
        <h2 className="text-base sm:text-lg font-semibold text-center">
          {job.name} – {job.company}
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 text-center">{job.date}</p>
        <ul className="text-sm sm:text-base list-disc list-inside text-left mt-2">
          {job.description.slice(0, itemsToShow).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        {job.description.length > 1 && (
          <button
            className="mt-2 text-xs sm:text-sm font-medium text-[#0096c7] hover:underline"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Ver menos' : 'Ver más'}
          </button>
        )}
      </div>

      <div className="timeline-marker bg-[#0096c7] w-3 sm:w-4 h-3 sm:h-4 rounded-full absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20 hidden sm:block" />

      <div
        className={`timeline-line bg-gray-300 w-1 absolute left-1/2 transform -translate-x-1/2 z-10 ${
          isLast ? 'h-full bottom-0' : 'h-full top-0'
        } hidden sm:block`}
      />
    </div>
  );
}