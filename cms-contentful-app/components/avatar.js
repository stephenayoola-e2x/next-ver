import React from 'react';

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center" >
      <img
        src={picture.url}
        className="w-12 h-12 rounded-full mr-4"
        alt={name}
      />
      <div className="text-xl font-bold" data-test="mock-avatar" >{name}</div>
    </div>
  )
}
