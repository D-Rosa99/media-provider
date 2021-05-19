import React, { useState } from "react";
import { FormData } from "../components";

const Home = () => {
  const infoRequest = {
    ownerRepoValue: "",
    repoNameValue: "",
    repoPathValue: "",
  };
  const [inputValue, setInputValue] = useState(infoRequest);

  const handleChange = e => {
    const { name, value } = e.target;
    setInputValue(prevProps => ({ ...prevProps, [name]: value }));
  };

  return (
    <div>
      <FormData handleChange={handleChange} inputValue={inputValue} />
      {/* <button className="button">content</button>
      <button className="button">Repository</button>
      <button className="button">User</button>
      <button className="button">Click Me</button> */}
    </div>
  );
};

export default Home;
