import { GoogleButton } from "@/components/Form/GoogleButton/GoogleButton";

import logo from '@/assets/logo.png';
import { LoginForm } from "@/components/Form/LoginForm/LoginForm";
import loginImage from "@/assets/login-bg.jpg";
import { Img } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();
    return (
        <section className="login h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${loginImage})` }}>
            <div className="flex h-screen w-full items-center justify-center flex-col">
                <div className="max-w-xl w-full backdrop-blur-sm bg-gray-400/60 p-4 rounded-md">
                <Img onClick={() => navigate("/")} src={logo} width={200} alt="logo" />
                    <LoginForm />
                    <hr />
                    <br />
                    <GoogleButton />
                </div>
            </div>
        </section>
    )
}