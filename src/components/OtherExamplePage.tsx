import React, { FC } from "react";
import EventsExample from "./EventsExample";
import Card, { CardVariant } from "./Card";

const OtherExamplePage: FC = () => {
  return (
    <div>
      <EventsExample />
      <Card
        onClick={(num) => console.log("click", num)}
        variant={CardVariant.outline}
        width="200px"
        height="200px"
      >
        <button>Button</button>
      </Card>
    </div>
  );
};

export default OtherExamplePage;
