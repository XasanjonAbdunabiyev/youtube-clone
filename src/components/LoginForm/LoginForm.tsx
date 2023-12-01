import { useRef } from "react"
import { Button } from "../Button"
import TextField from "../CustomInput"

export function LoginForm() {
    const username = useRef<HTMLInputElement>(null);
    return (
        <form autoComplete="off">
            <TextField  label="User name" />
            <TextField label="Password" />
            <Button className="bg-gray-200 text-secondary-dark w-full my-3">Login</Button>
        </form>
    )
}