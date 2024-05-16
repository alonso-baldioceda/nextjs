import React from "react";
import { GetStaticProps } from "next";
import DefaultLayout from "../layouts/DefaultLayout";
import Countries from "../components/countries";
import fetchCountries from "../utils/api/countries";

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

const HomePage: React.FC<Props> = ({ countries }) => {
  return (
    <DefaultLayout>
      <div className="container mx-auto">
        <Countries countries={countries} />
      </div>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const countries = await fetchCountries();

  return {
    props: {
      countries,
    },
    revalidate: 86400, // Regenerate the page every 24 hours
  };
};

export default HomePage;
