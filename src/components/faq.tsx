import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
  return (
    <>
        <div className="py-16 px-2 m-auto w-[900px] max-w-full">
      <div className="text-center mb-12">
      <h1 className="text-5xl font-bold">FAQ</h1>
      <p>Frequently Asked Questions</p>
      </div>
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is WeForms really free?</AccordionTrigger>
        <AccordionContent>
        WeForms offers both free and paid plans. The free plan allows up to 300 submissions per month and includes basic features. For additional submissions and access to advanced features, you can upgrade to the paid plan.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What are the limits of the free plan?</AccordionTrigger>
        <AccordionContent>
        The free plan includes 300 submissions per month and basic features. If you require more submissions and advanced features, you can upgrade to the paid plan. Visit our pricing page for further details.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>My Access Key is publicly available. What are the possible solutions?</AccordionTrigger>
        <AccordionContent>
        No need to worry. The Access Key is safe to be public and can be used in client-side code. It functions as an alias for your email address. For added protection against spam and abuse, Pro plans offer the Trusted Domains feature.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
        Is my email and form submission data secure?</AccordionTrigger>
        <AccordionContent>
        Absolutely. We prioritize your privacy and security. We only store your email address to send form submissions and never retain your users' information or form data on our servers. While we maintain server logs, they are regularly deleted to ensure your data remains safe. Choose us for a secure, privacy-focused solution.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
        How WeForms is different from other solutions?</AccordionTrigger>
        <AccordionContent>
        WeForms is a privacy-friendly alternative that prioritizes your data security. Unlike others, we do not store user submissions, ensuring your privacy is protected. WeForms offers higher monthly submission limits than our competitors, along with custom redirection and free captcha in the free plan. With our affordable Pro plan, you can enjoy even higher submission limits and advanced customization options.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>
        Is WeForms Backed by Webners?</AccordionTrigger>
        <AccordionContent>
        Yes, WeForms is proudly backed by Webners, a trusted name in tech solutions. WeForms is a product by Webners. With a wide array of happy clients, WeForms stands as a reliable choice for anyone looking to streamline their form management needs.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
    </>
  )
}

export default FAQ