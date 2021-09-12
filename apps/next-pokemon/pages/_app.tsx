import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Welcome to next-pokemon!</title>
            </Head>
            <div className="app">
                <header className="flex" style={{ marginBottom: '10px' }}>
                    <h1>Welcome to next-pokemon!</h1>
                </header>
                <main>
                    <Component {...pageProps} />
                </main>
            </div>
        </>
    );
}

export default CustomApp;
