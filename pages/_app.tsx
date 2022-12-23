import "../styles/globals.css";
import Layout from "../components/Layout";
import {ContextStorage} from "../context/useContext"
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <ContextStorage>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ContextStorage>
    </>
  );
}
