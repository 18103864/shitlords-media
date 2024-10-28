const LeftPage = () => (
    <div className="flex flex-col items-center h-full p-4 justify-center">
        <h1 className="text-3xl font-bold mb-6">WEBSITES WE MADE</h1>
        <ul className="space-y-4 w-full max-w-md">
            <li>
                <a href="https://solcock.xyz" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline border-customGreen text-customGreen hover:bg-customGreen hover:text-customBlue w-full">
                        Cock
                    </button>
                </a>
            </li>
            <li>
                <a href="https://cigbuttcoin.com" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline border-customGreen text-customGreen hover:bg-customGreen hover:text-customBlue w-full">
                        Cigarette Butt
                    </button>
                </a>
            </li>
            <li>
                <a href="https://renaldu.xyz" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline border-customGreen text-customGreen hover:bg-customGreen hover:text-customBlue w-full">
                        Renaldu
                    </button>
                </a>
            </li>
            <li>
                <a href="https://dbilly.fun" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline border-customGreen text-customGreen hover:bg-customGreen hover:text-customBlue w-full">
                        Dark Billy
                    </button>
                </a>
            </li>
        </ul>
    </div>
);

export default LeftPage;
