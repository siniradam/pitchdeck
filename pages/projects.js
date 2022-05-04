import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import ProjectTile from "../components/ProjectTile";
import ProjectPagination from "../components/ProjectPagination";

import { projectFS } from "../helpers/projectFs";

function projects({ projects }) {
  return (
    <div>
      <Head>
        <title>We Funder - Pitch Deck</title>
        <meta name='description' content='WeFunder' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-100 via-indigo-100 to-gray-200'>
        <Header />
        <div className='flex flex-col  min-h-screen m-6'>
          <h1 className='text-3xl'>Projects</h1>
          <div className='flex flex-col sm:flex-row sm:items-end sm:justify-between mt-6'>
            <span className='text-sm font-semibold'>
              {projects.length} Project{projects.length > 1 && "s"}
            </span>
            <button className='relative text-sm focus:outline-none group mt-4 sm:mt-0'>
              <div className='flex items-center justify-between w-40 h-10 px-3 border-2 border-gray-300 rounded hover:bg-gray-300'>
                <span className='font-medium'>Popular</span>
                <svg
                  className='w-4 h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg rounded group-focus:flex'>
                <a
                  className='w-full px-4 py-2 text-left hover:bg-gray-200'
                  href='#'
                >
                  Popular
                </a>
                <a
                  className='w-full px-4 py-2 text-left hover:bg-gray-200'
                  href='#'
                >
                  Featured
                </a>
                <a
                  className='w-full px-4 py-2 text-left hover:bg-gray-200'
                  href='#'
                >
                  Newest
                </a>
              </div>
            </button>
          </div>

          <div className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6'>
            {projects.map((project) => (
              <ProjectTile
                key={project.id}
                title={project.title}
                name={project.username}
                image={project?.images?.[0]?.src}
                username='Someone'
                id={project.id}
              />
            ))}
          </div>

          <ProjectPagination />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params, req }) {
  const projects = projectFS.getAll();

  return {
    props: {
      projects: projects || null,
    }, // will be passed to the page component as props
  };
}

export default projects;
