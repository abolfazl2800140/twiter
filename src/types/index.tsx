export type Comment = {
  name: string;
  email: string;
  title: string;
  id: number;
};

export type TwiteType = {
  autherName: string;
  autherEmail: string;
  title: string;
  twiteId: number;
  comments: Comment[];
  likes: number[];
  date: number;
};

export type follwerType = {
  name: string;
  id: number;
};

export type UserType = {
  name: string;
  email: string;
  passwod: string;
  id: number;
  followers: follwerType[];
};
