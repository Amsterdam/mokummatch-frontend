export interface ISocials {
  whatsapp?: string | null;
  facebook?: string | null;
  instagram?: string | null;
  twitter?: string | null;
}

export interface ISocialLinkData {
  id?: number;
  name?: string;
  socials?: ISocials;
}

export interface IAddress {
  street: string;
  zip: string;
  city: string;
}

export interface IPhoneNumber {
  primary: string;
}

export interface IGeneral {
  name: string;
  age: number;
  address: IAddress;
  phone: IPhoneNumber;
  email: string;
  profile_picture: string;
  gender: string;
}

export interface IInstance {
  id: number;
  type: string;
  affiliation: string;
  description: string;
  general: IGeneral;
  socials: ISocials;
}
