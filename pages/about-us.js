import React from "react";
import Layout from "../components/Layout";
import {Marquee} from "../components/Marquee";
import {fetcher} from "../utils";
// import data from "../data/download";

export default function AboutUs({page}) {
    return (
        <>
            <Layout pageTitle={page.title}>
                <Marquee {...page.blocks[0]} />
            </Layout>
        </>
    );
}
AboutUs.getInitialProps = async (props) => {
    const slug = props.pathname.split('/')[1];
    const page = await fetcher('/api/pages?slug='+slug);
    // option 2
    // const page = data.pages.find(page=>page.slug === slug);

    return {page};
};
