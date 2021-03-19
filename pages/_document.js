import Document, { Head, Main, NextScript } from 'next/document';
import classNames from 'classnames';

export default class RootDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
                    <meta name="description" content="Dev.log"/>
                    <meta name="keywords" content="blog,react,antd,webpack,css,javascript" />
                    <link rel="manifest" href="/static/manifest.json" />
                    <link rel="shortcut icon" href="/static/favicon.ico" />
                    <title>채팅룸</title>
                </Head>
                <body className={classNames(['d-flex','h-100','text-center','text-dark','bg-light'])}>
                    <Main />
                    <NextScript />
                    <style jsx global>{`
                        /* Other global styles such as 'html, body' etc... */

                        #__next {
                            width: 100%; height: 100%;
                        }
                    `}</style>
                </body>
            </html>
        );
    }
}