import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PrismicProvider } from "@prismicio/react";
import Link from "next/link";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <PrismicProvider
            internalLinkComponent={({ href, ...props }) => (
                <Link href={href}>
                    <a {...props} />
                </Link>
            )}
        >
            <PrismicPreview repositoryName={repositoryName}>
                <Component {...pageProps} />
            </PrismicPreview>
        </PrismicProvider>
    );
}
