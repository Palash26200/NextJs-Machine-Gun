import Image from "next/image";
import React from "react";
import AssetStatusTabs from "./AssetStatusTabs";
import Layout from "./Layout";

const Hero = () => {
  return (
    <Layout>
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Tracking Assets, Empowering Workforces🧑🏻‍💻
          </h1>
          <p className="max-w-md leading-relaxed">
            {" "}
            Our platform empowers you to assign assets to employees swiftly and
            with pinpoint accuracy, contributing to a seamlessly organized
            workplace.
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              alt="wallpaper"
              src="/image/tool.avif"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
            />
          </div>
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              alt="wallpaper"
              src="/image/tool2.avif"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hero;
