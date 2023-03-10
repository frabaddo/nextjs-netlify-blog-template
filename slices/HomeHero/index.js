import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HomeHeroSlice} HomeHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomeHeroSlice>} HomeHeroProps
 * @param { HomeHeroProps }
 */
const HomeHero = ({ slice }) => (
    <section>
        <span className="text-3xl font-bold no-underline">
            {slice.primary.title ? (
                <PrismicRichText field={slice.primary.title} />
            ) : (
                <h2>Template slice, update me!</h2>
            )}
        </span>
        {slice.primary.description ? (
            <PrismicRichText field={slice.primary.description} />
        ) : (
            <p>start by editing this slice from inside Slice Machine!</p>
        )}
        <style jsx>{``}</style>
    </section>
);

export default HomeHero;
