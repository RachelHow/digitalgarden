import Head from 'next/head'
import Header from './Header'
import Sidebar from './sidebar'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Rachel How" />
        <meta name="description" content="Rachel's Digital Garden" />
        <title>Rachel's Digital Garden</title>
      </Head>
      <Header siteName="Rachel's Digital Garden" />
      <main className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </main>
    </>
  )
}