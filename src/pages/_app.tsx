import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import Layout from '../ui/components/Layout/Layout';
import "../../styles/globals.scss"
import "../../styles/header.scss"
import "../../styles/home.scss"
import "../../styles/footer.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
