import { ReactNode, createContext, useState } from "react";

type UserProps = {
    name: string;
    email: string;
}

type UserContextType = {
    user: {
        name: string;
        email: string;
    },
    changeUser: (user: UserProps) => void;
}

const UserContext = createContext<UserContextType | null>(null)


export function UserContextProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<UserProps>({ name: "", email: "" });

    const changeUser = (user: UserProps) => {
        setUser(user);
    }

    return (
        <UserContext.Provider value={{ user, changeUser }}>
            {children}
        </UserContext.Provider>
    )
}