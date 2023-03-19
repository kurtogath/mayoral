/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';

const Home = (): JSX.Element => {
    return (
        <>
            <Head>
                <title>Mayoral</title>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className='text-center'>
                <div className='content-container container mx-auto px-4'>
                    Hello World!
                </div>
            </main>
        </>
    );
};

export default Home;
