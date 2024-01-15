import React from "react";
import { IconCloseCircle } from "../../components/icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const TermsAndConditions: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-monochrome-800 rounded-lg shadow-lg p-6 max-w-[682px]">
          <div className="flex justify-between">
            <h1 className="modal-title text-[32px] font-bold">
              Terms and Conditions
            </h1>
            <button className="" onClick={onClose}>
              <IconCloseCircle width={30} height={30} fill={"#A1A1A1"} />
            </button>
          </div>
          <hr className="text-monochrome-500 border-t-2 border-monochrome-600 my-5" />
          <div className="modal-body my-4 text-monochrome-100 font-normal overflow-y-scroll h-96 pr-1">
            <h2 className="text-[24px] font-bold mb-5">Terms and Conditions</h2>
            <p className="mb-5">Welcome to Lister!</p>
            <p className="mb-5">
              These terms and conditions outline the rules and regulations for
              the use of PT. Lister Teknologi Edukasi's Website, located at
              lister.co.id.
            </p>
            <p className="mb-5">
              By accessing this website we assume you accept these terms and
              conditions. Do not continue to use Lister if you do not agree to
              take all of the terms and conditions stated on this page.
            </p>
            <p className="mb-5">
              The following terminology applies to these Terms and Conditions,
              Privacy Statement and Disclaimer Notice and all Agreements:
              "Client", "You" and "Your" refers to you, the person log on this
              website and compliant to the Company's terms and conditions. "The
              Company", "Ourselves", "We", "Our" and "Us", refers to our
              Company. "Party", "Parties", or "Us", refers to both the Client
              and ourselves. All terms refer to the offer, acceptance and
              consideration of payment necessary to undertake the process of our
              assistance to the Client in the most appropriate manner for the
              express purpose of meeting the Client's needs in respect of
              provision of the Company's stated services, in accordance with and
              subject to, prevailing law of id. Any use of the above terminology
              or other words in the singular, plural, capitalization and/or
              he/she or they, are taken as interchangeable and therefore as
              referring to same.
            </p>
            <p className="mb-5">
              <p className="font-bold">Cookies</p>
              We employ the use of cookies. By accessing Lister, you agreed to
              use cookies in agreement with the PT. Lister Teknologi Edukasi's
              Privacy Policy.
            </p>
            <p className="mb-5">
              Most interactive websites use cookies to let us retrieve the
              user's details for each visit. Cookies are used by our website to
              enable the functionality of certain areas to make it easier for
              people visiting our website. Some of our affiliate/advertising
              partners may also use cookies.
            </p>
            <p className="mb-5">
              <p className="font-bold">License</p>
              Unless otherwise stated, PT. Lister Teknologi Edukasi and/or its
              licensors own the intellectual property rights for all material on
              Lister. All intellectual property rights are reserved. You may
              access this from Lister for your own personal use subjected to
              restrictions set in these terms and conditions.
            </p>
            <p className="mb-5">
              <p>You must not:</p>
              <ul className="list-disc ml-5">
                <li>Republish material from Lister</li>
                <li>Sell, rent or sub-license material from Lister</li>
                <li>Reproduce, duplicate or copy material from Lister</li>
                <li>Redistribute content from Lister</li>
              </ul>
              <p>This Agreement shall begin on the date hereof.</p>
            </p>
            <p className="mb-5">
              Parts of this website offer an opportunity for users to post and
              exchange opinions and information in certain areas of the website.
              PT. Lister Teknologi Edukasi does not filter, edit, publish or
              review Comments prior to their presence on the website. Comments
              do not reflect the views and opinions of PT. Lister Teknologi
              Edukasi,its agents and/or affiliates. Comments reflect the views
              and opinions of the person who posts their views and opinions. To
              the extent permitted by applicable laws, PT. Lister Teknologi
              Edukasi shall not be liable for the Comments or for any liability,
              damages or expenses caused and/or suffered as a result of any use
              of and/or posting of and/or appearance of the Comments on this
              website.
            </p>
            <p className="mb-5">
              PT. Lister Teknologi Edukasi reserves the right to monitor all
              Comments and to remove any Comments which can be considered
              inappropriate, offensive or causes breach of these Terms and
              Conditions.
            </p>
            <p className="mb-5">
              <p>You warrant and represent that:</p>
              <ul className="list-disc ml-5">
                <li>
                  You are entitled to post the Comments on our website and have
                  all necessary licenses and consents to do so;
                </li>
                <li>
                  The Comments do not invade any intellectual property right,
                  including without limitation copyright, patent or trademark of
                  any third party;
                </li>
                <li>
                  The Comments do not contain any defamatory, libelous,
                  offensive, indecent or otherwise unlawful material which is an
                  invasion of privacy
                </li>
                <li>
                  The Comments will not be used to solicit or promote business
                  or custom or present commercial activities or unlawful
                  activity.
                </li>
              </ul>
              <p>
                You hereby grant PT. Lister Teknologi Edukasi a non-exclusive
                license to use, reproduce, edit and authorize others to use,
                reproduce and edit any of your Comments in any and all forms,
                formats or media.
              </p>
            </p>
            <p className="mb-5">
              <p className="font-bold">Hyperlinking to our Content</p>
              <p>
                The following organizations may link to our Website without
                prior written approval:
              </p>
              <ul className="list-disc ml-5">
                <li>Government agencies;</li>
                <li>Search engines;</li>
                <li>News organizations;</li>
                <li>
                  Online directory distributors may link to our Website in the
                  same manner as they hyperlink to the Websites of other listed
                  businesses; and
                </li>
                <li>
                  System wide Accredited Businesses except soliciting non-profit
                  organizations, charity shopping malls, and charity fundraising
                  groups which may not hyperlink to our Website.
                </li>
              </ul>
              <p>
                These organizations may link to our home page, to publications
                or to other Website information so long as the link: (a) is not
                in any way deceptive; (b) does not falsely imply sponsorship,
                endorsement or approval of the linking party and its products
                and/or services; and (c) fits within the context of the linking
                party's site.
              </p>
            </p>
            <p className="mb-5">
              <p>
                We may consider and approve other link requests from the
                following types of organizations:
              </p>
              <ul className="list-disc ml-5">
                <li>
                  commonly-known consumer and/or business information sources;
                </li>
                <li>dot.com community sites;</li>
                <li>associations or other groups representing charities;</li>
                <li>online directory distributors;</li>
                <li>internet portals;</li>
                <li>accounting, law and consulting firms; and</li>
                <li>educational institutions and trade associations.</li>
              </ul>
              <p>
                We will approve link requests from these organizations if we
                decide that: (a) the link would not make us look unfavorably to
                ourselves or to our accredited businesses; (b) the organization
                does not have any negative records with us; (c) the benefit to
                us from the visibility of the hyperlink compensates the absence
                of PT. Lister Teknologi Edukasi; and (d) the link is in the
                context of general resource information.
              </p>
            </p>
            <p className="mb-5">
              These organizations may link to our home page so long as the link:
              (a) is not in any way deceptive; (b) does not falsely imply
              sponsorship, endorsement or approval of the linking party and its
              products or services; and (c) fits within the context of the
              linking party's site.
            </p>
            <p className="mb-5">
              If you are one of the organizations listed in paragraph 2 above
              and are interested in linking to our website, you must inform us
              by sending an e-mail to PT. Lister Teknologi Edukasi. Please
              include your name, your organization name, contact information as
              well as the URL of your site, a list of any URLs from which you
              intend to link to our Website, and a list of the URLs on our site
              to which you would like to link. Wait 2-3 weeks for a response.
            </p>
            <p className="mb-5">
              <p>
                Approved organizations may hyperlink to our Website as follows:
              </p>
              <ul className="list-disc ml-5">
                <li>By use of our corporate name; or</li>
                <li>
                  By use of the uniform resource locator being linked to; or
                </li>
                <li>
                  By use of any other description of our Website being linked to
                  that makes sense within the context and format of content on
                  the linking party's site.
                </li>
                <li>online directory distributors;</li>
                <li>
                  No use of PT. Lister Teknologi Edukasi's logo or other artwork
                  will be allowed for linking absent a trademark license
                  agreement.
                </li>
              </ul>
            </p>
            <p className="mb-5">
              <p className="font-bold">iFrames</p>
              Without prior approval and written permission, you may not create
              frames around our Web Pages that alter in any way the visual
              presentation or appearance of our Website.
            </p>
            <p className="mb-5">
              <p className="font-bold">Content Liability</p>
              We shall not be held responsible for any content that appears on
              your Website. You agree to protect and defend us against all
              claims that are rising on your Website. No link(s) should appear
              on any Website that may be interpreted as libelous, obscene or
              criminal, or which infringes, otherwise violates, or advocates the
              infringement or other violation of, any third party rights.
            </p>
            <p className="mb-5">
              <p className="font-bold">Reservation of Rights</p>
              We reserve the right to request that you remove all links or any
              particular link to our Website. You approve to immediately remove
              all links to our Website upon request. We also reserve the right
              to amend these terms and conditions and its linking policy at any
              time. By continuously linking to our Website, you agree to be
              bound to and follow these linking terms and conditions.
            </p>
            <p className="mb-5">
              <p className="font-bold">Removal of links from our website</p>
              If you find any link on our Website that is offensive for any
              reason, you are free to contact and inform us any moment. We will
              consider requests to remove links but we are not obligated to or
              so or to respond to you directly. We do not ensure that the
              information on this website is correct, we do not warrant its
              completeness or accuracy; nor do we promise to ensure that the
              website remains available or that the material on the website is
              kept up to date.
            </p>
            <p className="mb-5">
              <p className="font-bold">Disclaimer</p>To the maximum extent
              permitted by applicable law, we exclude all representations,
              warranties and conditions relating to our website and the use of
              this website. Nothing in this disclaimer will:
              <ul className="list-disc ml-5">
                <li>
                  limit or exclude our or your liability for death or personal
                  injury;
                </li>
                <li>
                  limit or exclude our or your liability for fraud or fraudulent
                  misrepresentation;
                </li>
                <li>
                  limit any of our or your liabilities in any way that is not
                  permitted under applicable law; or
                </li>
                <li>
                  exclude any of our or your liabilities that may not be
                  excluded under applicable law.
                </li>
              </ul>
              <p>
                The limitations and prohibitions of liability set in this
                Section and elsewhere in this disclaimer: (a) are subject to the
                preceding paragraph; and (b) govern all liabilities arising
                under the disclaimer, including liabilities arising in contract,
                in tort and for breach of statutory duty.
              </p>
            </p>
            <p className="mb-5">
              As long as the website and the information and services on the
              website are provided free of charge, we will not be liable for any
              loss or damage of any nature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TermsAndConditions;
