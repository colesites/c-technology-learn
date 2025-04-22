"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ForgotPasswordSchema } from "@/schemas";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Spinner from "../ui/spinner";
import { ArrowRight } from "lucide-react";

const ForgotPasswordForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <Form {...form}>
      <form className="dis-flex-col justify-center h-screen rounded-xl max-md:w-60 w-80 gap-y-2">
        <div className="flex flex-col justify-center items-center mb-4">
          <div className="flex items-center">
            <h3 className="tracking-tight !text-4xl">Forgot Password</h3>
          </div>

          <p className="text-center mt-5 text-sm text-zinc-400">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
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
              Send Reset Link
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          )}

          <span className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
        </Button>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
