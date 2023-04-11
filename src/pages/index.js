import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar";
import { useTransition, animated } from "@react-spring/web";
import { useState } from "react";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header />

        <div className="relative">
          <div
            className="absolute inset-0 bg-fixed bg-cover"
            style={{ backgroundImage: `url('section-1-image-url')` }}
          ></div>
          <div className="relative z-10 h-screen grid place-items-center">
            Section 2 content here
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute inset-0 bg-fixed bg-cover"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')`,
              backgroundSize: "auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="relative z-10 h-screen grid place-items-center backdrop-blur-sm">
            Section 3 content here
          </div>
        </div>
      </main>
    </>
  );
}
