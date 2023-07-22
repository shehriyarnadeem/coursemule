import '../styles/globals.css';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { store } from '../store'
import { Provider } from 'react-redux'
import Layout from '../common/Layout'
function MyApp({ Component, pageProps }) {

  return (
    <>
  <Provider store={store}>
       <Layout>
        <Header />
        <Component {...pageProps} />
        <Footer />
       </Layout> 
    </Provider>
    </>
  )
}

export default MyApp
