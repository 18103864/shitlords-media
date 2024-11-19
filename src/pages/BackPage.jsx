import { FaTelegramPlane } from "react-icons/fa";


const BackPage = () => (
    <div className="flex flex-col items-center justify-center h-full gap-4">
        <h1 className="text-3xl font-bold mb-4">CONTACT US</h1>
        <div className="flex w-3/6">
            <a href="https://t.me/shitlordsmedia" target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="buttoncolors btn btn-outline text-customGreen btn-block hover:bg-customGreen hover:text-customBlue lg:btn-lg md:btn-md sm:btn-sm">
                    <FaTelegramPlane className="text-2xl" />
                </button>
            </a>
        </div>
    </div>
);

export default BackPage;
