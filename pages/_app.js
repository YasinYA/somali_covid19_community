import PropTypes from 'prop-types'

import { Layout } from '../components'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/css/styles.css'

const App = ({ Component, pageProps }) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
)

App.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object
}

export default App
