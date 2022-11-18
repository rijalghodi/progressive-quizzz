// Global css
import "../styles/globals.css";
// tailwind css
import "../styles/output.css";
// bootstrap css
// import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
