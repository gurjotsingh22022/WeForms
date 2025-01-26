'use client'

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { CircleX, WandSparkles } from 'lucide-react'
import { EMailSchema } from '@/lib/validators/KeyGenerationSchema'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import useFetch from '@/hooks/use-fetch'
import { CreateKey } from '../../actions/form/create-key'
import { toast } from 'sonner'
import { scrollToDiv } from './contexts/scrollTo'

interface MailDeclare {
    email: string
}

const KeyGenerator = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [err, setErr] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const {
        loading,
        error,
        data: project,
        fn: createGenKeyFn,
      } = useFetch(CreateKey);

    const form = useForm<z.infer<typeof EMailSchema>>({
        resolver: zodResolver(EMailSchema),
        defaultValues: {
            email: "",
        }
    })

    useEffect(() => {
        if (project){ 
            toast.success("Access Key Sent")
            form.reset();
            setIsLoading(false);
        }
      }, [loading]);

    const onSubmit=async(data:MailDeclare)=>
    {
        try{
            setIsLoading(true);
            createGenKeyFn(data.email);
        }catch(e: any)
        {
            setIsLoading(false)
        }

    }

    const handleSubmit=(values: any)=>
    {
        onSubmit(values);
    }

  return (
    <Card className="w-[500px] max-w-full p-4">
      <CardHeader>
        <CardTitle>Create Access Key</CardTitle>
        <CardDescription>Access key will be sent to your email address.</CardDescription>
      </CardHeader>
      <CardContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8 mt-4">
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input placeholder="example@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <div className="flex justify-between">
            {
                isLoading?
                <>
                <Button disabled className="w-full gen-btn">
                <div className="loader bg-white dark:text-white"></div>
                </Button>
                </>
                :
                <>
                <Button type='submit' className="w-full gen-btn">
                Generate Access Key <WandSparkles />
                </Button>
                
                </>
        }
            </div>
            </form>
            </Form>
      </CardContent>
    </Card> 
  )
}

export default KeyGenerator