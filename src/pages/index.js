import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="relative" id="home">
          <div
            className="absolute inset-0 bg-fixed bg-cover"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')`, 
              backgroundSize: 'auto',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          ></div>
          <div className="relative z-10 h-screen grid place-items-center">
            <div className="backdrop-blur-sm w-3/4 bg-black bg-opacity-20 text-white py-2 px-2 rounded-lg">
              <div>The Wedding Of</div>
              <div className="text-4xl mb-4">Rafli & Icha</div>
              <div className="flex justify-between">
                <div className="p-2 border-r-2 border-t-2 border-white w-full h-full">
                  <div>Save the date</div>
                  <div>15 Juli 2023</div>
                </div>
                <div className="p-2 border-l-2 border-t-2 border-white w-full h-full">Kanan</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute inset-0 bg-fixed bg-cover"
            style={{backgroundImage: `url('section-1-image-url')`}}
          ></div>
          <div className="relative z-10 h-screen grid place-items-center">Section 2 content here</div>
        </div>

        <div className="relative">
          <div
            className="absolute inset-0 bg-fixed bg-cover"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')`, 
              backgroundSize: 'auto',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          ></div>
          <div className="relative z-10 h-screen grid place-items-center backdrop-blur-sm">Section 3 content here</div>
        </div>
      </main>
    </>
  );
}
