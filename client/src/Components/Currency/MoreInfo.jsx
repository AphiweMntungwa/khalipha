import React, { useEffect, useState } from "react";
import useInterval from "use-interval";
import { Alert, Button } from "react-bootstrap";

let count = 0;
function MoreInfo() {
  const [header, setHeader] = useState(`The API free plan 
  restricts change of base currency from EUR,currency
  can only be paired against the EURO. fmt EUR/???`);
  const [headerText, setHeaderText] = useState("");
  const [interval, breakInterval] = useState(40);
  const [show, setShow] = useState(true);

  useInterval(() => {
    if (count < header.length) {
      setHeaderText(`${headerText + header[count]}`);
      count += 1;
    } else {
      breakInterval(null);
      setHeaderText(header);
    }
  }, interval);

  return (
    <Alert show={show} variant="success" className="header-div">
      <p>{headerText}</p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button onClick={() => setShow(false)} variant="outline-success">
          close Alert!
        </Button>
      </div>
    </Alert>
  );
}



export default MoreInfo;
