import React from "react";

interface Country {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
  flags: {
    svg: string;
  };
}

interface Props {
  countries: Country[];
}

const Countries: React.FC<Props> = ({ countries }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl py-4">Top 30 Countries</h1>
      <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
        <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
          <tr>
            <th className="px-6 py-4">Flag</th>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Population</th>
            <th className="px-6 py-4">Region</th>
            <th className="px-6 py-4">Capital</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr
              key={index}
              className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600"
            >
              <td className="px-6 py-4">
                <img
                  src={country.flags.svg}
                  alt={`Flag of ${country.name.common}`}
                  width={50}
                  height={30}
                />
              </td>
              <td className="px-6 py-4">{country.name.common}</td>
              <td className="px-6 py-4">
                {country.population.toLocaleString()}
              </td>
              <td className="px-6 py-4">{country.region}</td>
              <td className="px-6 py-4">{country.capital}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Countries;
