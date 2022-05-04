import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectTile({ title, username, description, image, id }) {
  return (
    <div>
      <Link href={`project/${id}`}>
        <a className='block h-64 rounded-lg shadow-lg bg-white relative overflow-hidden'>
          {image && (
            <Image
              src={image}
              width={300}
              height={300}
              layout='fill'
              objectFit='cover'
            />
          )}
        </a>
      </Link>
      <div className='flex items-center justify-between mt-3'>
        <div>
          <a href='#' className='font-medium'>
            {title}
          </a>
          <a className='flex items-center' href='#'>
            <span className='text-xs font-medium text-gray-600'>by</span>
            <span className='text-xs font-medium ml-1 text-indigo-500'>
              {username}
            </span>
          </a>
        </div>
        <span className='flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded'>
          <Link href={`project/${id}`}>
            <a>View</a>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default ProjectTile;
