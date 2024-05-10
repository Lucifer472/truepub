import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copyright | TRUEPUB MEDIA Solution",
};

const CopyrightPage = () => {
  return (
    <div className="w-full flex flex-col max-w-[90%] md:max-w-[80%] mx-auto gap-y-4 text-black">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">
        Copyright
      </h2>
      <div className="flex flex-col items-start gap-y-2">
        <span className="text-sm md:text-base">
          Disclaimer - Copyrights of third parties on texts, images, video files
          and Music files
        </span>
        <p className="font-extralight text-xs md:text-sm text-justify">
          TRUEPUB MEDIA is a metadata-search engine, which mean that different
          search machines of TRUEPUB MEDIA search in more search engines on the
          internet. The results that are displayed by TRUEPUB MEDIA as result
          of a search command of a user, originate from other search engines.
          TRUEPUB MEDIA shows the source of each result in its result list. It
          is possible that TRUEPUB MEDIA shows in the search results direct
          links to files or web pages that contain material that is protected by
          copyright or other intellectual property rights. However this material
          can be found and accessed by using the Website, TRUEPUB MEDIA does
          not and cannot grant its users the permission to download, copy or use
          this material. The user alone is responsible and liable of the use,
          copy and / or download of this material. TRUEPUB MEDIA is never
          responsible or liable for sanctions based on law or regulations of law
          suits of any kind against the user as result of using search services
          provided by TRUEPUB MEDIA.
        </p>
      </div>
      <div className="flex flex-col items-start gap-y-2">
        <span className="text-sm md:text-base">
          Trademarks / trade names in advertisement on TRUEPUB MEDIA -
          Sponsored links
        </span>
        <p className="font-extralight text-xs md:text-sm text-justify">
          TRUEPUB MEDIA displays several advertisements on different pages of
          its website. TRUEPUB MEDIA acknowledges the intellectual property
          rights of third parties. TRUEPUB MEDIA also displays sponsored links
          originating from the advertising network of Google (Google AdWords /
          Adsense), on the pages where the search results are displayed. In case
          you or your company is of the opinion that a sponsored link or result
          may not be displayed in the sponsored links of TRUEPUB MEDIA, TRUE
          PUB MEDIA kindly requests you to inform Google about this, by using
          this link.
        </p>
      </div>
      <div className="flex flex-col items-start gap-y-2">
        <span className="text-sm md:text-base">
          Trademarks / trade names in advertisement on TRUEPUB MEDIA - Other
          advertisements
        </span>
        <p className="font-extralight text-xs md:text-sm text-justify">
          When you are of the opinion that advertisements – other than sponsored
          links originating from the advertisement network of Google (Google
          AdWords / AdSense) – infringe upon intellectual property rights that
          belong to you or your company or to which your company can claim
          rights to, TRUEPUB MEDIA kindly requests you to inform TRUEPUB MEDIA
          about this via this form. TRUEPUB MEDIA shall assess your complaint
          and – if necessary – adapt or remove the advertisement within 2
          working days after receipt of the complaint.
        </p>
      </div>
      <div className="flex flex-col items-start gap-y-2">
        <span className="text-sm md:text-base">
          Trademarks / trade names in advertisement of TRUEPUB MEDIA on the
          internet
        </span>
        <p className="font-extralight text-xs md:text-sm text-justify">
          TRUEPUB MEDIA advertises in the internet at several advertisement
          networks (o.a. Google Adwords, Yahoo! Search Marketing). TRUE PUB
          MEDIA acknowledges the intellectual property rights of third parties.
          When you are of the opinion that advertisements of TRUEPUB MEDIA
          infringe upon intellectual property rights that belong to you or your
          company or to which your company can claim rights to, TRUEPUB MEDIA
          kindly requests you to inform TRUEPUB MEDIA about this via this form
          or in writing to 501,Kabir Shilp, Kudasan, Gandhinagar, India -
          382124. TRUEPUB MEDIA shall assess your complaint and – if necessary
          – adapt or remove the advertisement within 2 working days after
          receipt of the complaint.
        </p>
      </div>
    </div>
  );
};

export default CopyrightPage;
