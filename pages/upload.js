import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Form from "../components/Form";

function Upload() {
  return (
    <div>
      <Head>
        <title>Upload File - We Funder</title>
        <meta name='description' content='WeFunder' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-100 via-indigo-100 to-gray-200'>
        <Header />
        <Form />
      </div>
    </div>
  );
}

export default Upload;
