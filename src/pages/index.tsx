import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import ImagesOfTheDay from "../components/images-of-the-day";

const HomePage: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="container mx-auto">
        <ImagesOfTheDay />
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
