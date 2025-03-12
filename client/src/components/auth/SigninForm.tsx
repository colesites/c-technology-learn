"use client";

import React, { useState } from "react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { SigninSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/ui/spinner";
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
import { signin } from "../../../actions/signin";
import { useRouter } from "next/navigation";

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

  const router = useRouter();

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

    await signin(values);
    // try {

    //   if (data.error) {
    //     setError(data.error);
    //   } else {
    //     setSuccess("Login successful!");
    //     setTimeout(() => {
    //       router.push("/dashboard");
    //     }, 200);
    //   }
    // } catch (error) {
    //   setError("Something went wrong! Please try again.");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <Form {...form}>
      <div className="p-20 md:p-0">
        <form
          className="dis-flex-col justify-center h-screen rounded-xl w-60 gap-y-2"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <h2 className="text-center md:!text-2xl mb-4">Welcome back</h2>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{auth_data.email_label}</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email" type="email" {...field} />
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
                <FormLabel>{auth_data.password_label}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {error && <FormError message={error} />}
          {success && <FormSuccess message={success} />}

          <Button
            className="my-4"
            type="submit"
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? <Spinner /> : nav_data.signin}
          </Button>

          <AuthSeperator />

          <AuthSocial />

          <p className="mt-4">
            Don't have an account?{" "}
            <Link href="/auth/sign-up" className="underline cursor-pointer">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};
