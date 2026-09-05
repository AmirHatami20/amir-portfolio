import { socials } from "@/data/socials";
import { SocialProps } from "@/types/social";

const Social = ({ containerStyle = "", iconStyle = "" }: SocialProps) => {
  return (
    <div className={containerStyle}>
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.path}
            target="_blank"
            rel="noopener noreferrer"
            href={social.path}
            className={iconStyle}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default Social;
