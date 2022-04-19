import React from "react";
import Button from "react-bootstrap/Button";

function BootButtons({ changeGraph }) {
  return (
    <div className="changeButtonHolder">
      <Button
        variant="outline-success"
        id=''
        onClick={(e) => {
          changeGraph(e.target.id);
        }}
      >
        Growth
      </Button>
      <Button
        variant="outline-success"
        id='true'
        onClick={(e) => {
          changeGraph(e.target.id);
        }}
      >
        P. share
      </Button>
    </div>
  );
}

export default BootButtons;
