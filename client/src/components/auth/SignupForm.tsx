"use client";

import React, { useState } from "react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { SignupSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import AuthSocial from "./AuthSocial";
import AuthSeperator from "./AuthSeperator";
import Link from "next/link";
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";
import { signup } from "@/actions/signup";
import Image from "next/image";
import { ArrowRight, EyeIcon, EyeOffIcon } from "lucide-react";
import Spinner from "../ui/spinner";

interface AuthData {
  username_label: string;
  email_label: string;
  password_label: string;
}

interface NavData {
  signup: string;
  signin: string;
}

export const SignupForm = ({
  auth_data,
  nav_data,
}: {
  auth_data: AuthData;
  nav_data: NavData;
}) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [loading, setLoading] = useState(false);
  const [eyeOpen, setEyeOpen] = useState(false);

  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SignupSchema>) => {
    setLoading(true);
    setError("");
    setSuccess("");

    signup(values).then((data) => {
      setLoading(false);
      setError(data.error);
      setSuccess(data.success);
    });
  };

  const handlePasswordType = () => {
    setEyeOpen(!eyeOpen);
  };

  return (
    <Form {...form}>
      <form
        className="dis-flex-col justify-center h-screen rounded-xl max-md:w-60 w-80 gap-y-2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col justify-center items-center mb-4">
        <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={36} height={36} />
            <h3 className="tracking-tight !text-4xl">C Tech Learn</h3>
          </div>
          <p className="text-center mt-5 text-sm text-zinc-400">
            Create your account to start learning
          </p>
        </div>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zinc-300">
                {auth_data.username_label}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter username"
                  type="text"
                  {...field}
                  className="border-indigo-900/50 bg-indigo-950/30 text-white placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zinc-300">
                {auth_data.email_label}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter email"
                  type="email"
                  {...field}
                  className="border-indigo-900/50 bg-indigo-950/30 text-white placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zinc-300">
                {auth_data.password_label}
              </FormLabel>
              <div className="flex relative items-center">
                <FormControl>
                  <Input
                    placeholder="Enter password"
                    type="password"
                    className="border-indigo-900/50 bg-indigo-950/30 text-white placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-indigo-500"
                    {...field}
                  />
                </FormControl>
                {eyeOpen ? (
                  <EyeOffIcon
                    className="absolute right-2 size-4 text-zinc-500 cursor-pointer hover:text-zinc-300"
                    onClick={handlePasswordType}
                  />
                ) : (
                  <EyeIcon
                    className="absolute right-2 size-4 text-zinc-500 cursor-pointer hover:text-zinc-300"
                    onClick={handlePasswordType}
                  />
                )}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {error && <FormError message={error} />}
        {success && <FormSuccess message={success} />}

        <Button
          className="group my-4 relative w-full overflow-hidden rounded-lg bg-indigo-600 px-4 py-2 text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:shadow-indigo-900/30"
          type="submit"
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? (
            <Spinner />
          ) : (
            <span className="relative z-10 flex items-center justify-center">
              {nav_data.signup}{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          )}

          <span className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
        </Button>

        <AuthSeperator />

        <AuthSocial />

        <p className="mt-4 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="cursor-pointer text-indigo-400 hover:text-indigo-300">
            Sign in
          </Link>
        </p>
      </form>
    </Form>
  );
};
