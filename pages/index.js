import Head from "next/head";
import Image from "next/image";
import { AuthProvider } from "../context/AuthContext";
import Dashboard from "../components/dashboard/Dashboard";
import Layout from "../components/layout/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quizz</title>
        <meta name="description" content="Great quizz app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AuthProvider>
          <Dashboard />
        </AuthProvider>
      </Layout>
    </div>
  );
}
