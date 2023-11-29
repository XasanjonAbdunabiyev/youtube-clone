import {useRef} from "react"


export function LoginForm () {
    const userName = useRef(null);
    const password = useRef(null);
    return (
        <>
            <form>
                <input type="text" placeholder="Enter Your Name" />
            </form>
        </>
    )
}