import LottieHandler from "@/components/shared/LottieHandler";
import Link from "next/link";


const NotFound = () => {

    return (
        <div className="container">
            <div
                className="flex flex-col items-center"
                style={{ marginTop: "15%" }}
            >
                <LottieHandler type="notFound" />
                <Link href="/" replace={true} className="underline">
                    How about going back to safety?
                </Link>
            </div>
        </div>
    );
};

export default NotFound;