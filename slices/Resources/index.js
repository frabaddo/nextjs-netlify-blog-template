import React from "react";
import { PrismicImage, PrismicLink, PrismicRichText } from "@prismicio/react";

function linkContent(field) {
    return (
        <>
            <div className="absolute top-0 left-0 px-6 py-4">
                {field.title ? (
                    <PrismicRichText
                        className="mb-3 text-xl font-semibold tracking-tight text-white"
                        field={field.title}
                    />
                ) : (
                    ""
                )}
                {field.description ? (
                    <PrismicRichText
                        className="leading-normal text-gray-100"
                        field={field.description}
                    />
                ) : (
                    ""
                )}
            </div>
            {field.background ? (
                <PrismicImage
                    className="object-cover w-full h-48"
                    field={field.background}
                />
            ) : (
                <p>start by editing this slice from inside Slice Machine!</p>
            )}
        </>
    );
}
/**
 * @typedef {import("@prismicio/client").Content.ResourceSlice} ResourceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ResourceSlice>} ResourceProps
 * @param { ResourceProps }
 */
const Resource = ({ slice }) => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                {slice.items.map((field, i) => {
                    return (
                        <div
                            key="i"
                            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                        >
                            {field.link ? (
                                <PrismicLink field={field.link}>
                                    {linkContent(field)}
                                </PrismicLink>
                            ) : (
                                linkContent(field)
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Resource;
