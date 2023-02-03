import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Next.js template with tailwindcss & prettier</title>
        <meta
          name="description"
          content="Next.js template with tailwindcss & prettier"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph */}
        <meta
          property="og:title"
          content="Next.js template with tailwindcss & prettier"
        />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Next.js template with tailwindcss & prettier"
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Twitter */}
        <meta
          property="twitter:title"
          content="Next.js template with tailwindcss & prettier"
        />
        <meta
          property="twitter:description"
          content="Next.js template with tailwindcss & prettier"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
