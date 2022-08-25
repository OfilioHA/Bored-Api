import { atom } from "recoil";
import { ActivityFormInterface } from "./types/Activity";

export const ActivityFormState = atom({
  key: "ActivityForm",
  default: {
    accessibility: null,
    participants: null,
    price: null,
    type: "",
  } as ActivityFormInterface,
});
