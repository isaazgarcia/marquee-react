import React from 'react'
// import {PageTransition} from 'next-page-transitions'
import {DefaultSeo} from 'next-seo';
import '../styles/global.scss';

function MyApp({Component, pageProps, router}) {
    return <>
            <DefaultSeo
                titleTemplate="%s | Marquee Test"
                openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    url: 'https://marquee-react.now.sh',
                    site_name: 'Vue 2 React Test',
                }}
            />
            {/*I did not use it because I didn't like how it looked.(PageTransition) */}
            {/*<PageTransition timeout={600} classNames="page-transition">*/}
                <Component {...pageProps} key={router.route}/>
            {/*</PageTransition>*/}
        </>

}

export default MyApp
