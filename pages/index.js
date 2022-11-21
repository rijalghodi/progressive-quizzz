import Head from "next/head";
import { useAuth } from "../context/AuthContext";
import Dashboard from "../components/dashboard/Dashboard";
import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";

export default function Home() {
  const { currentUser } = useAuth();
  const route = useRouter();
  if (!currentUser) {
    route.push("/login");
    return;
  }
  return (
    <div className="">
      <Head>
        <title>Quizz</title>
        <meta name="description" content="Great quizz app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}
