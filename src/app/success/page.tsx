"use client"

import dynamic from "next/dynamic"

const LottieHandler = dynamic(() => import("@/components/shared/LottieHandler"), {
    ssr: false, // disables server-side rendering
})

const SuccessPage = () => {
    return (
        <div className="container m-auto">
            <LottieHandler type="success" />
        </div>
    )
}

export default SuccessPage
