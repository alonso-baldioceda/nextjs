import "../styles/globals.css";
import type { AppProps } from "next/app";
// import DefaultLayout from "../layouts/defaultLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
