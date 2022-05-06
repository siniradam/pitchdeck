import React from "react";
import Head from "next/head";
import Header from "../components/Header";

function About() {
  return (
    <div>
      <Head>
        <title>About - We Funder</title>
        <meta name='description' content='WeFunder' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-100 via-indigo-100 to-gray-200'>
        <Header />
        <div className='flex flex-col  min-h-screen m-6'>
          <h1 className='text-3xl'>About</h1>
          <p className='text-xl'>
            WeFunder is a platform for people to find and fund projects that
            they are interested in.
          </p>
          <p className='text-md'>Project by Koray Kircaoglu</p>
        </div>
      </div>
    </div>
  );
}

export default About;
