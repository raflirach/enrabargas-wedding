import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar";
import { useTransition, animated } from "@react-spring/web";
import { useState } from "react";
import Header from "@/components/header";
import SubHeader from "@/components/subHeader";
import Bride from "@/components/bride";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className=" bg-background text-primary border-secondary">
        <Header />
        <SubHeader />
        <Bride />
      </main>
    </>
  );
}
