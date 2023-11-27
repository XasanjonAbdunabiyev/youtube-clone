import Home from "@/pages/Home";
import Shorts from "@/pages/Shorts";
import Subscriptions from "@/pages/Subscriptions";
import VidoeDetails from "@/pages/Videos";
import Dashboard from "@/pages/Dashboard";

export const routes = [
    {
        path: "/",
        element: Home,
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
        element: Dashboard
    }
]