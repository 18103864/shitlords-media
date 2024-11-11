const RightPage = () => (
    <div className="overflow-x-auto p-4 sm:p-6 md:p-8 flex flex-col h-full items-center justify-center gap-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">PRICING</h1>

        {/* Table wrapper */}
        <div className="overflow-x-auto w-full">
            <table className="table-auto w-full text-left">
                {/* Table Header */}
                <thead>
                    <tr className="bg-customGreen">
                        <th className="p-2 text-customBlue text-sm sm:text-base md:text-lg">Service</th>
                        <th className="p-2 text-customBlue text-sm sm:text-base md:text-lg">Price</th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                    {/* Row 1 */}
                    <tr className="border-b hover:bg-customGreen hover:text-customBlue">
                        <td className="p-2 text-sm sm:text-base md:text-lg">DEX BANNERS</td>
                        <td className="p-2 text-sm sm:text-base md:text-lg">0.25 SOL</td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="border-b hover:bg-customGreen hover:text-customBlue">
                        <td className="p-2 text-sm sm:text-base md:text-lg">X BANNERS</td>
                        <td className="p-2 text-sm sm:text-base md:text-lg">0.25 SOL</td>
                    </tr>

                    {/* Row 3 */}
                    <tr className="border-b hover:bg-customGreen hover:text-customBlue">
                        <td className="p-2 text-sm sm:text-base md:text-lg">10 MEMES (IMAGES)</td>
                        <td className="p-2 text-sm sm:text-base md:text-lg">0.5 SOL</td>
                    </tr>

                    {/* Row 4 */}
                    <tr className="border-b hover:bg-customGreen hover:text-customBlue">
                        <td className="p-2 text-sm sm:text-base md:text-lg">10 MEMES (HAND-DRAWN)</td>
                        <td className="p-2 text-sm sm:text-base md:text-lg">1.5 SOL</td>
                    </tr>

                    {/* Row 5 */}
                    <tr className="border-b hover:bg-customGreen hover:text-customBlue">
                        <td className="p-2 text-sm sm:text-base md:text-lg">WEBSITE</td>
                        <td className="p-2 text-sm sm:text-base md:text-lg">1.5 SOL</td>
                    </tr>

                    {/* Row 6 */}
                    <tr className="border-b hover:bg-customGreen hover:text-customBlue">
                        <td className="p-2 text-sm sm:text-base md:text-lg">WEBSITE WITH MEME-GEN/PFP MAKER</td>
                        <td className="p-2 text-sm sm:text-base md:text-lg">4 SOL</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export default RightPage;
