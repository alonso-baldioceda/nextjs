import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Header title="Amazespace" />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
