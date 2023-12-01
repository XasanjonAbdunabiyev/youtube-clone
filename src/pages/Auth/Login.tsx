import { GoogleButton } from "@/components/GoogleButton/GoogleButton";

import logo from '@/assets/logo.png';
import { LoginForm } from "@/components/LoginForm/LoginForm";
import loginImage from "@/assets/login-bg.jpg";

export function Login() {
    return (
        <section className="login h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${loginImage})` }}>
            <div className="flex h-screen w-full items-center justify-center flex-col">
                <div className="max-w-xl w-full backdrop-blur-sm bg-gray-400/60 p-4 rounded-md">
                    <img src={logo} width={200} alt="logo" />
                    <LoginForm />
                    <hr />
                    <br />
                    <GoogleButton />
                </div>
            </div>
        </section>
    )
}