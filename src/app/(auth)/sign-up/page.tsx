"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signUpSchema } from "@/schemas/signupSchema";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form"; // ✅ only useForm from here
import { Form } from "@/components/ui/form"; // ✅ Form from ShadCN
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ApiReturnObject } from "@/types/api.type";
import { Loader } from "lucide-react";
import Link from "next/link";

const Page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
    console.log(data);

    try {
      setIsSubmitting(true);

      const response = await axios.post<ApiReturnObject>(
        `/api/auth/sign-up`,
        data,
      );

      toast.success(response.data.message);
      router.replace(`/verify`);

      if (!response.data.success) {
        toast.error(response.data.error);
      }
    } catch (error) {
      console.log(error);
      const axiosError = error as AxiosError<ApiReturnObject>;
      const errorMessage = axiosError.response?.data.message;
      toast.error(errorMessage || 'Failed To Signup');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background text-foreground flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="handwritten mb-2 text-4xl font-bold">Paper Notes</h1>
          <p className="handwritten text-lg text-gray-600">
            {"Start your digital notebook"}
          </p>
        </div>

        {/* Signup Form */}
        <div className="bg-card text-foreground note-shadow rounded-lg border-2 border-accent p-8">
          <h2 className="handwritten mb-6 text-center text-2xl font-bold">
            Create Account
          </h2>

          <div className="space-y-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="UserName"
                          {...field}
                          // onChange={(e) => {
                          //   field.onChange(e);
                          //   debaounced(e.target.value);
                          // }}
                        />
                      </FormControl>
                      {/* {isCheckingUsername && <Loader2 className="animate-spin "/>}
                      <p className={`text-sm ${usernameMessage === "username is unique" ? "text-green-500" : "text-red-500"}`}>
                          {usernameMessage}
                      </p> */}
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
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
                      <FormLabel>password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="password"
                          type="password"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="btn-paper w-full text-black hover:bg-black hover:text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="mr-2 h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </form>
            </Form>

            <div className="mt-6 text-center">
              <p className="handwritten text-gray-600">
                Already have an account?{" "}
                <Link href="/sign-in" className="underline hover:no-underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
