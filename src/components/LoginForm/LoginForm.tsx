import React, { useRef } from "react"
import { Button } from "../Button";


export function LoginForm() {
    const userName = useRef(null);
    const password = useRef(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(userName);
        console.log(password);
    }

    return (
        <>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="text" placeholder="Enter Your Name" />
                <input type="password" />
                <Button type="submit">
                    submit
                </Button>
            </form>
        </>
    )
}