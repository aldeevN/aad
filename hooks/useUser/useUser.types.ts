export interface Master {
  name: string;
  surname: string;
  role: string;
  profile_pic: any;
  email: string;
  phone_number: string;
  telegram?: any;
}

export interface IUser {
  name: string;
  surname: string;
  email: string;
  phone_number: string;
  telegram?: any;
  profile_pic: any;
  haznaint_user_id: number;
  score_personal: number;
  score_team: number;
  role: string;
  status: string;
  country: string;
  ref_url: number;
  master: Master;
  send_candidates: boolean;
}

