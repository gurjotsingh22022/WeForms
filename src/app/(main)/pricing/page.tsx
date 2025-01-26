import FAQ from '@/components/faq'
import NavBtn from '@/components/NavBtn'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle } from 'lucide-react'
import React from 'react'

const BasicPlan = [
    {
        name: "Unlimited Forms"
    }
    ,
    {
        name: "300 Monthly Submissions"
    }
    ,
    {
        name: "Unlimited Domains"
    }
    ,
    {
        name: "reCaptcha Integration"
    }
    ,
    {
        name: "Custom Redirect"
    }
    ,
    {
        name: "Bot Detector"
    }
    ,
    {
        name: "All basic features"
    }
]

const StarterPlan = [
    {
        name: "All Features from Free Plan"
    }
    ,
    {
        name: "5,000 Monthly Submissions"
    }
    ,
    {
        name: "File Upload / Attachments"
    }
    ,
    {
        name: "Autoresponders"
    }
    ,
    {
        name: "Add Trusted Domains"
    }
    ,
    {
        name: "Add 2 email addresses"
    }
    ,
    {
        name: "Add CC Emails & more..."
    }
]

const ProPlan = [
    {
        name: "All Features from Pro Plan"
    }
    ,
    {
        name: "25,000 Monthly Submissions"
    }
    ,
    {
        name: "Add 10 email addresses"
    }
    ,
    {
        name: "Auto-Reply Templates"
    }
    ,
    {
        name: "20k/mo Marketing Emails"
    }
    ,
    {
        name: "Newsletter Subscription"
    }
    ,
    {
        name: "Premium Forms Templates"
    }
]

