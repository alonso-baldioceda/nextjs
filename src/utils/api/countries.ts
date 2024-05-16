import axios from "axios";

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

const fetchCountries = async (): Promise<Country[]> => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const countries = response.data;

    const sortedCountries = countries.sort((a: Country, b: Country) =>
      a.name.common.localeCompare(b.name.common)
    );
    const first30Countries = sortedCountries.slice(0, 30);

    return first30Countries;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};

export default fetchCountries;
