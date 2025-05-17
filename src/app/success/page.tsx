"use client"

import dynamic from "next/dynamic"
import Link from "next/link"

const LottieHandler = dynamic(() => import("@/components/shared/LottieHandler"), {
    ssr: false, // disables server-side rendering
})

const SuccessPage = () => {
    return (
        <div className="container">
            <div
                className="flex flex-col items-center"
                style={{ marginTop: "10%" }}
            >
                <LottieHandler type="success" />
                <div>
                    <strong>Congratulation! </strong>
                    <Link href="/" replace={true} className="underline">
                        Back
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SuccessPage
