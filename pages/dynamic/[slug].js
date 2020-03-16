import React from "react";
import {Marquee} from "../../components/Marquee";
import {fetcher} from "../../utils";
import {NextSeo} from "next-seo";

// This is just an example that we can dynamic route from the .json. The performance with this one is not as good as creating a page if we already know the page name/slug.
// eg. /dynamic/industries

export default function Page({page}) {
    return (
        <>
            <NextSeo title={page.title}/>
            <Marquee {...page.blocks[0]} />
        </>
    );
}
Page.getInitialProps = async (props) => {
    const page = await fetcher('/api/pages?slug=' + props.query.slug);
    const pageNotFound = Object.keys(page).length === 0 || false;
    //handle 404 if there is not a match
    if (pageNotFound) {
        props.res.statusCode = 404;
        props.res.end('Page Not found');
        return;
    }
    return {page};
};
