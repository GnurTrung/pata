import Image from "next/image";
import Link from "next/link";
import React, { lazy } from "react";
/* const Marquee = lazy(() => import("react-fast-marquee")); */

const Gallery = () => {
  return (
    <div className="relative pt-20 pb-10 md:pt-0 lg:pt-32">
      <section
        id="anhcuoi"
        className="max-w-[1440px] mx-auto grid grid-flow-row gap-4 grid-rows-10 lg:grid-rows-5 grid-cols-2 lg:grid-cols-3 min-h-screen px-4 lg:px-8"
      >
        <h1 className="col-span-2 text-[64px] font-great-vibes my-auto mx-auto text-black lg:hidden">
          Ảnh cưới
        </h1>
        <div className="flex row-span-3 ">
          <Image
            src="/assets/images/chew/pata1.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
            quality={100}
            loading="lazy"
            className="object-cover"
          />
        </div>
        <div className="flex row-start-3 col-start-2 row-span-3 lg:row-span-5">
          <Image
            src="/assets/images/chew/pata3.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
            quality={100}
            loading="lazy"
            className="object-cover"
          />
        </div>
        <div className="flex row-span-1 col-start-2 lg:col-start-3 row-start-2 lg:row-span-2">
          <Image
            src="/assets/images/chew/pata2.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
            quality={100}
            loading="lazy"
            className="object-cover"
          />
        </div>
        <div className="flex row-span-1 lg:row-span-3">
          <Image
            src="/assets/images/chew/pata4.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
            quality={100}
            loading="lazy"
            className="object-cover"
          />
        </div>
        <div className="flex row-span-2 lg:row-span-2 col-span-2 lg:col-span-1 w-full relative">
          <Image
            src="/assets/images/chew/pata5.jpg"
            alt="Picture of the author"
            quality={100}
            width={500}
            height={500}
            loading="lazy"
            className="object-cover object-top max-sm:h-full"
          />
        </div>
        <img
          className="absolute inset-0 mx-auto top-5"
          src="/assets/images/chew/divide.png"
          alt="err"
        />
      </section>
    </div>
  );
};

export default Gallery;
