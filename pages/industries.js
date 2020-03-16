import React from "react";
import {Marquee} from "../components/Marquee";
import {fetcher} from "../utils";
import {NextSeo} from "next-seo";
// import data from "../data/download";

export default function Industries({page}) {
    return (
        <>
            <NextSeo title={page.title}/>
            <Marquee {...page.blocks[0]} />
        </>
    );
}
Industries.getInitialProps = async (props) => {
    const slug = props.pathname.split('/')[1];
    const page = await fetcher('/api/pages?slug='+slug);
    // option 2
    // const page = data.pages.find(page=>page.slug === slug);
    return {page,slug};
};
