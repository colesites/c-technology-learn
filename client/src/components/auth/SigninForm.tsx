"use client";

import React, { useState } from "react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { SigninSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import Spinner from "@/components/ui/spinner";
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
import { signin } from "@/actions/signin";
import { ArrowRight, EyeIcon, EyeOffIcon } from "lucide-react";
import Image from "next/image";
import { Spinner } from "@heroui/spinner";

interface AuthData {
  email_label: string;
  password_label: string;
}

interface NavData {
  signup: string;
  signin: string;
}

export const SigninForm = ({
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

  const form = useForm<z.infer<typeof SigninSchema>>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SigninSchema>) => {
    setLoading(true);
    setError("");
    setSuccess("");

    const data = await signin(values);

    if (data?.error) {
      setError(data.error);
      setLoading(false);
    } else if (data?.success) {
      setSuccess(data.success);
      setLoading(false);
    }
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
            Sign in to access your learning dashboard
          </p>
        </div>
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
                  placeholder="you@example.com"
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
              <div className="flex items-center justify-between">
                <FormLabel className="text-zinc-300">
                  {auth_data.password_label}
                </FormLabel>
                <Link
                  href="forgot-password"
                  className="text-xs text-indigo-400 hover:text-indigo-300"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="flex relative items-center">
                <FormControl>
                  <Input
                    placeholder="••••••••"
                    type={eyeOpen ? "string" : "password"}
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
            <Spinner classNames={{label: "text-foreground mt-4"}} label="gradient" variant="gradient" />
          ) : (
            <span className="relative z-10 flex items-center justify-center">
              {nav_data.signin}{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          )}

          <span className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
        </Button>

        <AuthSeperator />

        <AuthSocial />

        <p className="mt-4 text-center text-sm text-zinc-500">
          Don't have an account?{" "}
          <Link
            href="/auth/sign-up"
            className="cursor-pointer text-indigo-400 hover:text-indigo-300"
          >
            Sign up
          </Link>
        </p>
      </form>
    </Form>
  );
};
