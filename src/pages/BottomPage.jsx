import meme1 from '../assets/meme1.jpg'
import meme2 from '../assets/meme2.jpg'
import meme3 from '../assets/meme3.jpg'
import meme4 from '../assets/meme4.jpg'
import meme5 from '../assets/meme5.jpg'
import meme6 from '../assets/meme6.jpg'

const BottomPage = () => (
    <div className="h-full flex flex-col items-center justify-center p-4 gap-8">
        <h1 className="text-2xl font-bold mb-4">MEMES WE MADE</h1>
        <div className="grid grid-cols-3 gap-4 w-full">
            <img src={meme1} alt="Meme 1" className="border-2 border-customGreen rounded-lg object-cover h-full" />
            <img src={meme2} alt="Meme 2" className="border-2 border-customGreen rounded-lg object-cover h-full" />
            <img src={meme3} alt="Meme 3" className="border-2 border-customGreen rounded-lg object-cover h-full" />
            <img src={meme4} alt="Meme 4" className="border-2 border-customGreen rounded-lg object-cover h-full" />
            <img src={meme5} alt="Meme 5" className="border-2 border-customGreen rounded-lg object-cover h-full" />
            <img src={meme6} alt="Meme 6" className="border-2 border-customGreen rounded-lg object-cover h-full" />
        </div>
    </div>
);

export default BottomPage;
