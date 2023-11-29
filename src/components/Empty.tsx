import notResult from "../data/animation-lottie/not-found.json";

import Lottie from 'lottie-react';

export function Empty() {
    return (
        <div className="empty flex flex-col items-center h-screen">
        <Lottie
            animationData={notResult}
            style={{ width: "250px", height: "300px", objectFit: "cover" }}
        />
        <h1 className="font-bold text-2xl capitalize">Sorry, there are no videos in this category yet ! 🤫</h1>
    </div>
    )
}