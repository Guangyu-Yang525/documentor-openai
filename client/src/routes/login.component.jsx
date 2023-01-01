import { Link } from "react-router-dom";

/**
 * Login page, it should have a link points to
 * register page, so users can register an account
 * if they don't have one.
 * @returns
 */
const Login = () => {
  return (
    <div className="h-full flex justify-center items-center overflow-hidden">
      <div className="flex p-4 flex-col md:h-1/2 w-1/2 md:w-1/4 xl:w-1/8 justify-start md:justify-center gap-4 rounded-lg bg-gray-300 dark:bg-gray-700">
        <span className="text-3xl mx-auto">Register</span>
        <label>username</label>
        <input></input>
        <label>password</label>
        <input></input>
        <label>email</label>
        <input></input>
        <button className="text-gray-100 rounded bg-sky-500 hover:bg-sky-600 px-3 py-1">
          Submit
        </button>
        <span className="mx-auto hover:underline">Doesn't have an accout?</span>
      </div>
    </div>
  );
};

export default Login;
