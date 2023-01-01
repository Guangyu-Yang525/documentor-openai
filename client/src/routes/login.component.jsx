import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import apiFetch from "../api/apiFetch";
import Input from "../components/input.component";
import { UserContext } from "../contexts/user.context";

/**
 * @author Guangyu Yang
 * Login page, it should have a link points to
 * register page, so users can register an account
 * if they don't have one.
 * @returns
 */

const defaultFormFields = {
  email: "",
  password: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();
  const navigateToRegister = () => navigate("/register");
  const {authenticated, setAuthenticated} = useContext(UserContext)

  const resetFields = () => setFormFields(defaultFormFields);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const apiInput = { ...formFields };
    try {
      const response = await apiFetch.post("/auth/login", apiInput);
      localStorage.setItem("access_token", response.data.access_token)
      setAuthenticated(true)
      navigate("/")
    } catch (error) {
      const { message } = error.response.data
      Swal.fire({
        title: "Error",
        text: message,
        icon: 'error',
      })
    } finally {
      resetFields();
    }
  };

  return (
    <div className="h-full flex justify-center items-center overflow-hidden">
      <form
        onSubmit={submitHandler}
        className="flex p-4 flex-col md:h-1/2 w-5/6 md:w-1/4 xl:w-1/8 justify-start md:justify-center gap-4 rounded-lg bg-gray-300 dark:bg-gray-700"
      >
        <span className="text-3xl mx-auto dark:text-white">Login</span>
        <Input
          label={"Email"}
          placeholder="example@email.com"
          value={email}
          name={"email"}
          onChange={onChangeHandler}
          required
        />
        <Input
          label={"Password"}
          placeholder="type your password"
          type="password"
          value={password}
          name={"password"}
          onChange={onChangeHandler}
          required
        />
        <button className="text-gray-100 rounded bg-sky-500 hover:bg-sky-600 px-3 py-1">
          Submit
        </button>
        <span
          onClick={navigateToRegister}
          className="mx-auto hover:underline dark:text-white"
        >
          Doesn't have an account?
        </span>
      </form>
    </div>
  );
};

export default Login;
