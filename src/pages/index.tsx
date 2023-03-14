import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../common/layout/layout";
import NavBar from "../common/layout/nav-bar";
import HomeComponent from "../components/section/Home/home";

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeComponent />
    </Layout>
  );
};

export default Home;
