import darkIcon from '../assets/dark-mode.png'
import lightIcon from '../assets/light-mode.png'

const DarkModeToggle = ({mode, onClick}) => {
  return (
    <div className='flex flex-col items-center md:order-2 my-2'>
    <button onClick={onClick} className='flex mr-3 text-sm bg-gray-50 dark:bg-gray-900 rounded-full'>
      <img className="w-8 h-8 rounded-lg" src={ mode === 'dark' ? darkIcon : lightIcon }/>
    </button>
    </div>
  );
};
export default DarkModeToggle