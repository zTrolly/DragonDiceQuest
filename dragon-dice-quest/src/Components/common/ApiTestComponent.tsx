import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiTestComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://www.dnd5eapi.co/api/spells/acid-arrow")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div>
      <h1>API Test</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default ApiTestComponent;
