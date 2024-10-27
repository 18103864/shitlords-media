import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";

const BackPage = () => (
    <div className="flex flex-col items-center justify-center h-full gap-4">
        <h1 className="text-3xl font-bold mb-4">SOCIALS</h1>
        <div className="flex items-center gap-3">
            <button className="buttoncolors btn btn-outline text-customGreen btn-circle lg:btn-lg md:btn-md sm:btn-sm">
                <FaXTwitter className="text-2xl" />
            </button>
            <button className="buttoncolors btn btn-outline text-customGreen btn-circle lg:btn-lg md:btn-md sm:btn-sm">
                <FaDiscord className="text-2xl" />
            </button>
            <button className="buttoncolors btn btn-outline text-customGreen btn-circle lg:btn-lg md:btn-md sm:btn-sm">
                <FaTelegramPlane className="text-2xl" />
            </button>
        </div>
    </div>
);

export default BackPage;
