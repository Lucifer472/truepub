import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | True Pub Media Solution",
};

const ContactPage = () => {
  return (
    <div className="w-full flex flex-col max-w-[80%] mx-auto gap-y-4 text-black">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">
        Privacy Policy
      </h2>
      <p className="font-light italic text-sm">Updated: April 20, 2024</p>
      <div className="flex flex-col items-start gap-y-2">
        <span className="text-sm md:text-base">1 Introduction</span>
        <p className="font-light text-xs md:text-sm text-justify">
          1.1 This Privacy Policy (hereinafter: “Policy”) is used by TRUE PUB
          MEDIA, a company with limited liability under the laws of the India,
          with its registered office and primary place of business at 501,Kabir
          Shilp, Kudasan, Gandhinagar. TRUE PUB MEDIA can be reached via our
          <Link href={"/contact-us"} className="underline text-sky-600">
            Contact Form.
          </Link>
          <br />
          <br />
          1.2 TRUE PUB MEDIA is committed to protecting your privacy. This
          Policy describes what we do with your data and applies to all
          information that identifies you or may be used to identify you with
          (“Personal data”) by TRUE PUB MEDIA, such as but not limited to
          processing via the TRUE PUB MEDIA websites (hereinafter: “Websites”).
          The Websites are intended for general audiences over the age of 16
          years old. We do not knowingly collect information from children under
          the age of 16 years old.
          <br />
          <br />
          1.3 If you are not at least 16 years old (or 13 years old in the
          United States), please do not use the Websites. Our Services are not
          intended for use by children under the this ages. If we learn we have
          collected or received personal information from a child under
          mentioned age without verification of parental consent, we will delete
          that information. If you believe we might have any information from or
          about a child under the age, please contact via our
          <Link href={"/contact-us"} className="underline text-sky-600">
            Contact Form.
          </Link>
          <br />
          <br />
          1.4 This Privacy Policy is provided in English. Translations to
          certain other languages may be available and can be requested by
          contacting us
          <Link href={"/contact-us"} className="underline text-sky-600">
            here
          </Link>
          .
          <br />
          <br />
          1.5 For ease of reference, each section of this privacy policy is set
          out below:
        </p>
        <ul className="list-disc ml-8 flex flex-col items-start gap-y-2 font-light text-sm">
          <li>Introduction Processing of Personal data Purposes </li>
          <li>processing Legal basis of the processing</li>
          <li>
            Recipients of your Personal data Retention of your Personal data
            Safeguarding
          </li>
          <li>your Personal data Your rights Amendments and questions.</li>
        </ul>
      </div>
      <div className="flex flex-col items-start gap-y-2">
        <span className="text-sm md:text-base">
          2 Processing of Personal data
        </span>
        <p className="font-light text-xs md:text-sm text-justify">
          2.1 TRUE PUB MEDIA is a data controller under the General Data
          Protection Regulation (GDPR). This means that with regard to any
          Personal data referred to in this Policy, TRUE PUB MEDIA determines
          the purpose for which we process this data and we determine the means
          necessary for the processing of this data. As a data controller, we
          process the data set out in this section. TRUE PUB MEDIA does not
          engage in automated decision-making. Data collected directly from you{" "}
          <br />
          <br /> 2.2 When you access our Websites, we may (automatically)
          collect the following information about you and/or your device:
        </p>
        <ul className="list-disc ml-8 flex flex-col items-start gap-y-2 font-light text-sm">
          <li>Your anonymous IP address;</li>
          <li>Your (mobile) device identifier;</li>
          <li>
            Information about your settings, such as language settings, browser
            information (user agent) and/or operating system;
          </li>
          <li>Query-string;</li>
          <li>Your Website preferences;</li>
          <li>Your location and time zone.</li>
        </ul>
        <p className="font-light text-xs md:text-sm text-justify">
          2.3 Access to the Websites, their content and any web search results
          generated by using the Websites in general do not require you to
          submit Personal data to us other than the information listed above.
          Under certain circumstances, you may wish to provide us with more
          information about yourself, for example in relation to any enquiry you
          may want to make with us via our
          <Link href={"/contact-us"} className="underline text-sky-600">
            Contact Form.
          </Link>
          When you are reaching out to us, we may process the following
          information about you:
        </p>
        <ul className="list-disc ml-8 flex flex-col items-start gap-y-2 font-light text-sm">
          <li>Your name;</li>
          <li>Your company name;</li>
          <li>Your email address;</li>
          <li>Any other Personal data you provide us with.</li>
        </ul>
        <p className="font-light text-xs md:text-sm text-justify">
          For our website www.truepubmedia.com we use Google reCAPTCHA before
          you can fill in our
          <Link href={"/contact-us"} className="underline text-sky-600">
            Contact Form.
          </Link>
          It is a system to find out if the website visitor is a human and not a
          bot and helps us to protect our contact form from cyber spam and
          abuse. You acknowledge and understand that the reCAPTCHA API collects
          the following information:
        </p>
        <ul className="list-disc ml-8 flex flex-col items-start gap-y-2 font-light text-sm">
          <li>
            All cookies that Google has placed on the users system in the last 6
            months
          </li>
          <li>
            How many mouse clicks the user made in the browser window (or tapped
            if it is a touch device)
          </li>
          <li>The scrolling behavior of the user</li>
          <li>The webpages CSS</li>
          <li>The users IP address</li>
          <li>
            Whether the user is currently logged in to their Google account
          </li>
          <li>The users browser language setting</li>
          <li>All add-ons installed in the users browser</li>
          <li>All Javascript objects</li>
          <li>The speed with which the user fills out the form</li>
        </ul>
        <p className="font-light text-xs md:text-sm text-justify">
          and sending this data to Google for analysis. The information
          collected in connection with your use of the service will be used for
          improving reCAPTCHA and for general security purposes. It will not be
          used for personalised advertising by Google. You can find further
          details via this link
          <Link
            href={"https://support.google.com/recaptcha/?hl=en"}
            target="_blank"
            className="underline text-sky-600"
          >
            https://support.google.com/recaptcha/?hl=en.
          </Link>
        </p>
        <p className="font-light text-xs md:text-sm text-justify">
          2.4 If you choose to provide us with any additional Personal data, we
          recommend that you limit the provision of such data to the absolute
          minimum, and we discourage you from providing us with any sensitive
          Personal data, such as data revealing racial or ethnic origin,
          political opinions, religious or philosophical beliefs, trade union
          membership, genetic or biometric data or data about your sex life or
          sexual orientation.
        </p>
        <p className="font-light text-xs md:text-sm text-justify">
          2.5 Third parties may be able to process data related to you through
          our websites in order to provide us with certain products and
          services. Such third parties may use technologies such as cookies, ad
          tags or ad beacons to collect information about your interaction with
          any products and services (such as advertisements) they offer through
          the Website.
        </p>
        <p className="font-light text-xs md:text-sm text-justify">
          We use advertisement from partners (from Google and Microsoft Bing and
          Yahoo). Because we have set off ad personalization, they will not
          collect or use your information to create an ad profile. You will
          still see ads, but are not personalized. Ads are only be based on the
          topic of the website you are looking at, your current search terms, or
          on your general location, but not on your interests, search history,
          or browsing history. Your information can still be used for measure
          the effectiveness of advertising and protect against fraud and abuse.
          Please note: TRUE PUB MEDIA is not responsible for tracking cookies
          which you have previously accepted while visiting third-party
          websites. These third parties are data controllers and must inform
          you.
        </p>
        <p className="font-light text-xs md:text-sm text-justify">
          For more information about Googles privacy policy, please visit Google
          Privacy Policy.
        </p>
        <p className="font-light text-xs md:text-sm text-justify">
          2.6 Third-parties who provide us with products and services may also
          place cookies, ad tags and/or beacons that collect the information
          outlined above in order to provide us with products and services
          including analytics tools allowing us to analyze the performance of
          our Services and advertisers and ad networks allowing the delivery of
          ads. These third parties may also collect information about you from
          other sources and combine it with other information collected about
          you from third party websites not affiliated with us. The IP is
          stored, as well as location (country), browser data and what results
          were shown (such as ads and organic results). Also, certain
          information is passed on to third parties (such as IP address, ads
          shown and ads clicked on) to make our service possible (showing
          results, both ads and organic results).
        </p>
        <p className="font-light text-xs md:text-sm text-justify">
          User behavior is never tracked to match organic results or ads to the
          visitors profile. Organic results and ads are only shown based on the
          visitors search query. For all websites, the personalized ads option
          is disabled. The necessary cookies are essential to operate our
          websites and provide our services by helping us provide basic
          functionality such as loading and rendering pages on the websites and
          enabling your navigation around the websites and use of certain
          features. They are also used to identify and prevent fraud and improve
          security.
        </p>
      </div>
      <div className="flex flex-col items-start gap-y-2">
        <span className="text-sm md:text-base">
          3 Purposes of the processing
        </span>
        <p className="font-light text-xs md:text-sm text-justify">
          3.1 Primary purposes for which we process your Personal data are to
          offer you the best services possible, to optimize our Websites and
          services and to ensure continuity thereof. More specifically, your
          Personal data can be used for the following purposes:
        </p>
        <ul className="list-disc ml-8 flex flex-col items-start gap-y-2 font-light text-sm">
          <li>
            To provide our services: we may need certain information about you
            in order to be able to provide our services. Data is used to
            properly perform our services and to improve our services. User
            behavior is never tracked to match organic results or ads to the
            visitors profile. Organic results and ads are only shown based on
            the visitors search query. For all websites, the personalized ads
            option is disabled. We use data because they:
          </li>
          <li>
            To improve our services: our Websites and services are constantly
            evolving, and we are constantly working on improving your user
            experience and adding new functionality to our Websites.
          </li>
          <li>
            To secure our services: in order to be able to provide your with the
            best user experience possible, it is necessary to keep out hackers,
            automated bots or other threats. We are therefore constantly
            monitoring our services and the use of our services.
          </li>
          <li>
            To communicate with you: when you contact us, we process your
            contact details such as your name and email address and any other
            Personal data you may provide to us in order to be able adequately
            revert to you on your enquiry.
          </li>
          <li>
            To exercise and safeguard our rights: we may need to exercise our
            legal rights in case you infringe our intellectual property, engage
            in fraudulent acts or act in violation of this Policy or our terms
            of service.
          </li>
          <li>
            To compensate our partners: as we show and run advertisements,
            certain Personal data may be needed in order to calculate the
            compensation to be paid to or received by or from our partners.
          </li>
          <li>
            To comply with a legal obligation: we may be required by law or by a
            court order to process (and/or transfer) certain Personal data.
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start gap-y-2">
        <span className="text-sm md:text-base">
          4 Legal basis of the processing
        </span>
        <p className="font-light text-xs md:text-sm text-justify">
          4.1 We process your Personal data on the following legal basis:
        </p>
        <ul className="list-disc ml-8 flex flex-col items-start gap-y-2 font-light text-sm">
          <li>
            Execution of a contract with you: most processing activities are
            carried out in order to provide you with our services.
          </li>
          <li>
            Our legitimate interests: your Personal data may be processed by us
            based on our legitimate interest, such as our commercial interests.
            This may be the case with, among others, compensation of our
            partners. TRUE PUB MEDIAs websites are search engines for different
            types of visitors from all over the world. After you submit a search
            query, the most relevant content and ads will be displayed.
            Information is collected for functional purposes only. Data is only
            used to properly perform our services and to improve our services.
            The IP is stored, as well as location (country), browser data and
            what results were shown (such as ads and organic results). Also,
            certain information is passed on to third parties (such as IP
            address, ads shown and ads clicked on) to make our service possible
            (showing results, both ads and organic results and payment of fees).
          </li>
          <li>
            Your consent: should certain processing activities not be related to
            our contract with you, or our legitimate interest, then we may
            process your Personal data on the basis of your consent.
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start gap-y-2">
        <span className="text-sm md:text-base">
          5 Recipients of your Personal data
        </span>
        <p className="font-light text-xs md:text-sm text-justify">
          5.1 TRUE PUB MEDIA may transfer your Personal data to the following
          categories of recipients:
        </p>
        <ul className="list-disc ml-8 flex flex-col items-start gap-y-2 font-light text-sm">
          <li>
            Suppliers: when such is necessary to enable the use Websites and
            services, we may transfer your Personal data to suppliers,
            subcontractors and business partners, such as our hosting provider
            that hosts the Websites, the provider of our job application
            platform, partners that help us to improve the user-experience of
            our services and providers of IT support, data backup, recovery
            service and office software.
          </li>
          <li>
            Group companies: we may provide Personal data to other companies
            within the TRUE PUB MEDIA group of companies, if this is necessary
            for compliance, internal reporting, auditing or security purposes.
          </li>
          <li>
            Professional service providers: Our accountant, legal advisers and
            other professional service providers engaged by us for compliance
            reasons;
          </li>
          <li>
            Advertisement partners: Information on your Website visit may be
            provided to advertisement partners in order to serve you with
            (relevant) advertisements on our Websites and elsewhere, and to
            measure effectiveness of advertisements. Ads are only be based on
            the topic of the website you are looking at, your current search
            terms, or on your general location, but not on your interests,
            search history, or browsing history.
          </li>
          <li>
            Law enforcement agencies: we may be under an obligation to provide
            your information to law enforcement, regulators, courts or other
            public authorities in relation to an official (court) order. In
            addition we may provide your data to law enforcement agencies,
            regulators, courts or otherwise in order to exercise our rights.
          </li>
          <li>
            Fraud prevention: we may engage third parties when we believe
            disclosure is necessary to investigate, prevent, or respond to
            suspected illegal or fraudulent activity or to protect the safety,
            rights, or property of us, our users, or others.
          </li>
          <li>
            Third parties: we may transfer data to third parties acquiring or
            merging with TRUE PUB MEDIA, or purchasing part or all of our
            assets, or in case of a corporate restructuring.
          </li>
        </ul>
        <p className="font-light text-xs md:text-sm text-justify">
          5.2 The third parties receiving or accessing your Personal data might
          be located outside the European Economic Area (EEA). When transferring
          data for which we are responsible to countries outside of the EEA
          (so-called third countries), we ensure appropriate safeguards. More
          specifically, we contractually bind recipients of Personal data to
          protect your data using the Standard Contractual Clauses (SCs) as
          approved by the European Commission. We will assess in advance (where
          necessary, with the help of the recipients in third countries) on a
          case-by-case basis if the law or practice of the third country
          diminishes the effectiveness of the SCCs. In those cases, we will
          implement supplementary measures that fill the gaps in the protection
          and bring it up to the level required by EU law.
        </p>
      </div>
      <div className="flex flex-col items-start gap-y-2">
        <span className="text-sm md:text-base">
          6 Retention of your Personal data
        </span>
        <p className="font-light text-xs md:text-sm text-justify">
          6.1 We retain your Personal data for as long as necessary in order to
          fulfil the associated purpose as set out above. For spam detection and
          statistic purposes we retain data for 7 days. We retain conversion
          data for 30 days. After that, we can only retain your Personal data if
          this is required or necessary in order to comply with applicable law
          or in order to be able satisfy any legal, reporting or audit
          requirements. Where possible we anonymize or pseudo-anonymize your
          Personal data or retain it in an aggregated form only.
        </p>
      </div>
      <div className="flex flex-col items-start gap-y-2">
        <span className="text-sm md:text-base">
          7 Securing your Personal data
        </span>
        <p className="font-light text-xs md:text-sm text-justify">
          7.1 We highly value the secure processing of your Personal data.
          Therefore, we may implements security measures, such as but not
          limited to, as appropriate:
        </p>
        <ul className="list-disc ml-8 flex flex-col items-start gap-y-2 font-light text-sm">
          <li>The pseudonymisation and encryption of Personal Data;</li>
          <li>
            Group companies: we may provide Personal data to other companies
            within the TRUE PUB MEDIA group of companies, if this is necessary
            for compliance, internal reporting, auditing or security purposes.
          </li>
          <li>
            The ability to ensure the ongoing confidentiality, integrity,
            availability and resilience of processing systems and services;
          </li>
          <li>
            The ability to restore the availability and access to Personal Data
            in a timely manner in the event of a physical or technical incident;
            and
          </li>
          <li>
            A process for regularly testing, assessing and evaluating the
            effectiveness of technical and organizational measures for ensuring
            the security of the processing.
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start gap-y-2">
        <span className="text-sm md:text-base">8 Your rights</span>
        <p className="font-light text-xs md:text-sm text-justify">
          8.1 You are provided with the following rights:
        </p>
        <ul className="list-disc ml-8 flex flex-col items-start gap-y-2 font-light text-sm">
          <li>
            Objection: Under certain conditions you have the right to object to
            the processing of your Personal data and the conditions under which
            this processing takes place.
          </li>
          <li>
            Access: You have the right to request from us, without constraint,
            at reasonable intervals and without excessive delay or expense, i) a
            confirmation as to whether or not Personal data regarding you is
            being processed, ii) information on the purposes for which Personal
            data is processed, iii) the categories of Personal data concerned,
            and iv) the recipients or categories of recipients to whom the
            Personal data is disclosed. You have the right to receive, in an
            intelligible form, a communication of the Personal data being
            processed and of any available information as to the source(s).
            Furthermore, you have the right to knowledge of the underlying logic
            of the automated processing of Personal data relating to you.
          </li>
          <li>
            Rectification, restriction, erasure, blocking or deletion: Under
            certain conditions you have the right to rectification, restriction,
            erasure, blocking or deletion of your Personal data that is not
            processed in compliance with data protection laws and regulations,
            in particular when the nature of the data is incomplete or
            inaccurate.
          </li>
          <li>
            Data portability: Under certain conditions you have the right to
            receive your Personal data in a structured, commonly used and
            machine-readable format to transfer those data.
          </li>
          <li>
            Withdraw consent: where we are processing Personal data relating to
            you on the basis of your prior consent to that processing, you may
            withdraw your consent at any time.
          </li>
          <li>
            Complaint with relevant authority. You have the right to file a
            complaint with the relevant data protection authorities, e.g. the
            Autoriteit Persoonsgegevens in the Netherlands.
          </li>
        </ul>
        <p className="font-light text-xs md:text-sm text-justify">
          8.2 You may exercise these rights by contacting us via our Contact
          Form, click the
          <Link href={"/contact-us"} className="underline text-sky-600">
            Contact Us.
          </Link>
          button and then fill out the form.
        </p>
        <p className="font-light text-xs md:text-sm text-justify">
          8.3 In order to fulfil your possible requests pursuant to the rights
          as stated above, we may request specific additional information from
          you to identify you with or we may ask you for information to identify
          you with. We only collect and process such specific data with the
          purpose of executing your above stated rights insofar this is
          requested by you.
        </p>
      </div>
      <div className="flex flex-col items-start gap-y-2">
        <span className="text-sm md:text-base">9 Amendments and questions</span>
        <p className="font-light text-xs md:text-sm text-justify">
          9.1 TRUE PUB MEDIA may amend this Policy at any time. In case the
          Policy is amended, the amended Policy will be made available to you
          through publication of the amended Policy on the Website.
        </p>
        <p className="font-light text-xs md:text-sm text-justify">
          9.2 Should you have any questions after reading this Policy, or would
          want to exercise any right as stated in this Policy, please do not
          hesitate to contact us via the
          <Link href={"/contact-us"} className="underline text-sky-600">
            Contact Us.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;