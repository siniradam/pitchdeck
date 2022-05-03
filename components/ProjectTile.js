import React from "react";

function ProjectTile({ title, username, description, image, link }) {
  return (
    <div>
      <a href='#' className='block h-64 rounded-lg shadow-lg bg-white'></a>
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
          View
        </span>
      </div>
    </div>
  );
}

export default ProjectTile;
