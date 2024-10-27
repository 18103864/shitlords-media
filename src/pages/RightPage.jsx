const RightPage = () => (
    <div className="overflow-x-auto p-4 flex flex-col h-full items-center justify-center gap-6">
        <h1 className="text-3xl font-bold mb-4">PRICING</h1>
        <div className="overflow-x-auto">
            <table className="table w-full text-left">
                {/* head */}
                <thead>
                    <tr className="bg-customGreen">
                        <th className="p-2 text-customBlue">Service</th>
                        <th className="p-2 text-customBlue">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr className="border-b hover:bg-customGreen hover:text-customBlue">
                        <td className="p-2">DEX BANNERS</td>
                        <td className="p-2">0.25 SOL</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="border-b hover:bg-customGreen hover:text-customBlue">
                        <td className="p-2">X BANNERS</td>
                        <td className="p-2">0.25 SOL</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="border-b hover:bg-customGreen hover:text-customBlue">
                        <td className="p-2">10 MEMES (IMAGES)</td>
                        <td className="p-2">0.5 SOL</td>
                    </tr>
                    <tr className="border-b hover:bg-customGreen hover:text-customBlue">
                        <td className="p-2">10 MEMES (HAND-DRAWN)</td>
                        <td className="p-2">1.5 SOL</td>
                    </tr>
                    <tr className="border-b hover:bg-customGreen hover:text-customBlue">
                        <td className="p-2">WEBSITE</td>
                        <td className="p-2">1.5 SOL</td>
                    </tr>
                    <tr className="border-b hover:bg-customGreen hover:text-customBlue">
                        <td className="p-2">WEBSITE WITH MEME-GEN/PFP MAKER</td>
                        <td className="p-2">4 SOL</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export default RightPage;
