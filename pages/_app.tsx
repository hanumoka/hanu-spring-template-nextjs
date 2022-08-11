import React from 'react'
import {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes';
import '../styles/global.css'

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;