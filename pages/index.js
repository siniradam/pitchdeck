import Head from "next/head";
import Form from "../components/Form";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>We Funder - Pitch Deck</title>
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
