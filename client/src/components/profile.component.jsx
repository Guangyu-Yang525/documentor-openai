import { useState } from 'react';
import userIcon from '../assets/react.svg' 
const Profile = ({ toggleHandler }) => {
  return (
  <div className='flex flex-col items-center md:order-2 my-2'>
    <button onClick={toggleHandler} className='flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'>
      <img className="w-8 h-8 rounded-full" src={userIcon}/>
    </button>
  </div>);
};
export default Profile;
