import FAQ from "@/components/faq";
import KeyGenerator from "@/components/key-generator";
import NavBtn from "@/components/NavBtn";
import TechCarousel from "@/components/tech-carousel";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircleEllipsis, ClipboardList, MoveUpRightIcon, TerminalSquareIcon, WandSparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { Cookie, Kalam } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vsDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { atomOneDark, atomOneDarkReasonable, gruvboxDark, nord, pojoaque, shadesOfPurple, tomorrow, vs, vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { atomDark, coldarkDark, duotoneDark, materialDark, oneDark, oneLight, solarizedDarkAtom, synthwave84, vscDarkPlus, xonokai, zTouch } from "react-syntax-highlighter/dist/esm/styles/prism";

const customStyle = {
  padding: '2em',
  borderRadius: '14px',
  backgroundColor: '#121212', // For dark mode background
  fontFamily: 'Monaco, monospace', // Optional: specify a monospaced font
};


const kalam = Kalam({ // Specify the subsets you need
  weight: "300", // Specify the weight (Cookie only supports 400)
});

export default function Home() {

  const scrolltoHash = function () {
    console.log("hey")
    // const element = document.getElementById("steps")
    // element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }

  return (
    <>
    <div className="flex min-h-full flex-col items-center justify-start text-center px-2 sm:py-8 lg:py-14">
      <h1 className="text-2xl font-bold mb-4 sm:text-6xl">
      Submit the Contact Form of your Website
      </h1>
      <p className="mb-8 sm:text-lg max-w-[800px] text-muted-foreground">
      Receive your HTML form submissions directly in your email inbox using our simple API key service. No server or backend code needed. It's fast and free!
      </p>
      <div className="flex flex-row items-center gap-5">
        <NavBtn
          className="px-6"
          link="steps"
        >
          Create your access key
        </NavBtn>
      </div>
      <span className="flex flex-row items-start sm:gap-2 gap-0.5 text-muted-foreground text-md mt-4 max-[800px]:mb-12 font-code sm:text-base text-sm font-medium">
        {"No Signup Required*"}
      </span>
    </div>
    <div className="m-auto px-4 w-[750px] max-w-full showCaseTheCode relative">
    <SyntaxHighlighter language={'html'} style={vscDarkPlus} customStyle={customStyle}>
      {codeString}
    </SyntaxHighlighter>
    </div>

    <div className="tech-support my-16 py-8 text-center">
      <div>
        <h1 className="text-lg font-normal">Works with every technology</h1>
        <TechCarousel/>
      </div>
    </div>

    <div className="integration-steps py-20 flex flex-col items-center" id="steps">
      <div className="text-center">
      <h1 className="text-5xl mb-4 font-extrabold text-center">Integrate in Just 2 Steps</h1>
      <p>Easy as cake. Just follow the steps and you're done</p>

      </div>
      
      <div className="flex flex-col gap-8 items-center pt-20">
      <h1 className="text-2xl font-bold">Step 1 - Generating an access key</h1>
       <KeyGenerator/>
      </div>

      <div className="flex flex-col gap-8 items-center pt-20" id="docs">
        <div className="text-center">
      <h1 className="text-2xl font-bold mb-2">Step 2 - Create Contact Form</h1>
      <p>Create your contact form code using your favourite language.
      </p>
      <p>Copy code below or get more examples in the docs.</p>
        </div>
      <Tabs defaultValue="HTML" className="m-auto px-4 w-[900px] max-w-full">
        <TabsList className="flex w-full justify-between pe-3">
          <div className="grid w-full grid-cols-8">
          <TabsTrigger value="HTML" className="flex gap-1"><Image src={`/assets/html5.webp`} width={15} height={15} alt="HTML5" unoptimized/> HTML</TabsTrigger>
          <TabsTrigger value="JavaScript" className="flex gap-1"><Image src={`/assets/js.png`} width={15} height={15} alt="JavaScript" unoptimized/> JS</TabsTrigger>
          <TabsTrigger value="ReactJS" className="flex gap-1"><Image src={`/assets/React.webp`} width={20} height={20} alt="ReactJS" unoptimized/> React</TabsTrigger>
          <TabsTrigger value="NextJS" className="flex gap-1"><Image src={`/assets/nextN.webp`} width={20} height={20} alt="NextJS" unoptimized/> NextJS</TabsTrigger>        
          <TabsTrigger value="VueJS" className="flex gap-1"><Image src={`/assets/vue.png`} width={20} height={20} alt="VueJS" unoptimized/> Vue</TabsTrigger>        
          </div>
          <Button variant={"ghost"}><CircleEllipsis size={20} /> More</Button>
          <ClipboardList className="col-span-5 cursor-pointer hover:text-black hover:dark:text-white" size={20}/>
        </TabsList>
      <TabsContent value="HTML">
        <div className="showCaseTheCode">
          <SyntaxHighlighter language={'html'} style={vscDarkPlus} customStyle={customStyle}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </TabsContent>
      <TabsContent value="JavaScript">
        <div className="showCaseTheCode">
          <SyntaxHighlighter language={'html'} style={vscDarkPlus} customStyle={customStyle}>
            {JS_CodeString}
          </SyntaxHighlighter>
        </div>
      </TabsContent>
      <TabsContent value="ReactJS">
        <div className="showCaseTheCode">
          <SyntaxHighlighter language={'jsx'} style={vscDarkPlus} customStyle={customStyle}>
            {ReactCode}
          </SyntaxHighlighter>
        </div>
      </TabsContent>
      <TabsContent value="NextJS">
        <div className="showCaseTheCode">
          <SyntaxHighlighter language={'jsx'} style={vscDarkPlus} customStyle={customStyle}>
            {NextCode}
          </SyntaxHighlighter>
        </div>
      </TabsContent>
      <TabsContent value="VueJS">
        <div className="showCaseTheCode">
          <SyntaxHighlighter language={'js'} style={vscDarkPlus} customStyle={customStyle}>
            {VueCode}
          </SyntaxHighlighter>
        </div>
      </TabsContent>
    </Tabs>
      </div>
      
    </div>
    {/* <script src="/scroll.js"></script> */}

    <FAQ/>
    
    </>
    
  );
}

const codeString = `<form action="${process.env.SUBMIT_API_URL}" method="POST">

    <!-- Replace with your Access Key -->
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">

    <!-- Form Inputs. Each input must have a name="" attribute -->
    <input type="text" name="name" placeholder="name" required>
    <input type="email" name="email" placeholder="email" required>
    <input type="tel" name="phone" min="10" max="10" placeholder="phone" required>
    <textarea name="message" required></textarea>

    <!-- Custom Confirmation / Success Page -->
    <!-- <input type="hidden" name="redirect" value="https://yourwebsite.com/thanks.html"> -->

    <button type="submit">Submit Form</button>

</form>`;

const JS_CodeString = `<form method="POST" id="form">

  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">

  <input type="text" name="name" placeholder="name" required>
  <input type="email" name="email" placeholder="email" required>
  <input type="tel" name="phone" min="10" max="10" placeholder="phone" required>
  <textarea name="message" required></textarea>
  <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

  <button type="submit">Submit Form</button>

  <div id="result"></div>

</form>

<script>
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Form Submitting..."

    fetch('${process.env.SUBMIT_API_URL}', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});
</script>`

const ReactCode = `import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY");

    const resp = await fetch("${process.env.SUBMIT_API_URL}", {
      method: "POST",
      body: formData
    });

    const data = await resp.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="name" required />
        <input type="email" name="email" placeholder="email" required />
        <input type="tel" name="phone" min="10" max="10" placeholder="phone" required />
        <textarea name="message" required></textarea>

        <button type="submit">Submit Form</button>

      </form>
      <span>{result}</span>

    </div>
  );
}`

const NextCode = `export function ContactForm() {
    async function handleSubmit(e) {
        e.preventDefault();
        const data = JSON.stringify({
                access_key: "YOUR_ACCESS_KEY",
                name: e.target.name.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                message: e.target.message.value,
            })
        const resp = await fetch("${process.env.SUBMIT_API_URL}", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: data,
        });
        const result = await resp.json();
        if (result.success) {
          // Redirect to thanks page or show success dialog box
        }
        else
        {
          // Show failed submission
        }
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
          <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Enter name" required />
          </div>
          <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="example@example.com" required />
          </div>
          <div>
              <label htmlFor="phone">Phone</label>
              <input type="tel" name="phone" placeholder="Phone Number" required />
          </div>
          <div>
              <label htmlFor="message">Message</label>
              <textarea name="message" rows="4" placeholder="Enter Message" required></textarea>
          </div>
          <button type="submit">Submit Form</button>
      </form>
    </>
  );
}`

const VueCode = `<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="name">Name</label>
      <input v-model="form.name" type="text" name="name" placeholder="Enter name" required />
    </div>
    <div>
      <label for="email">Email</label>
      <input v-model="form.email" type="email" name="email" placeholder="example@example.com" required />
    </div>
    <div>
      <label for="phone">Phone</label>
      <input v-model="form.phone" type="tel" name="phone" placeholder="Phone Number" required />
    </div>
    <div>
      <label for="message">Message</label>
      <textarea v-model="form.message" name="message" rows="4" placeholder="Enter Message" required></textarea>
    </div>
    <button type="submit">Submit Form</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
    };
  },
  methods: {
    async handleSubmit() {
      const data = JSON.stringify({
        access_key: "YOUR_ACCESS_KEY",
        name: this.form.name,
        email: this.form.email,
        phone: this.form.phone,
        message: this.form.message,
      });

      try {
        const response = await fetch("${process.env.SUBMIT_API_URL}", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: data,
        });

        const result = await response.json();
        if (result.success) {
          // Redirect to thanks page or show success dialog box
          alert("Form submitted successfully!");
        } else {
          // Show failed submission
          alert("Failed to submit the form. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred. Please try again.");
      }
    },
  },
};
</script>`