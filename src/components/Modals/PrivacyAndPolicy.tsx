import React from "react";
import { IconCloseCircle } from "../../components/icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const PrivacyAndPolicy: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-monochrome-800 rounded-lg shadow-lg p-6 max-w-[682px]">
          <div className="flex justify-between">
            <h1 className="modal-title text-[32px] font-bold">
              Privacy and Policy
            </h1>
            <button className="" onClick={onClose}>
              <IconCloseCircle width={30} height={30} fill={"#A1A1A1"} />
            </button>
          </div>
          <hr className="text-monochrome-500 border-t-2 border-monochrome-600 my-5" />
          <div className="modal-body my-4 text-monochrome-100 font-normal overflow-y-scroll h-96 pr-1">
            <h2 className="text-[24px] font-bold mb-5">Privacy and Policy</h2>
            <p className="mb-5">
              At Lister, accessible from lister.co.id, one of our main
              priorities is the privacy of our visitors. This Privacy Policy
              document contains types of information that is collected and
              recorded by Lister and how we use it.
            </p>
            <p className="mb-5">
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </p>
            <p className="mb-5">
              <p className="font-bold">Log Files</p>
              Lister follows a standard procedure of using log files. These
              files log visitors when they visit websites. All hosting companies
              do this as part of hosting services' analytics. The information
              collected by log files include internet protocol (IP) addresses,
              browser type, Internet Service Provider (ISP), date and time
              stamp, referring/exit pages, and possibly the number of clicks.
              These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users' movement on the
              website, and gathering demographic information.
            </p>
            <p className="mb-5">
              <p className="font-bold">Cookies and Web Beacons</p>
              Like any other website, Lister uses "cookies". These cookies are
              used to store information including visitors' preferences, and the
              pages on the website that the visitor accessed or visited. The
              information is used to optimize the users' experience by
              customizing our web page content based on visitors' browser type
              and/or other information.
            </p>
            <p className="mb-5">
              <p className="font-bold">Privacy Policies</p>
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of Lister.
            </p>
            <p className="mb-5">
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on Lister, which
              are sent directly to users' browser. They automatically receive
              your IP address when this occurs. These technologies are used to
              measure the effectiveness of their advertising campaigns and/or to
              personalize the advertising content that you see on websites that
              you visit.
            </p>
            <p className="mb-5">
              Note that Lister has no access to or control over these cookies
              that are used by third-party advertisers.
            </p>
            <p className="mb-5">
              <p className="font-bold">Third Party Privacy Policies</p>
              Lister's Privacy Policy does not apply to other advertisers or
              websites. Thus, we are advising you to consult the respective
              Privacy Policies of these third-party ad servers for more detailed
              information. It may include their practices and instructions about
              how to opt-out of certain options.
            </p>
            <p className="mb-5">
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers'
              respective websites. What Are Cookies?
            </p>
            <p className="mb-5">
              <p className="font-bold">Children's Information</p>
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>
            <p className="mb-5">
              Lister does not knowingly collect any Personal Identifiable
              Information from children under the age of 13. If you think that
              your child provided this kind of information on our website, we
              strongly encourage you to contact us immediately and we will do
              our best efforts to promptly remove such information from our
              records.
            </p>
            <p className="mb-5">
              <p className="font-bold">Online Privacy Policy Only</p>
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in Lister. This policy is not
              applicable to any information collected offline or via channels
              other than this website.
            </p>
            <p className="mb-5">
              <p className="font-bold">Consent</p>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PrivacyAndPolicy;
