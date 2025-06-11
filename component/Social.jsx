import Link from "next/link";

import {FaGithub, FaPhoneAlt, FaTelegram, FaWhatsapp} from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/AmirHatami20"},
    {icon: <FaPhoneAlt/>, path: "tel:09309242634"},
    {icon: <FaTelegram/>, path: "https://t.me/amir_hatami0"},
    {icon: <FaWhatsapp/>, path: ""},
]

const Social = ({containerStyle, iconStyle}) => {
    return (
        <div className={containerStyle}>
            {socials.map((social, index) => (
                <Link
                    key={index}
                    href={social.path}
                    className={iconStyle}
                >
                    {social.icon}
                </Link>
            ))}
        </div>
    );
};

export default Social;