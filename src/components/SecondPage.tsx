/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const SecondPage = () => {
  return (
    <section id="diadiem" className="relative">
      <img
        className="absolute inset-0 mx-auto top-5"
        src="/assets/images/chew/divide.png"
        alt="err"
      />
      <div className="flex justify-center text-[64px] pt-20">Tiệc cưới</div>
      <div className="flex justify-center text-[28px] pt-5">
        Trân trọng kính mời bạn
      </div>
      <div className="flex justify-center text-[28px]">
        đến tham gia bữa tiệc
      </div>
      <div className="flex justify-center text-[28px]">
        chung vui cùng gia đình chúng tôi
      </div>
      <div
        className="relative pb-10 max-sm:px-[1rem] w-full flex flex-col sm:justify-around sm:flex-row gap-2 mt-4"
        id="meme"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="500"
      >
        <div className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-4 rounded-xl">
          <div className="flex justify-center font-bold text-[40px] max-sm:mt-4">
            Nhà gái
          </div>
          <div className="flex justify-center text-[26px] mt-5 text-font-base">
            10h30 - 21/12/2024
          </div>
          <div className="flex justify-center text-[24px] text-font-base">
            Tức 21 tháng 11 năm Giáp Thìn
          </div>
          <div className="flex justify-center text-[28px] mt-5 font-medium text-font-base">
            Hội trường C - TTHN Tiệc Cưới Chen 1
          </div>
          <div className="flex justify-center text-[20px] mt-5 text-font-base">
            300 đường Trường Chinh
          </div>
          <div className="flex justify-center text-[20px] mb-5 text-font-base">
            P. Vị Xuyên, TP Nam Định
          </div>
          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.664928468604!2d106.17792547594968!3d20.437865481067746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135e740b47ec6d1%3A0xe5b04fa629c9b1ee!2zMzAwIFRyxrDhu51uZyBDaGluaCwgVuG7iyBYdXnDqm4sIE5hbSDEkOG7i25oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1732809906948!5m2!1sen!2s"
              width="700"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mb-4 rounded-2xl"
            ></iframe>
          </div>
          <div className=" flex justify-center">
            <Link
              href="https://maps.app.goo.gl/jmbtn5GRa4QH4ysDA"
              rel="noopener noreferrer"
              target="_blank"
              className="btn-primary w-[200px] mt-5 text-white"
            >
              Google Maps
            </Link>
          </div>
        </div>
        <div className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-4 rounded-xl">
          <div className="flex justify-center font-bold text-[40px] max-sm:mt-5">
            Nhà trai
          </div>
          <div className="flex justify-center text-[26px] mt-5 text-font-base">
            9h30 - 22/12/2024
          </div>
          <div className="flex justify-center text-[24px] text-font-base">
            Tức 22 tháng 11 năm Giáp Thìn
          </div>
          <div className="flex justify-center text-[28px] mt-5 font-medium text-font-base">
            Gia đình nhà trai
          </div>
          <div className="flex justify-center text-[20px] mt-5 text-font-base">
            Số 10 - Thôn Nhật Chiêu 2 Xã Liên Châu
          </div>
          <div className="flex justify-center text-[20px] mb-5 text-font-base">
            Huyện Yên Lạc Tỉnh Vĩnh Phúc
          </div>
          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d232.52373529681765!2d105.56789495116584!3d21.177067646442765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1732810556890!5m2!1sen!2s"
              width="700"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mb-4 rounded-2xl"
            ></iframe>
          </div>
          <div className=" flex justify-center">
            <Link
              href="https://maps.app.goo.gl/J1gfxQDirExUQJru5"
              rel="noopener noreferrer"
              target="_blank"
              className="btn-primary w-[200px] mt-5 text-white"
            >
              Google Maps
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-[28px] mt-5">
        Sự hiện diện của bạn
      </div>
      <div className="flex justify-center text-[28px] mb-8">
        là niềm vinh hạnh cho gia đình chúng tôi
      </div>
    </section>
  );
};

export default SecondPage;
