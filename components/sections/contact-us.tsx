import BasicWrapper from "@/components/wrappers/basic-wrapper";
import Link from "next/link";

const ContactUs = () => {
  return (
    <BasicWrapper isUp>
      <div className="bg-gradient-to-r from-primary-1 to-primary-2 w-full  h-full bg-center bg-no-repeat overflow-hidden relative bg-cover">
        <div className="flex flex-col justify-end pb-12 pl-8 sm:pb-16 sm:pl-16 lg:pl-0 lg:pb-0 lg:grid lg:grid-cols-2 lg:mt-36 xl:mt-0 xl:grid-cols-3 gap-x-32 w-full px-4 h-full relative">
          <div className="col-span-1 w-full lg:h-full flex flex-col items-start justify-end lg:pl-48 lg:pb-48">
            <h3 className="text-[2rem] sm:text-[3rem] md:text-[4rem] font-extralight text-center leading-[1em]">
              Contact Us
            </h3>
            <h2 className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-extralight text-center leading-[1em]">
              .07
            </h2>
          </div>
          <div className="col-span-1 w-full lg:h-full flex flex-col items-start justify-end lg:pb-32">
            <p className="text-justify sm:w-[400px] text-sm sm:text-base font-extralight">
              Do you have an urgent question or request? This{" "}
              <Link href={"/contact-us"} className="underline font-medium">
                contact form
              </Link>{" "}
              is the fastest way to get in touch.
            </p>
          </div>
          <div className="col-span-1"></div>
          <div className="absolute top-40 right-96 w-[500px] h-[500px] hidden lg:block">
            <svg
              viewBox="0 0 1000 1000"
              className="stroke-1 stroke-white w-full"
            >
              <use href="/svg/prisms.svg#bottom-right"></use>
            </svg>
          </div>
        </div>
      </div>
    </BasicWrapper>
  );
};
export default ContactUs;
