import "@app/styles/globals.css";
import type { AppProps } from "next/app";

import { makeServer } from "./../server";

if (process.env.NODE_ENV === "development") {
    makeServer({ environment: "development" });
}

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
