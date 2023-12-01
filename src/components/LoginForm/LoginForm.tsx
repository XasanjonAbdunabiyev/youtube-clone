import { FormEvent, useState } from "react"
import { Button } from "../Button"
import TextField from "../CustomInput"

export function LoginForm() {
    const [user, setUser] = useState<{ username: string, password: string }>({ password: '', username: "" });

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(user);
    }

    return (
        <form autoComplete="off" onSubmit={(event) => handleSubmit(event)}>
            <TextField label="User name"  onChange={(e) => setUser({ ...user, username: e.target.value })} />
            <TextField label="Password"  onChange={(e) => setUser({ ...user, password: e.target.value })} />
            <Button className="bg-gray-200 text-secondary-dark w-full my-3" type="submit">Login</Button>
        </form>
    )
}