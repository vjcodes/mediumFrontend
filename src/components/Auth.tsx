import { SignupInput } from "@vjcodess/medium-common-2";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [values, setValues] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  async function sendRequest() {
    console.log(values);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin" : "signup"}`,
        values
      );
      const jwt = response.data.jwt;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <div className="px-10">
        <div className="text-3xl font-bold">Create an account</div>
        <div className="text-slate-400">
          {type === "signin"
            ? "Don't have an account?"
            : "Already have an account?"}

          <Link
            className="underline ml-2"
            to={`/${type === "signin" ? "signup" : "signin"}`}
          >
            {type === "signin" ? "Sign up" : "Sign in"}
          </Link>
        </div>
      </div>

      <form className="w-[60%] mt-4">
        {type === "signup" && (
          <LabelledInput
            type="text"
            label="Username"
            placeholder="enter your username"
            onChange={(e) => {
              setValues({
                ...values,
                name: e.target.value,
              });
            }}
          />
        )}

        <LabelledInput
          type="email"
          label="Email"
          placeholder="enter your Email"
          onChange={(e) => {
            setValues({
              ...values,
              email: e.target.value,
            });
          }}
        />

        <LabelledInput
          type="password"
          label="Password"
          placeholder="enter your password"
          onChange={(e) => {
            setValues({
              ...values,
              password: e.target.value,
            });
          }}
        />

        <button
          onClick={(e) => {
            e.preventDefault()
            sendRequest()
          }}
          className="w-full border bg-black text-white py-4 rounded-md mt-10"
        >
          {type === "signup" ? "Signup" : "Signin"}
        </button>
      </form>
    </div>
  );
};

interface LabelledInputType {
  type: string;
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LabelledInput = ({
  type,
  label,
  placeholder,
  onChange,
}: LabelledInputType) => {
  return (
    <div className="mt-2">
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        onChange={onChange}
        type={type}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Auth;
