// Global css
import "../styles/globals.css";
// tailwind css
import "../styles/output.css";
import { AuthProvider } from "../context/AuthContext";
import { store } from "../store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
}

export default MyApp;
