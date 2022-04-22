import React from "react";

function Country({config, id}) {

  const {name, population, entity} = config;
  return (
    <div id={id}>
      <table className="header-table">
        <tbody>
          <tr>
            <td>{name}</td>
            <td> {entity}</td>
          </tr>
          <tr>
            <td>Population</td>
            <td>{population}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Country;
