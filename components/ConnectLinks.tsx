import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

type ConnectLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const ConnectLinks: ConnectLink[] = [
  {
    label: "Email",
    href: "mailto:laminhkhanhdev@gmail.com",
    icon: <IoMdMail />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/minhkhanh.la.182",
    icon: <FaFacebook />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/myh_hkah",
    icon: <FaInstagram />,
  },
  {
    label: "Github",
    href: "https://github.com/lmkhanhdev",
    icon: <FaGithub />,
  },
  {
    label: "X",
    href: "https://twitter.com/LaMinhKhnh1",
    icon: <FaXTwitter />,
  },
];

export default ConnectLinks;
