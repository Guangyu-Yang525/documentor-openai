/**
 * Simple page with simple introductions.
 * @returns
 *
 *
 */
import openaiIcon from "../assets/openai.jpeg";
import Title from "../components/titie.component";
const Home = () => {
  return (
    <div className="p-5 flex flex-col gap-5">
      {/* <pre className="dark:text-white text-lg md:text-3xl whitespace-pre-wrap ">
        Documentor, tools for paper work
      </pre> */}
      {/* <Title>Documentor, tools for paper work</Title> */}
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-500 from-sky-400">
          Documentor
        </span>{" "}
        AI powered.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <div className="flex flex-col">
          <pre className="dark:text-white text-md md:text-2xl ">
            powered by GPT-3 Open AI
          </pre>
          <pre className="dark:text-white whitespace-pre-wrap mt-10">
            Thanks to powerful Artifitical Intelligence GPT-3, Documentor could
            analyze your requirement intelligently, Provide accurate and useful
            suggestions, corrections and summary.
          </pre>
        </div>
        <pre className="dark:text-white text-md md:text-2xl ">
          Fully functional documents tools
        </pre>
      </div>
    </div>
  );
};

export default Home;
