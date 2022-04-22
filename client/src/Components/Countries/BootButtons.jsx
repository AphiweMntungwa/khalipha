import React from "react";
import Button from "react-bootstrap/Button";

function BootButtons({ changeGraph, cname, buttonText }) {
  const {first, second} = buttonText
  return (
    <div className={`changeButtonHolder ${cname}`}>
      <Button
        variant="outline-success"
        id=''
        onClick={(e) => {
          changeGraph(e.target.id);
        }}
      >
        {first}
      </Button>
      <Button
        variant="outline-success"
        id='true'
        onClick={(e) => {
          changeGraph(e.target.id);
        }}
      >
        {second}
      </Button>
    </div>
  );
}

export default BootButtons;
