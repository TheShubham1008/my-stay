import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      showToast({ message: "Sign in Successful!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate(location.state?.from?.pathname || "/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form
      className="flex flex-col gap-5 p-8 bg-white shadow-lg rounded-lg border border-[#A45EE5] "
      onSubmit={onSubmit}
    >
      <h2 className="text-3xl font-bold text-[#A45EE5]">Sign In</h2>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Email
        <input
          type="email"
          className="mt-1 border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal"
          {...register("email", { required: "This field is required" })}
        ></input>
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Password
        <input
          type="password"
          className="mt-1 border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        ></input>
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </label>
      <div className="flex items-center justify-between">
        <span className="text-sm">
          Not Registered?{" "}
          <Link className="underline text-[#A45EE5]" to="/register">
            Create an account here
          </Link>
        </span>
        <button
          type="submit"
          className="bg-[#A45EE5] text-white py-2 px-4 rounded font-bold hover:bg-[#914AD1] text-lg transition-colors duration-300"
        >
          {mutation.isLoading ? "Signing in..." : "Login"}
        </button>
      </div>
    </form>
  );
};

export default SignIn;
