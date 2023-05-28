import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function Banner() {
    return (
        <>
            <div className="relative">

                {/* carauselin altındaki gradient  self close div kullanımı */}
                <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20 md:z-0"/>
                <Carousel autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}>

                    <div>
                        <img loading="lazy" src="https://links.papareact.com/gi1" alt="carousel1" />
                    </div>
                    <div>
                        <img loading="lazy" src="https://links.papareact.com/6ff" alt="carousel2" />
                    </div>
                    <div>
                        <img loading="lazy" src="https://links.papareact.com/7ma" alt="carousel3" />
                    </div>

                </Carousel>

            </div>

        </>
    )
}