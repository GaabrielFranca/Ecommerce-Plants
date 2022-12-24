import "../styles/globals.css";
import Layout from "../components/Layout";
import { ContextStorage } from "../context/useContext";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer position="top-center" />
      <ContextStorage>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextStorage>
    </>
  );
}
