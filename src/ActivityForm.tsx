//import { useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
//import { ActivityFormInterface } from "./types/Activity";
import { ActivityFormState } from "./FormState";
import { useRecoilState } from "recoil";

export function ActivityForm() {

  const [formValues, setFormValues] = useRecoilState(ActivityFormState);

  const activityTypes: Array<string> = [
    "education",
    "recreational",
    "social",
    "diy",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork",
  ];

  const accessibilityValues = [
    { value: 0.0, label: "Most accessible", variant: "success" },
    { value: 0.25, label: "Accessible", variant: "secondary" },
    { value: 0.5, label: "Intermediate", variant: "secondary" },
    { value: 0.75, label: "Difficult", variant: "secondary" },
    { value: 1.0, label: "Most Difficult", variant: "secondary" },
  ];

  const pricesValues = [
    { value: 0.0, label: "Free", variant: "success" },
    { value: 0.25, label: "Accessible", variant: "secondary" },
    { value: 0.5, label: "Intermediate", variant: "secondary" },
    { value: 0.75, label: "Expensive", variant: "secondary" },
    { value: 1.0, label: "Very Expensive", variant: "secondary" },
  ];

  const handleInput = (event: any) => {
    let {
      target: { name, value },
    } = event;
    
    if(name !== "type") value = Number(value);
    setFormValues((values) => ({ ...values, [name]: value }));
  };

  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Accessibility</Form.Label>
            <div className="d-flex flex-wrap gap-2">
              {accessibilityValues.map(({ value, label, variant }, index) => {
                return (
                  <Button
                    value={value}
                    variant={variant}
                    name="accessibility"
                    size="sm"
                    onClick={handleInput}
                    key={index}
                  >
                    {label}
                  </Button>
                );
              })}
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <div className="d-flex flex-wrap gap-2">
              {pricesValues.map(({ value, label, variant }, index) => {
                return (
                  <Button
                    value={value}
                    variant={variant}
                    name="price"
                    size="sm"
                    onClick={handleInput}
                    key={index}
                  >
                    {label}
                  </Button>
                );
              })}
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Type</Form.Label>
            <Form.Select name="type" onChange={handleInput}>
              {activityTypes.map((type, index) => {
                const capitalized =
                  type.charAt(0).toUpperCase() + type.slice(1);
                return (
                  <option value={type} key={index}>
                    {capitalized}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Participants</Form.Label>
            <Form.Control
              type="number"
              name="participants"
              onChange={handleInput}
            />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}
