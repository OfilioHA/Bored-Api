import { ActivityInterface } from "./types/Activity";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ActivityFormState } from "./FormState";
import axios from "axios";

export function Activity() {
  const initial: ActivityInterface = {
    activity: "",
    accessibility: 0,
    key: "",
    link: "",
    participants: 0,
    price: 0,
    type: "",
  };

  const [formValues] = useRecoilState(ActivityFormState);
  const [newActivity, setActivity] = useState<ActivityInterface>(initial);

  useEffect(() => {
    const fetchData = async () => {
      let route: string = "";
      console.log(formValues);
      Object.entries(formValues).forEach(([key, value]) => {
        if (value === "" || value === null) return;
        if(["accessibility", "price"].includes(key)){
          ["min", "max"].forEach((element) => {
            value = value as string;
            value = JSON.parse(value);
            key = element + key; 
            //@ts-ignore: Object is possibly 'null'.
            value = value[key as keyof typeof value];
          })
        }
        route = !route.length ? `?${key}=${value}` : route + `&${key}=${value}`;
      });

      
      console.log(route);
      //const response = await axios.get("http://www.boredapi.com/api/activity/"+ route);
      //const { data } = response;
      //setActivity(data);
    };
    fetchData();
  }, [formValues]);

  return (
    <Card>
      <Card.Body>{newActivity.activity}</Card.Body>
    </Card>
  );
}
