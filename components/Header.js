import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  const isActive = (path) => {
    return router.pathname == path
      ? "text-indigo-700"
      : "text-gray-600 hover:text-indigo-700";
  };

  return (
    <div className='flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75'>
      <Link href='/'>
        <a>
          <Image src='/images/logo.svg' width={117} height={32} />
        </a>
      </Link>
      <div className='ml-10'>
        <Link href='/projects'>
          <a className={`mx-2 text-sm font-semibold ${isActive("/projects")}`}>
            Projects
          </a>
        </Link>
        <Link href='/upload'>
          <a className={`mx-2 text-sm font-semibold ${isActive("/upload")}`}>
            Upload
          </a>
        </Link>
        <Link href='/about'>
          <a className={`mx-2 text-sm font-semibold ${isActive("/about")}`}>
            About
          </a>
        </Link>
      </div>
      <div className='flex-grow'></div>
      <form action='/projects'>
        <input
          name='q'
          className='flex h-10 px-4 ml-10 text-sm bg-gray-200 rounded-full focus:outline-none focus:ring'
          type='search'
          placeholder='Search projects'
        />
      </form>
      {/* <buton className='flex items-center justify-center w-8 h-8 ml-auto overflow-hidden rounded-full cursor-pointer'>
      <img
        src='https://assets.codepen.io/5041378/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1600304177&width=512'
        alt=''
      />
    </buton> */}
    </div>
  );
}

export default Header;
