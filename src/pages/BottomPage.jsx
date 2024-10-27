const BottomPage = () => (
    <div className="h-full flex flex-col items-center justify-center p-4 gap-8">
        <h1 className="text-2xl font-bold mb-4">MEMES WE MADE</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
            <img src="/src/assets/logo.png" alt="Meme 1" className="border-2 border-customGreen rounded-lg object-cover" />
            <img src="/src/assets/logo.png" alt="Meme 2" className="border-2 border-customGreen rounded-lg object-cover" />
            <img src="/src/assets/logo.png" alt="Meme 3" className="border-2 border-customGreen rounded-lg object-cover" />
            <img src="/src/assets/logo.png" alt="Meme 4" className="border-2 border-customGreen rounded-lg object-cover"/>
            <img src="/src/assets/logo.png" alt="Meme 5" className="border-2 border-customGreen rounded-lg object-cover" />
            <img src="/src/assets/logo.png" alt="Meme 6" className="border-2 border-customGreen rounded-lg object-cover" />
            <img src="/src/assets/logo.png" alt="Meme 7" className="border-2 border-customGreen rounded-lg object-cover" />
            <img src="/src/assets/logo.png" alt="Meme 8" className="border-2 border-customGreen rounded-lg object-cover" />

        </div>
    </div>
);

export default BottomPage;