const Pricing = () => {
  return (

    <>
    <div className="pricing px-2 sm:py-8 lg:py-14">
        <div className="text-center">
        <h1 className='text-5xl font-bold mb-4'>Pricing</h1>
        <p>Start for free and scale as you grow.</p>

        <div className="flex items-center justify-center my-10">
        <Tabs defaultValue="Yearly" className='flex flex-col items-center gap-4'>
                <TabsList className="grid grid-cols-2 w-[400px]">
                    <TabsTrigger value="Monthly">Monthly Billing</TabsTrigger>
                    <TabsTrigger value="Yearly">Yearly Billing</TabsTrigger>
                </TabsList>
                <div className='mt-2'>
                    <TabsContent value="Monthly" className='flex gap-4 justify-center m-0'>
                    <Card className='w-[350px]'>
                        <CardHeader className='gap-12'>
                            <p>Free</p>
                            <CardTitle className='mt-16 text-4xl font-normal'>FREE</CardTitle>
                        </CardHeader>
                        <CardContent>
                        <Separator className="my-4" />
                            300 submissions / mo 
                        <Separator className="my-4" />
                        <div className='py-4'>
                            <ul className='text-start space-y-4 text-sm'>
                                {
                                    BasicPlan.map((data: any, i: number)=>
                                    <>
                                        <li className='flex items-center gap-3' key={i}><CheckCircle size={20}/> {data.name}</li>
                                    </>
                                    )
                                }
                            </ul>
                        </div>
                        </CardContent>
                        <CardFooter>
                            <NavBtn className='w-full' link='/'>Start for Free</NavBtn>
                        </CardFooter>
                    </Card>
                    <Card className='w-[350px]'>
                        <CardHeader className='gap-12'>
                            <p>Starter</p>
                            <CardTitle className='mt-16 text-4xl font-normal'>$5 / mo</CardTitle>
                        </CardHeader>
                        <CardContent>
                        <Separator className="my-4" />
                            5,000 submissions / mo 
                        <Separator className="my-4" />
                        <div className='py-4'>
                            <ul className='text-start space-y-4 text-sm'>
                                {
                                    StarterPlan.map((data: any, i: number)=>
                                    <>
                                        <li className='flex items-center gap-3' key={i}><CheckCircle size={20}/> {data.name}</li>
                                    </>
                                    )
                                }
                            </ul>
                        </div>
                        </CardContent>
                        <CardFooter>
                            <Button className='w-full'>Start Starter Plan</Button>
                        </CardFooter>
                    </Card>
                    <Card className='w-[350px]'>
                        <CardHeader className='gap-12'>
                            <p>Pro</p>
                            <CardTitle className='mt-16 text-4xl font-normal'>$15 / mo</CardTitle>
                        </CardHeader>
                        <CardContent>
                        <Separator className="my-4" />
                            25,000 submissions / mo 
                        <Separator className="my-4" />
                        <div className='py-4'>
                            <ul className='text-start space-y-4 text-sm'>
                                {
                                    ProPlan.map((data: any, i: number)=>
                                    <>
                                        <li className='flex items-center gap-3' key={i}><CheckCircle size={20}/> {data.name}</li>
                                    </>
                                    )
                                }
                            </ul>
                        </div>
                        </CardContent>
                        <CardFooter>
                            <Button className='w-full'>Start Pro Plan</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="Yearly" className='flex gap-4 justify-center m-0'>
                    <Card className='w-[350px]'>
                        <CardHeader className='gap-12'>
                            <p>Free</p>
                            <CardTitle className='mt-16 text-4xl font-normal'>FREE</CardTitle>
                        </CardHeader>
                        <CardContent>
                        <Separator className="my-4" />
                            300 submissions / mo 
                        <Separator className="my-4" />
                        <div className='py-4'>
                            <ul className='text-start space-y-4 text-sm'>
                                {
                                    BasicPlan.map((data: any, i: number)=>
                                    <>
                                        <li className='flex items-center gap-3' key={i}><CheckCircle size={20}/> {data.name}</li>
                                    </>
                                    )
                                }
                            </ul>
                        </div>
                        </CardContent>
                        <CardFooter>
                        <NavBtn className='w-full' href='/' link='steps'>Start for Free</NavBtn>
                        </CardFooter>
                    </Card>
                    <Card className='w-[350px]'>
                        <CardHeader className='gap-12'>
                            <p>Starter</p>
                            <CardTitle className='mt-16 text-4xl font-normal'>$4 / mo</CardTitle>
                        </CardHeader>
                        <CardContent>
                        <Separator className="my-4" />
                            5,000 submissions / mo 
                        <Separator className="my-4" />
                        <div className='py-4'>
                            <ul className='text-start space-y-4 text-sm'>
                                {
                                    StarterPlan.map((data: any, i: number)=>
                                    <>
                                        <li className='flex items-center gap-3' key={i}><CheckCircle size={20}/> {data.name}</li>
                                    </>
                                    )
                                }
                            </ul>
                        </div>
                        </CardContent>
                        <CardFooter>
                            <Button className='w-full'>Start Starter Plan</Button>
                        </CardFooter>
                    </Card>
                    <Card className='w-[350px]'>
                        <CardHeader className='gap-12'>
                            <p>Pro</p>
                            <CardTitle className='mt-16 text-4xl font-normal'>$12 / mo</CardTitle>
                        </CardHeader>
                        <CardContent>
                        <Separator className="my-4" />
                            25,000 submissions / mo 
                        <Separator className="my-4" />
                        <div className='py-4'>
                            <ul className='text-start space-y-4 text-sm'>
                                {
                                    ProPlan.map((data: any, i: number)=>
                                    <>
                                        <li className='flex items-center gap-3' key={i}><CheckCircle size={20}/> {data.name}</li>
                                    </>
                                    )
                                }
                            </ul>
                        </div>
                        </CardContent>
                        <CardFooter>
                            <Button className='w-full'>Start Pro Plan</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                </div>
                
            </Tabs>
        </div>
              

        </div>
    </div>

    <FAQ/>
    </>
    
  )
}

export default Pricing