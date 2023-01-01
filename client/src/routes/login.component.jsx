import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/input.component";

/**
 * Login page, it should have a link points to
 * register page, so users can register an account
 * if they don't have one.
 * @returns
 */

const defaultFormFields = {
  email: "",
  password: "",
  username: ""
}

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password, username } = formFields

  const onChangeHandler = (event) => {
    const {name, value} = event.target
    setFormFields({...formFields, [name]: value})
  }

  const submitHandler = (event) => {
    event.preventDefault()
    console.log("submit")
  }



  return (
    <div className="h-full flex justify-center items-center overflow-hidden">
      <form onSubmit={submitHandler} className="flex p-4 flex-col md:h-1/2 w-5/6 md:w-1/4 xl:w-1/8 justify-start md:justify-center gap-4 rounded-lg bg-gray-300 dark:bg-gray-700">
        <span className="text-3xl mx-auto dark:text-white">Register</span>
        <Input label={'Username'} placeholder="type your username" value={username} name={"username"} onChange={onChangeHandler} />
        <Input label={'Password'} placeholder="type your password" value={password} name={"password"} onChange={onChangeHandler} />
        <Input label={'Email'} placeholder="example@email.com" value={email} name={"email"} onChange={onChangeHandler} />
        <button className="text-gray-100 rounded bg-sky-500 hover:bg-sky-600 px-3 py-1">
          Submit
        </button>
        <span className="mx-auto hover:underline dark:text-white">Doesn't have an accout?</span>
      </form>
    </div>
  );
};

export default Login;
