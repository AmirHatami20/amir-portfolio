
export interface AboutInfo {
  fieldName: string;
  fieldValue: string;
}

export interface About {
  title: string;
  description: string;
  info: AboutInfo[];
}