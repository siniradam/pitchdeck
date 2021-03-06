import React from "react";
import Head from "next/head";
import Header from "../../components/Header";

import { useRouter } from "next/router";
import { projectFS } from "../../helpers/projectFs";
import Image from "next/image";

function project({ project }) {
  return (
    <div>
      <Head>
        <title>We Funder - Pitch Deck</title>
        <meta name='description' content='WeFunder' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-100 via-indigo-100 to-gray-200'>
        <Header />

        {project === null ? (
          <div className='flex w-full h-full justify-center'>
            <h2 className=' self-center'>This project does not exists.</h2>
          </div>
        ) : (
          <div className='flex xl:flex-row md:flex-col justify-center w-screen h-screen px-4 text-gray-700'>
            <div className='flex flex-col flex-grow'>
              <div className='flex justify-between flex-shrink-0 px-8 py-4 h-16'>
                <h1 className='text-xl font-semibold'>{project.title}</h1>
              </div>
              <div className='flex-grow h-0 overflow-auto'>
                <div className='flex w-full p-8 h-96 max-h-96 border-gray-300 relative justify-center'>
                  {project.inProgress ? (
                    <h2 className='text-center self-center'>
                      We are still working on this, images will be available
                      soon.
                    </h2>
                  ) : (
                    <Image
                      key={`${project?.images[0].id}`}
                      src={project?.images[0].path}
                      alt='Project Preview'
                      layout='fill'
                      objectFit='cover'
                    />
                  )}
                </div>
                <div className='w-full p-8  border-gray-300'>
                  <h2 className='text-xl font-semibold'>Description</h2>
                  <p className='text-sm whitespace-pre-line'>
                    {project.description}
                  </p>
                  {project.inProgress ? (
                    <h2 className='text-center self-center'>
                      We are still working on this, images will be available
                      soon.
                    </h2>
                  ) : (
                    project?.images?.map((image) => (
                      <div
                        key={`h${image.name}`}
                        className='h-96 w-full relative mb-6'
                      >
                        <Image
                          key={`p${image.name}`}
                          src={image.path}
                          layout='fill'
                          objectFit='contain'
                        />
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div className='flex flex-col flex-shrink-0 w-1/4 p-4 mt-16 pt-0'>
              <div className='border border-gray-300'>
                <div className='bg-emerald-400 h-24 p-6'>
                  <h2 className='text-4xl font-semibold text-white'>
                    Project Goal
                  </h2>
                </div>
                <div className='p-4'>
                  <p className='text-3xl font-semibold'>$19,475,538</p>
                  <p className='text-sm'>raised from 7834 investors</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default project;

export async function getServerSideProps({ params, req }) {
  const project = projectFS.getById(params.id);

  return {
    props: {
      project: project || null,
    }, // will be passed to the page component as props
  };
}
