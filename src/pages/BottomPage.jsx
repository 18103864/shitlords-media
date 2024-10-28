const BottomPage = () => (
    <div className="h-full flex flex-col items-center justify-center p-4 gap-8">
        <h1 className="text-2xl font-bold mb-4">MEMES WE MADE</h1>
        <div className="grid grid-cols-3 gap-4 w-full">
            <img src="/src/assets/meme1.png" alt="Meme 1" className="border-2 border-customGreen rounded-lg object-cover" />
            <img src="/src/assets/meme2.png" alt="Meme 2" className="border-2 border-customGreen rounded-lg object-cover" />
            <img src="/src/assets/meme3.png" alt="Meme 3" className="border-2 border-customGreen rounded-lg object-cover" />
            <img src="/src/assets/meme4.png" alt="Meme 4" className="border-2 border-customGreen rounded-lg object-cover" />
            <img src="/src/assets/meme5.png" alt="Meme 5" className="border-2 border-customGreen rounded-lg object-cover" />
            <img src="/src/assets/meme6.png" alt="Meme 6" className="border-2 border-customGreen rounded-lg object-cover" />
        </div>
    </div>
);

export default BottomPage;
