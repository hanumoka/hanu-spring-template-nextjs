import React from 'react'
import {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes';
import '../styles/global.css'
import Layout from "../components/Layout";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;