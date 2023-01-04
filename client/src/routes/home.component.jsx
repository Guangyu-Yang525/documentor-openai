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
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-500 from-sky-400">
          Documentor,
        </span>{" "}
        AI powered.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-5">
        <div className="flex flex-col">
          <pre className="dark:text-white text-md md:text-2xl font-extrabold ">
            powered by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-green-600 from-sky-400">
              Open AI GPT-3
            </span>{" "}
          </pre>
          <pre className="dark:text-white whitespace-pre-wrap mt-10">
            Thanks to powerful Artifitical Intelligence GPT-3, Documentor could
            analyze your requirement intelligently, Provide accurate and useful
            feedback.
          </pre>
        </div>
        <div className="flex flex-col">
          <pre className="dark:text-white text-md md:text-2xl font-extrabold">
            One tool handles{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-lime-600 from-yellow-400">
              all paper works
            </span>{" "}
          </pre>
          <pre className="dark:text-white whitespace-pre-wrap mt-10">
            Documentor could correct the grammar of documents, summarize the long
            and hard to understand documents to short and intuitive summary,
            generate essay outline based on specified topic, and extract
            keywords from documents.
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Home;
