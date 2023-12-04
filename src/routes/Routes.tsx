import { Dashboard, Login, Shorts, Subscriptions, VidoeDetails, Home } from "@/pages"

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