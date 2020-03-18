import Head from 'next/head'

const Home = () => (
    <div className='container'>
        <Head>
            <title>Somali COVID19 Tracking system</title>
            <link href='/favicon.ico' rel='icon' />
        </Head>

        <main>
            <h1 className='text-center'>
                COVID19 Tracking system for Somali people.
            </h1>
        </main>
    </div>
)

export default Home
