"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormButton from "../buttons/FormButton";
import { SignupFormSchema } from "@/app/lib/definations";
import Link from "next/link";

type SignupFormValues = z.infer<typeof SignupFormSchema>;

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(SignupFormSchema),
  });

  const onSubmit = async (data: SignupFormValues) => {
    // Handle signup logic here, e.g., call signup API
    console.log(data);
  };

  return (
    <div>
      <form
        className="min-h-[80vh] flex items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
          <p className="text-2xl font-semibold">Create Account</p>
          <p>Please signup to book appointment</p>

          {/* Full Name Field */}
          <div className="w-full">
            <p>Full Name</p>
            <input
              type="text"
              {...register("name")}
              className="border border-zinc-300 rounded w-full p-2 mt-1 "
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="w-full">
            <p>Email</p>
            <input
              type="email"
              {...register("email")}
              className="border border-zinc-300 rounded w-full p-2 mt-1 "
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="w-full">
            <p>Password</p>
            <input
              type="password"
              {...register("password")}
              className="border border-zinc-300 rounded w-full p-2 mt-1 "
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="w-full">
            <p>Confirm Password</p>
            <input
              type="password"
              {...register("confirmPassword")}
              className="border border-zinc-300 rounded w-full p-2 mt-1"
            />
            {errors.confirmPassword && (
              <p className="text-red-600">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <FormButton title="Signup" isLoading={isSubmitting} />
          <p>
            Already have an account?{" "}
            <Link href={"/auth/login"}>
              <span className="text-primary underline cursor-pointer">
                Login here
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
