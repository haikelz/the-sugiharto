import type { AppProps } from "next/app";
import { Provider } from "jotai";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
