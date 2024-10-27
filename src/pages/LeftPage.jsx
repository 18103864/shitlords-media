const LeftPage = () => (
    <div className="flex flex-col items-center h-full p-4 justify-center">
        <h1 className="text-3xl font-bold mb-6">WEBSITES WE MADE</h1>
        <ul className="space-y-4 w-full max-w-md">
            <li>
                <button className="btn btn-outline border-customGreen text-customGreen hover:bg-customGreen hover:text-customBlue w-full">Website 1</button>
            </li>
            <li>
                <button className="btn btn-outline border-customGreen text-customGreen hover:bg-customGreen hover:text-customBlue w-full">Website 2</button>
            </li>
            <li>
                <button className="btn btn-outline border-customGreen text-customGreen hover:bg-customGreen hover:text-customBlue w-full">Website 3</button>
            </li>
            <li>
                <button className="btn btn-outline border-customGreen text-customGreen hover:bg-customGreen hover:text-customBlue w-full">Website 4</button>
            </li>
        </ul>
    </div>
);

export default LeftPage;
