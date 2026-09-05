import type { IconType } from "react-icons";

export interface SocialItem {
  icon: IconType;
  path: string;
}

export interface SocialProps {
  containerStyle?: string;
  iconStyle?: string;
}
