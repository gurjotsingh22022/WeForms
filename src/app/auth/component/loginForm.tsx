'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { GalleryVerticalEnd } from 'lucide-react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface props {
    providers: any
}

const LoginForm = ({providers}: props) => {
  return (
    <>
    {/* <div className="flex flex-col items-center justify-center min-h-screen min-w-full p-12 bg-slate-100 dark:bg-background">
      <div className="px-14 py-16 rounded-lg shadow bg-white dark:bg-[#151515]">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <h1 className="text-sm">to access Webners Home</h1>
        <div className="grid grid-cols-2 gap-4 justify-center items-center my-6">
{Object.values(providers).map((provider: any) =>
          provider.name === "Credentials" ? (
            <div className='col-span-2' key={'credentials'}>
            <form className='col-span-2' 
            // onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-4">
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder='Email address'
                  className="w-full"
                />
              </div>
              <div className="mb-4">
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder='Password'
                  className="w-full"
                />
              </div>
              <Button
                type="submit"
                onClick={() =>
                  signIn("credentials", { email: "test@example.com", password: "password" })
                }
                className="w-full px-4 py-2"
              >
                Sign In
              </Button>
            </form>
            <Separator className='w-full mt-8'/>
            <div className="mt-6 mb-[-8]">
              <h1 className='text-base font-medium'>Sign in using</h1>
            </div>
            </div>
          ) : (
            <button
              key={provider.id}
              onClick={() => signIn(provider.id, {callbackUrl: '/dashboard'})}
              className={`w-full text-sm flex gap-2 capitalize items-center px-4 py-3 ${provider.id==="google"?'text-black':'text-white'} ${provider.id==="google"?'bg-slate-100':provider.id==='github'?'bg-gray-950':provider.id==='linkedin'?'bg-[#007fbc]':provider.id==='twitter'?'bg-black':''} rounded`}
            >
              <Image src={`/assets/${provider.id}.png`} alt='Google' width={20} height={20}/> Sign in with {provider.id}
            </button>
          )
        )}

        </div>
        <div className='text-sm'>
          Don't have a Webners account? <Link className='text-blue-600 font-semibold' href={`/auth/signup`}>Sign up Now</Link>
        </div>
        
      </div>
    </div> */}

      <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <div className={cn("flex flex-col gap-6")}>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Welcome back</CardTitle>
                <CardDescription>
                  Login with your Apple or Google account
                </CardDescription>
              </CardHeader>
              <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-6">
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="m@example.com"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center">
                          <Label htmlFor="password">Password</Label>
                          <a
                            href="#"
                            className="ml-auto text-sm underline-offset-4 hover:underline"
                          >
                            Forgot your password?
                          </a>
                        </div>
                        <Input id="password" type="password" required />
                      </div>
                      <Button type="submit" className="w-full">
                        Login
                      </Button>
                    </div>
                    <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                      <span className="relative z-10 bg-background px-2 text-muted-foreground">
                        Or continue with
                      </span>
                    </div>
                    <div className="flex gap-4">
                      {Object.values(providers).map((provider: any) =>
                        provider.name != "Credentials" ? (
                          <Button key={provider.id} variant="outline" className="w-full capitalize" onClick={() => signIn(provider.id, {callbackUrl: '/dashboard'})}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {
                              provider.id==="google"?
                              <path
                            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                            fill="currentColor"
                          />
                              :
                              provider.id==="github"?
                              <path
                              d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.297 3.438 9.797 8.207 11.387.6.11.793-.258.793-.577v-2.067c-3.338.726-4.037-1.61-4.037-1.61-.546-1.39-1.334-1.76-1.334-1.76-1.087-.744.082-.729.082-.729 1.204.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.303 3.493.997.107-.776.418-1.303.762-1.603-2.665-.304-5.466-1.333-5.466-5.93 0-1.31.469-2.384 1.236-3.225-.124-.303-.536-1.524.117-3.176 0 0 1.007-.322 3.3 1.231a11.41 11.41 0 0 1 3.006-.404c1.02 0 2.044.137 3.005.404 2.292-1.554 3.3-1.231 3.3-1.231.654 1.652.242 2.873.118 3.176.77.841 1.235 1.915 1.235 3.225 0 4.61-2.807 5.622-5.475 5.92.43.371.823 1.103.823 2.224v3.293c0 .323.193.692.8.574C20.566 22.092 24 17.59 24 12.297 24 5.67 18.627.297 12 .297z"
                              fill="currentColor"
                            />
                              
                          :
                          provider.id==='linkedin'?
                          <path
                            d="M4.98 3.5C4.98 2.12 3.87 1 2.49 1S0 2.12 0 3.5 1.12 6 2.5 6 4.98 4.88 4.98 3.5zM.47 8.13h4.07v14.74H.47V8.13zM8.11 8.13h3.91v2.01h.06c.54-.97 1.87-1.99 3.85-1.99 4.11 0 4.87 2.71 4.87 6.24v8.48h-4.07v-7.52c0-1.79-.03-4.09-2.5-4.09-2.5 0-2.88 1.96-2.88 3.98v7.63H8.11V8.13z"
                            fill="currentColor"
                          />:
                          provider.id==='twitter'?
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" fill="currentColor"/>
                          :null
                            }
                              
                            </svg>
                          </Button>
                        ) : null
                      )}
                    </div>
                    <div className="text-center text-sm">
                      Don&apos;t have an account?{" "}
                      <a href="#" className="underline underline-offset-4">
                        Sign up
                      </a>
                    </div>
                  </div>
              </CardContent>
            </Card>
            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
              By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
              and <a href="#">Privacy Policy</a>.
            </div>
          </div>

        </div>
      </div>


    </>
  )
}


export default LoginForm;