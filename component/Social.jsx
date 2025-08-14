import {FaGithub, FaLinkedin, FaPhoneAlt, FaTelegram} from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/AmirHatami20"},
    {icon: <FaPhoneAlt/>, path: "tel:09309242634"},
    {icon: <FaTelegram/>, path: "https://t.me/amir_hatami0"},
    {icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/amir-hatami-39876a37a/"},
]

const Social = ({containerStyle, iconStyle}) => {
    return (
        <div className={containerStyle}>
            {socials.map((social, index) => (
                <a
                    target="_blank"
                    key={index}
                    href={social.path}
                    className={iconStyle}
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
};

export default Social;