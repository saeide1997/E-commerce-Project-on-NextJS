import Carousel from 'react-bootstrap/Carousel';
import img1 from '@/public/assets/images/rings-png.png'
import img2 from '@/public/assets/images/necklace jewelry-png.png'
import Image from 'next/image';
import { useEffect } from 'react';


const Slider = () => {

    return (
        <div className="m-4 shadoww  ">
            <Carousel data-bs-theme="dark" className="h-[calc(100vh-90px)] w-[100%] bg-white">
                <Carousel.Item className="">
                    <div className=" flex">
                        <div className="flex-1 relative">
                            <div className="z-0 w-[50%] h-[60%] rounded-full m-10 bg-fuchsia-900/70 absolute"></div>
                            <div className=" relative" >
                                <Image className=" h-[80vh] " src={img1} alt="First slide fill "/>
                             </div>
                            
                        </div>
                        <div className="flex-1 mt-16 p-5">
                            <h3 className="mb-5">تخفیفات تابستانه</h3>
                            <p>تخفیفات تابستانه را از دست ندهید...</p>
                            <button className="border-1 p-2 border-gray-600 mt-5">مشاهده کنید</button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className=" flex">
                        <div className=" flex-1">
                        <div className="flex-1 relative">
                            <div className="z-0 w-[40%] h-[50%] rounded-full mr-[40%] mt-56 bg-black/50 absolute"></div>
                            <div className=" relative" >
                                {/* <img className=" h-[80vh] "  src={img2} alt="First slide"/> */}
                            </div>
                        </div>
                        </div>
                        <div className="flex-1 mt-16 p-5">
                            <h3 className="mb-5">تخفیفات آخر فصل</h3>
                            <p>تخفیفات آخر فصل را از دست ندهید...</p>
                            <button className="border-1 p-2 border-gray-600 mt-5">مشاهده کنید</button>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;