import React from 'react'
import {DefaultSeo} from 'next-seo';
import '../styles/global.scss';
import Layout from "../components/Layout";
import {AnimatePresence} from "framer-motion";
import {Container} from 'next/app'

function MyApp({Component, pageProps, router}) {
    return (
        <>
            <DefaultSeo
                titleTemplate="%s | Marquee Test"
                openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    url: 'https://marquee-react.now.sh',
                    site_name: 'Marquee React Test',
                }}
            />
            <Layout pageTitle={"Home"}>
                <AnimatePresence exitBeforeEnter>
                    <Component {...pageProps} key={router.route}/>
                </AnimatePresence>
            </Layout>

        </>
    );
}

export default MyApp


