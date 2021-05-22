import React from "react";
import style from "./FormData.module.css";

const { okButton, formData, formDataInput } = style;

const FormData = ({ handleChange, inputValue }) => {
  const { ownerRepoValue, repoNameValue, repoPathValue } = inputValue;

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Hello world");
  };

  return (
    <form className={formData} onSubmit={handleSubmit}>
      <label htmlFor="ownerRepo">Owner Repository</label>
      <input
        className={formDataInput}
        id="ownerRepo"
        type="text"
        onChange={handleChange}
        name="ownerRepo"
        value={ownerRepoValue}
      />
      <label htmlFor="repoName">Repository Name</label>
      <input
        className={formDataInput}
        id="repoName"
        type="text"
        onChange={handleChange}
        name="repoName"
        value={repoNameValue}
      />
      <label htmlFor="repoPath">Repository Path</label>
      <input
        className={formDataInput}
        id="repoPath"
        type="text"
        onChange={handleChange}
        name="repoPath"
        value={repoPathValue}
      />
      <button className={`button ${okButton}`} type="submit">
        Ok
      </button>
    </form>
  );
};

export default FormData;
