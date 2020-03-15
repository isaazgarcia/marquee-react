import React from "react";
import Layout from "../components/Layout";
import {Marquee} from "../components/Marquee";

export default function Index() {
    return (
        <>
        <Layout pageTitle={"Home"}>
            <Marquee
                headline={"Lorem ipsum dolor sit amet"}
                subhead={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}
                cta={"Nemo enim ipsam voluptatem quia voluptas."}
            />
        </Layout>
        </>
    );
}
