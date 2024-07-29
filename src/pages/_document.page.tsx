import { Html, Head, Main, NextScript } from 'next/document'
import { ToastContainer } from 'react-toastify'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <main className="min-h-screen bg-app-bg">
          <ToastContainer />
          <Main />
          <NextScript />
        </main>
      </body>
    </Html>
  )
}
