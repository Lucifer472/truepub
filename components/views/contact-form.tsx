"use client";

import Link from "next/link";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
  };

  return (
    <div className="flex flex-col gap-y-8 w-full items-start pb-16 font-extralight">
      <select className="w-full bg-white p-4 border border-gray-100">
        <option value="">I have Urgent Request!</option>
        <option value="">I Want to contact About Career opportunity!</option>
        <option value="">I have Question with you!</option>
        <option value="">I want to hire you!</option>
      </select>
      <p className="p-4 bg-background-blue bg-opacity-30 text-gray-800 border border-background-blue font-normal">
        We appreciate your interest in advertising on our search engine. The ads
        we show are served through our trusted advertise partners. We do not
        offer direct advertising opportunities with our brands.
      </p>
      <p>
        You can use this page to exercise certain of your privacy rights
        available in your jurisdiction. To learn more about how we use and share
        personal information on our services, please see our{" "}
        <Link href={"/privacy"} className="text-sky-500">
          Privacy Policy.
        </Link>
        <br />
        <br />
        Please provide the information below so we can start processing your
        request. You must, at a minimum, provide the information marked with a
        red asterisk. We reserve the right to ask you for additional information
        in order to verify your identity.
      </p>
      <h3 className="text-xl xs:text-2xl sm:text-3xl font-medium">
        Your contact information
      </h3>
      <form className="space-y-4 w-full" onSubmit={handleSubmit}>
        <div className="space-y-1 w-full">
          <label htmlFor="name" className="font-medium">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full p-2 border-gray-300 border"
            required
          />
        </div>
        <div className="space-y-1 w-full">
          <label htmlFor="email" className="font-medium">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full p-2 border-gray-300 border"
            required
          />
        </div>
        <div className="space-y-1 w-full">
          <label htmlFor="subject" className="font-medium">
            Subject:
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="w-full p-2 border-gray-300 border"
            required
          />
        </div>
        <div className="space-y-1 w-full">
          <label htmlFor="msg" className="font-medium">
            Message:
          </label>
          <textarea
            name="msg"
            id="msg"
            rows={10}
            className="w-full p-2 border-gray-300 border resize-none"
            required
          />
        </div>
        <h3 className="text-xl xs:text-2xl sm:text-3xl font-medium">
          Declarations
        </h3>
        <div className="flex items-center justify-start gap-x-2">
          <input
            type="checkbox"
            name="dec"
            id="dec"
            className="w-4 h-4"
            required
          />
          <p className="cursor-pointer">
            I have read, consent and agree to Truepub Media{" "}
            <Link
              href={"/privacy"}
              className="underline font-normal text-background-blue"
            >
              Privacy Policy.
            </Link>
          </p>
        </div>
        <button className="px-6 py-3 font-medium bg-primary-2 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
