import "../styles/globals.css";
import Layout from "../components/Layout";
import { ContextStorage } from "../context/useContext";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ProgressBar from "@badrap/bar-of-progress";
import { useRouter } from "next/router";
import { useEffect } from "react";
const progress = new ProgressBar({
  size: 4,
  color: "#898C5E",
  className: "bar-of-progress",
  delay: 100,
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", progress.start);
    router.events.on("routeChangeComplete", progress.finish);
    router.events.on("routeChangeError", progress.finish);

    return () => {
      router.events.off("routeChangeStart", progress.start);
      router.events.off("routeChangeComplete", progress.finish);
      router.events.off("routeChangeError", progress.finish);
    };
  }, [router]);

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
