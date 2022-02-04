import "../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
