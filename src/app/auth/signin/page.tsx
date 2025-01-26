import { signIn, getProviders } from "next-auth/react";
import LoginForm from "../component/loginForm";

const SignIn =  async() => {
    const providers: any = await getProviders();
    console.log(providers)
  return (
    <LoginForm providers={providers}/>
  );
};


export default SignIn;