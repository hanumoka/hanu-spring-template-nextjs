import React, { useState } from 'react';
import { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'next-themes';
import '../../styles/global.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider enableSystem={true} attribute="class">
        <QueryClientProvider client={queryClient}>
          {/* devtools */}
          <ReactQueryDevtools initialIsOpen={true} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
