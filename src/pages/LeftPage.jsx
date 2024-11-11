const LeftPage = () => (
    <div className="flex flex-col items-center h-full p-4 sm:p-6 md:p-8 justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">WEBSITES WE MADE</h1>
        <ul className="space-y-4 w-full max-w-md">
            <li>
                <a href="https://solcock.xyz" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline border-customGreen text-customGreen hover:bg-customGreen hover:text-customBlue w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 btn-sm sm:btn-md md:btn-lg">
                        Cock
                    </button>
                </a>
            </li>
            <li>
                <a href="https://cigbuttcoin.com" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline border-customGreen text-customGreen hover:bg-customGreen hover:text-customBlue w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 btn-sm sm:btn-md md:btn-lg">
                        Cigarette Butt
                    </button>
                </a>
            </li>
            <li>
                <a href="https://renaldu.xyz" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline border-customGreen text-customGreen hover:bg-customGreen hover:text-customBlue w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 btn-sm sm:btn-md md:btn-lg">
                        Renaldu
                    </button>
                </a>
            </li>
            <li>
                <a href="https://dbilly.fun" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline border-customGreen text-customGreen hover:bg-customGreen hover:text-customBlue w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 btn-sm sm:btn-md md:btn-lg">
                        Dark Billy
                    </button>
                </a>
            </li>
        </ul>
    </div>
);

export default LeftPage;
