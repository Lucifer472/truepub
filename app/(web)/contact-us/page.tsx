import ContactForm from "@/components/views/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | True Pub Media Solution",
};

const ContactPage = () => {
  return (
    <div className="w-full flex flex-col max-w-[90%] lg:max-w-[80%] mx-auto gap-y-8 text-black">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">
        Need help get in Touch?
      </h2>
      <p className="font-extralight">
        Please give us all relevant information to help us respond
        appropriately. Begin by selecting the best fit for your question.{" "}
      </p>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
