import React from 'react';
import App from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';

class chat extends App {  
    render() {
      const { Component, pageProps } = this.props;
      return <Component {...pageProps} />;
    }
  }
  
  chat.getInitialProps = async context => {
    const { ctx, Component } = context;
    console.log(ctx);
    console.dir(Component);
    let pageProps = {};
    if (Component.getInitialProps ) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  export default chat;