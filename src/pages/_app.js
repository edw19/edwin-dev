import "../styles/tailwind.css";
import "../styles/global.css";
import "nprogress/nprogress.css";
import Layout from "../components/layout/layout";
import progress from "nprogress";
import Router from "next/router";
import Head from "next/head";
import { prefixEdwinDevAssets } from "../constants";

progress.configure({
  showSpinner: true,
});

Router.events.on("routeChangeStart", () => progress.start());
Router.events.on("routeChangeComplete", () => progress.done());
Router.events.on("routeChangeError", () => progress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link
          rel="shortcut icon"
          href={prefixEdwinDevAssets + "/favicon.ico"}
        />
        <title>Edwin Narváez</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
