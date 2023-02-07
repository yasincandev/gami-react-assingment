import { FC } from "react";
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import Slider from "react-slick";
import client from "@/assets/testimonials/client.png";

interface Testimonial {
  id: number;
  stars: string;
  text: string;
  logo: string;
  name: string;
}

const Testimonials: FC = () => {
  const CustomPrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#E5E7EB",
        }}
        onClick={onClick}
      />
    );
  };

  const CustomNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#E5E7EB",
        }}
        onClick={onClick}
      />
    );
  };
  const settings = {
    infite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    useCSS: true,
  };

  const testimonials = () => {
    const arr: Testimonial[] = [];
    for (let i = 0; i < 6; i++) {
      arr.push({
        id: Math.random(),
        stars: "★★★★★",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci sapien, malesuada sollicitudin mi vel, tristique eleifend metus.",
        logo: client,
        name: "Lorem Ipsum",
      });
    }

    return arr;
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl py-8 px-4 text-center lg:py-16 lg:px-6 ">
        <div className="mx-auto flex max-w-screen-sm flex-col gap-5">
          <h2 className="mb-4 text-base font-semibold text-mainBlue lg:text-5xl  ">
            Lorem Ipsum <br /> Dolor Sit Amet
          </h2>
          <p className="mb-8 text-sm font-extralight md:text-xl lg:mb-16 lg:text-xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci
            sapien, malesuada sollicitudin mi vel, tristique eleifend metus.{" "}
          </p>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          modules={[Navigation]}
          navigation
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },

            640: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          className="mx-auto flex w-full flex-col items-center justify-center gap-8 rounded-lg p-10 md:max-w-4xl"
        >
          {testimonials().map((testimonial) => (
            <SwiperSlide
              className="flex flex-col items-center justify-center gap-8  rounded-lg bg-gray-400 p-6"
              key={testimonial.id}
            >
              <div className="mb-2 flex w-full items-center justify-center gap-2">
                <span className="text-sm font-extralight">
                  {testimonial.stars}
                </span>
              </div>
              <p className="mt-3 text-center text-sm font-semibold md:text-lg">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                orci sapien, malesuada sollicitudin mi vel, tristique eleifend
                metus.”
              </p>
              <div className="mt-3 flex flex-col items-center gap-2">
                <img src={client} alt="" className="h-12 w-12 rounded-full" />
                <p className="text-sm ">Lorem Ipsum</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
