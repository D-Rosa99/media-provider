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
    <div className={"home"}>
      <h1>Hit the topic you want to make an action in Github</h1>
      <div className={"buttonGroup"}>
        <button className="button">content</button>
        <button className="button">Repository</button>
        <button className="button">User</button>
        <button className="button">Click Me</button>
      </div>
      <FormData handleChange={handleChange} inputValue={inputValue} />
    </div>
  );
};

export default Home;
