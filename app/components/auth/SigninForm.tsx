"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormButton from "../buttons/FormButton";
import { SigninFormSchema } from "@/app/lib/definations";
import Link from "next/link";
import { signin } from "@/app/actions/auth";
import { useRouter } from "next/navigation";

export type SigninFormValues = z.infer<typeof SigninFormSchema>;

const SigninForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SigninFormValues>({
    resolver: zodResolver(SigninFormSchema),
  });

  const onSubmit = async (data: SigninFormValues) => {
    // Handle signup logic here, e.g., call signup API
    const resp = await signin(data);
    if (resp.msg === "success") {
      router.replace("/");
    }
  };

  return (
    <div>
      <form
        className="min-h-[80vh] flex items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
          <p className="text-2xl font-semibold">Sign in</p>
          <p>Please signin to book appointment</p>

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

          {/* Submit Button */}
          <FormButton title="Signin" isLoading={isSubmitting} />
          <p>
            Create a new account?{" "}
            <Link href={"/auth/signup"}>
              <span className="text-primary underline cursor-pointer">
                Signup here
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
