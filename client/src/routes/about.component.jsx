import githubIcon from "../assets/githuub.png";
import linkedinIcon from "../assets/linkedin.png";

const About = () => {
  return (
    <div className="p-5">
      <h1 className="text-3xl dark:text-white font-extrabold">About me</h1>
      <div className="w-full bg-white mt-10 border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="p-5 flex flex-row">
          <h1 className="text-2xl dark:text-white font-bold">Guangyu Yang</h1>
          <a href="https://github.com/Guangyu-Yang525" className="ml-3">
            <img src={githubIcon} className="w-10 h-10"/>
          </a>
          <a
            href="https://www.linkedin.com/in/guangyu-yang-561166240/"
            className="ml-3"
          >
            <img src={linkedinIcon} className="w-10 h-10 rounded-full" />
          </a>
        </div>
        <pre className="p-5 dark:text-white whitespace-pre-wrap">
            Email: dukeyang7@gmail.com
        </pre>
      </div>
    </div>
  );
};
export default About;
