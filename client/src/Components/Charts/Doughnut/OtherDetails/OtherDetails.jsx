import React from "react";
import "./otherdet.css";

function OtherDetails({ paragraph, linkTo }) {
  return (
    <div>
      <p className="country-paragraph">
        {paragraph}
        <a href={linkTo}> &nbsp;
          <span className="link-span">&#x02197;</span>
        </a>
      </p>
    </div>
  );
}

export default OtherDetails;
