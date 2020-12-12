import Head from 'next/head'
import Link from 'next/link'
import Sidebar from './sidebar'
import Router from 'next/router'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='author' content='Rachel How' />
        <meta name='description' content="Rachel's Digital Garden" />
        <title>Rachel's Digital Garden</title>
      </Head>
      <header className="header">
        <nav className="nav">
          <Link href="/"><a>Rachel's Digital Garden</a></Link>
        </nav>
      </header>
      <main className='container'>
        {/* <Sidebar /> */}
          <button
            style={{
              borderRadius: '8px',
              position: 'fixed',
              left: '32px',
              border: '1px solid #525252',
              backgroundColor: '#ffffff',
              color: 'black',
              padding: '12px 16px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
            onClick={() => Router.back()}
          >
            Back
          </button>
        <div className='content'>
          {children}
        </div>
      </main>
    </>
  )
}
