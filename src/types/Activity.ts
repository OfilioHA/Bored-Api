export type ActivityInterface = {
  activity: string;
  accessibility: number;
  key: string;
  link: string;
  participants: number;
  price: number;
  type: string;
};



export type ActivityFormInterface = {
  accessibility: number|null;
  participants: number|null;
  price: number|null;
  type: string|null;
};