export enum EAnswer {
  'agree',
  'disagree',
  'neutral',
  'skipped',
}

export interface IInstanceProfile {
  id?: number;
  name?: string;
  gender?: string;
  description?: string;
  biography?: string;
  score?: number;
  profilePicture?: string;
  coordinates?: [number, number];
  socials?: object;
}

