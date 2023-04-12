import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar";
import { useTransition, animated } from "@react-spring/web";
import { useState } from "react";
import Header from "@/sections/header";
import SubHeader from "@/sections/subHeader";
import Bride from "@/sections/bride";
import Countdown from "@/sections/countdown";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className=" bg-background text-primary border-secondary font-alice">
        <Header />
        <SubHeader />
        <Bride />
        <Countdown />
      </main>
    </>
  );
}
