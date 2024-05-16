import React from "react";

import DefaultLayout from "../../layouts/DefaultLayout";

const AboutPage: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold py-4">About</h1>
        <p className="my-4">
          This is a simple app that uses the NASA API to display images of the
          day.
        </p>
      </div>
    </DefaultLayout>
  );
};

export default AboutPage;
