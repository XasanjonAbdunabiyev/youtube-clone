import Home from "@/pages/Home";
import Shorts from "@/pages/Shorts";
import Subscriptions from "@/pages/Subscriptions";
import VidoeDetails from "@/pages/Videos";
import Dashboard from "@/pages/Dashboard";
import { Login } from "@/pages/Auth/Login";


export const routes = [
    {
        path: "/",
        element: Home,
    },
    {
        path: "/login", 
        element: Login
    },
    {
        path: "/watch/:id",
        element: VidoeDetails
    },
    {
        path: "/shorts",
        element: Shorts,
    },
    {
        path: "/subscriptions",
        element: Subscriptions
    },
    {
        path: "/dashboard",
        element: Dashboard, 
        private: true
    }
]