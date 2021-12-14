import App from 'next/app';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../store';

import '../styles/globals.css';

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		);
	}
}

const wrapper = createWrapper(() => store);

export default wrapper.withRedux(MyApp);
