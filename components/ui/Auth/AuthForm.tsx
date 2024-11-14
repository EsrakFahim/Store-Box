"use client"
import React, { useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
      Form,
      FormControl,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import Image from 'next/image'

type formType = 'signin' | 'signup'

// Define schema based on the form type
const authFormSchema = (formType: formType) => {
      return z.object({
            email: z.string().email({ message: "Invalid email address" }),
            fullName: formType === "signup"
                  ? z.string().min(2, { message: "Full name must be at least 2 characters" }).max(50, { message: "Full name must be under 50 characters" })
                  : z.string().optional(),
      });
};

const AuthForm = ({ type }: { type: formType }) => {
      const [isLoading, setIsLoading] = useState(false)
      const [errorMessage, setErrorMessage] = useState('')

      const formSchema = authFormSchema(type);
      const form = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
                  email: "",
                  fullName: "",
            },
      });

      // Submit handler
      const onSubmit = async (values: z.infer<typeof formSchema>) => {
            try {
                  setIsLoading(true)
                  setErrorMessage('')

                  // Simulate an API call
                  console.log("Form Values:", values)

                  // Example: Add your authentication logic here
                  // await api.auth(values)

                  // Simulate successful form submission
                  setTimeout(() => {
                        setIsLoading(false)
                        alert(`${type === 'signin' ? 'Sign In' : 'Sign Up'} successful!`)
                  }, 2000)
            } catch (error) {
                  console.log("Error:", error)
                  setErrorMessage('Something went wrong. Please try again.')
            } finally {
                  setIsLoading(false)
            }
      }

      return (
            <>
                  <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="auth-form">
                              <h1 className='h1'>
                                    {type === "signin" ? "Sign In" : "Sign Up"}
                              </h1>
                              {type === "signup" && (
                                    <FormField
                                          control={form.control}
                                          name="fullName"
                                          render={({ field }) => (
                                                <FormItem>
                                                      <div className='shad-form-item'>
                                                            <FormLabel>Full Name</FormLabel>
                                                            <FormControl>
                                                                  <Input
                                                                        className='shad-input'
                                                                        placeholder="Enter your full name" {...field} />
                                                            </FormControl>
                                                            <FormMessage className='shad-form-message' />
                                                      </div>
                                                </FormItem>
                                          )}
                                    />
                              )}
                              <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                          <FormItem>
                                                <div className='shad-form-item'>
                                                      <FormLabel>Email</FormLabel>
                                                      <FormControl>
                                                            <Input
                                                                  className='shad-input'
                                                                  placeholder="Enter Your Email" {...field} />
                                                      </FormControl>
                                                      <FormMessage className='shad-form-message' />
                                                </div>
                                          </FormItem>
                                    )}
                              />
                              <Button
                                    type="submit"
                                    className='bg-brand hover:bg-brand-100 py-2 rounded-full text-white flex items-center justify-center'
                                    disabled={isLoading}
                              >
                                    {isLoading ? (
                                          <Image
                                                src='/assets/icons/loader.svg'
                                                alt='loading'
                                                width={24}
                                                height={24}
                                                className='animate-spin'
                                          />
                                    ) : (
                                          type === "signin" ? "Sign In" : "Sign Up"
                                    )}
                              </Button>
                              {errorMessage && (
                                    <div className='error-message mt-4 text-red-500'>
                                          {errorMessage}
                                    </div>
                              )}
                              <div className="mt-4">
                                    <Link href={type === 'signin' ? '/sign-up' : '/sign-in'}>
                                          {type === 'signin' ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                                    </Link>
                              </div>
                        </form>
                  </Form>
            </>
      )
}

export default AuthForm
