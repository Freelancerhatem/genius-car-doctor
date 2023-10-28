import img from '../../../assets/images/bg.jpg'
import { GrCaretNext,GrCaretPrevious } from 'react-icons/gr';

const Banner = () => {
    return (
        <div>
             <div className="carousel w-full h-[90vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img} className="w-full" />
                    <div className=' h-full w-full absolute  bg-gradient-to-tr from-[#01010587] to-[#237ec129]'>
                           <div className="absolute top-1/2 left-32">
                           <h1 className='text-6xl font-bold  text-white'>Choose Your Perfect Brand</h1>
                            <div className="mt-4">
                            <button className='btn btn-success mr-4 '>Explore More</button>
                            <button className='btn btn-success'>Know More</button>
                            </div>
                           </div>
                        </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 right-5 gap-2 bottom-0">
                    
                        <a href="#slide4" className="btn btn-circle"><GrCaretPrevious className=''></GrCaretPrevious></a>
                        <a href="#slide2" className="btn btn-circle"><GrCaretNext></GrCaretNext></a>
                        
                        
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img} className="w-full" />
                    <div className=' h-full w-full absolute  bg-gradient-to-tr from-[#01010587] to-[#237ec129]'>
                           <div className="absolute top-1/2 left-32">
                           <h1 className='text-6xl font-bold  text-white'>Choose Your Perfect Brand</h1>
                            <div className="mt-4">
                            <button className='btn btn-success mr-4 '>Explore More</button>
                            <button className='btn btn-success'>Know More</button>
                            </div>
                           </div>
                        </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2  right-5 gap-2 bottom-0">
                        <a href="#slide1" className="btn btn-circle"><GrCaretPrevious></GrCaretPrevious></a>
                        <a href="#slide3" className="btn btn-circle"><GrCaretNext></GrCaretNext></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img} className="w-full" />
                    <div className=' h-full w-full absolute  bg-gradient-to-tr from-[#01010587] to-[#237ec129]'>
                           <div className="absolute top-1/2 left-32">
                           <h1 className='text-6xl font-bold  text-white'>Choose Your Perfect Brand</h1>
                            <div className="mt-4">
                            <button className='btn btn-success mr-4 '>Explore More</button>
                            <button className='btn btn-success'>Know More</button>
                            </div>
                           </div>
                        </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 right-5 gap-2 bottom-0">
                    <a href="#slide2" className="btn btn-circle"><GrCaretPrevious></GrCaretPrevious></a>
                        <a href="#slide4" className="btn btn-circle"><GrCaretNext></GrCaretNext></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img} className="w-full" />
                    <div className=' h-full w-full absolute  bg-gradient-to-tr from-[#01010587] to-[#237ec129]'>
                           <div className="absolute top-1/2 left-32">
                           <h1 className='text-6xl font-bold  text-white'>Choose Your Perfect Brand</h1>
                            <div className="mt-4">
                            <button className='btn btn-success mr-4 '>Explore More</button>
                            <button className='btn btn-success'>Know More</button>
                            </div>
                           </div>
                        </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 right-5 gap-2 bottom-0">
                    <a href="#slide3" className="btn btn-circle"><GrCaretPrevious></GrCaretPrevious></a>
                        <a href="#slide1" className="btn btn-circle"><GrCaretNext></GrCaretNext></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;