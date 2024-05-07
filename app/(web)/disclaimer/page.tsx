import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | True Pub Media Solution",
};

const DisclaimerPage = () => {
  return (
    <div className="w-full flex flex-col max-w-[90%] md:max-w-[80%] mx-auto gap-y-4 text-black">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">
        Disclaimer
      </h2>
      <p className="font-extralight text-xs md:text-sm text-justify">
        TRUE PUB MEDIA is a metadata-search engine, which mean that different
        search machines of TRUE PUB MEDIA search in more search engines on the
        internet. The results that are displayed by TRUE PUB MEDIA as result of
        a search command of a user, originate from other search engines. TRUE
        PUB MEDIA shows the source of each result in its result list. It is
        possible that TRUE PUB MEDIA shows in the search results direct links to
        files or web pages that contain material that is protected by copyright
        or other intellectual property rights. However this material can be
        found and accessed by using the Website, TRUE PUB MEDIA does not and
        cannot grant its users the permission to download, copy or use this
        material. The user alone is responsible and liable of the use, copy and
        / or download of this material. TRUE PUB MEDIA is never responsible or
        liable for sanctions based on law or regulations of law suits of any
        kind against the user as result of using search services provided by
        TRUE PUB MEDIA.
      </p>
      <div className="flex flex-col items-start gap-y-2">
        <span className="text-sm md:text-base">Functioning of the Website</span>
        <p className="font-extralight text-xs md:text-sm text-justify">
          Publisher does every effort to keep the website operational and
          permanently accessible, but Publisher cannot guarantee that the
          Website will permanently be operational and accessible. Publisher and
          / or potential providers of the content of the Website accept under no
          circumstances any liability for loss or damages of whatever nature,
          including but not limited to, direct, indirect, special or
          consequential loss or damage, and / or costs (including but not
          limited to costs of legal assistance) which are wholly or partly a
          result of the use, as well problems with the use of the Website,
          profits, loss of date or other (tangible) goods, arising from or
          related to use, the inability to use, the disallowing of use, the
          operation and / or deficiencies in the functioning of the Website.
        </p>
      </div>
      <div className="flex flex-col items-start gap-y-2">
        <span className="text-sm md:text-base">Information on the Website</span>
        <p className="font-extralight text-xs md:text-sm text-justify">
          Publisher edits the information offered on the Website with the utmost
          care and pays the utmost attention to the composition of the Website.
          Still it is possibly that defects may occur, for this reason.
          Publisher cannot guarantee the accuracy and completeness of the
          information that is published on or via the Website. In addition,
          Publisher does not give any guarantee that the use of the Website will
          (or could) lead to and / or is suitable for achieving the
          Website-users desired goal. The managing and maintaining of the
          Website takes solely place in the Netherlands by Publisher.
          <br />
          <br /> Publisher does not guarantee that the information which is
          accessible on or via the Website is suitable or available for use in
          other countries. If you use the Website from a location outside the
          Netherlands, you are responsible for the compliance with applicable
          local laws and regulations. Publisher does not accept any liability
          for damages, in whatever form, suffered, direct or indirect as a
          consequence of actions or decisions which are based on information
          which is obtained on or via the Website. In addition, no rights can be
          derived from the content of the Website.
          <br />
          <br /> All (Intellectually) Property rights in relation to the
          Website, including but not limited to the rights on the lay-out of the
          content of the Website and the logo of Website, belong exclusively to
          Publisher. This implies that the user of this Website is not allowed -
          except for personal non commercial use - to multiply, send, forward,
          distribute or against payment make available to third parties any
          contents of the Website, without the prior written consent of
          Publisher. Furthermore, all possible rights to the Website and its
          content are reserved.
          <br />
          <br /> You shall refrain from modify, reformat, copy, depict,
          distribute, transmit, publish, give into license, transfer or sell any
          information, products or services which you obtained by using the
          Website, as well create derivative works thereof, except when
          expressly permitted by the applicable law or as authorized in writing
          by Publisher or the applicable licensor (such as an advertiser). You
          shall refrain from displaying in any way, the home page or results
          pages of the Website on your own website.
        </p>
      </div>
      <div className="flex flex-col items-start gap-y-2">
        <span className="text-sm md:text-base">
          Information, websites and files of third parties
        </span>
        <p className="font-extralight text-xs md:text-sm text-justify">
          The website of Publisher includes references and / or hyperlinks to
          third party websites and / or files. The content of these reference
          websites / files are not verified by the Publisher. With the
          references and / or hyperlinks Publisher offers only a possibility to
          the user to obtain further information to the extent as required by
          the user. The reference and / or hyperlinks do not mean that Publisher
          recommends any products or services offered to the user on or via the
          websites.
          <br />
          <br />
          In no event Publisher gives any guarantee or accepts any liability in
          relation to the content, use and availability of such websites /
          files. Nor does Publisher gives any guarantee or accepts any liability
          for damages in any form to the software and / or hardware of the user
          as a consequence of the approach or use of the websites and / or files
          of a third party. The inclusion of any links on Publisher does not
          imply a recommendation or endorse the views expressed within them.
        </p>
      </div>
      <div className="flex flex-col items-start gap-y-2">
        <span className="text-sm md:text-base">
          Copyrights of third parties on texts, images, video files and Music
          files
        </span>
        <p className="font-extralight text-xs md:text-sm text-justify">
          The information on the websites of third parties, or files of third
          parties can be protected by copyrights. It is possible to locate and
          access information and / of files via Website, however this does not
          give a right to the user to download, copy or use this information and
          / or files. In case the user downloads and / or uses this information
          and / or files, the user alone will be responsible and liable.
          Publisher does not accept any liability for legal sanctions and / or
          criminal proceedings against the user as a consequence of use of the
          Website or a website of a third party.
        </p>
      </div>
      <div className="flex flex-col items-start gap-y-2">
        <span className="text-sm md:text-base">Changes</span>
        <p className="font-extralight text-xs md:text-sm text-justify">
          Publisher is allowed to change on or via the Website the information
          provided, including the text of these Terms, at any time without
          further notice. Publisher recommends periodical checking of the
          information given on or via the Website, including the text of these
          Terms, has been changed.
        </p>
      </div>{" "}
      <div className="flex flex-col items-start gap-y-2">
        <span className="text-sm md:text-base">Privacy</span>
        <p className="font-extralight text-xs md:text-sm text-justify">
          Publisher respects the privacy of all users of the Website that use
          the services provided by Publisher. What information Publisher
          collects, how it uses this information and how your privacy is
          guaranteed will be explained in our Privacy Policy. Publisher strongly
          advises you to take notice of this Privacy Policy. By using the
          Website, you agree to be bound to the Privacy Policy.
        </p>
      </div>
      <div className="flex flex-col items-start gap-y-2">
        <span className="text-sm md:text-base">
          Applicable law and jurisdiction
        </span>
        <p className="font-extralight text-xs md:text-sm text-justify">
          These Terms comprise all Publisher agreed with you in relation to the
          use of the Website. These Terms will be construed and governed under
          Dutch law. Any disputes arising out or in connection to the Terms
          shall exclusively be submitted to and finally be resolved by the
          competent court in the Netherlands.
        </p>
      </div>{" "}
      <div className="flex flex-col items-start gap-y-2">
        <span className="text-sm md:text-base">Cookies</span>
        <p className="font-extralight text-xs md:text-sm text-justify">
          Read all about the way we use cookies on our websites.
        </p>
      </div>
      <div className="flex flex-col items-start gap-y-2">
        <span className="text-sm md:text-base">Affiliate disclaimer</span>
        <p className="font-extralight text-xs md:text-sm text-justify">
          TRUE PUB MEDIA offers a shopping experience as easy as possible. We
          have relationships with various companies, organizations and entities
          whose products or services may be listed on TRUE PUB MEDIA. If any of
          those products or services are purchased through the links on this
          website, then TRUE PUB MEDIA may be compensated. It may happen that
          shops compensate us to help promote their products or services so that
          they are easier to find.{" "}
        </p>
      </div>
    </div>
  );
};

export default DisclaimerPage;
