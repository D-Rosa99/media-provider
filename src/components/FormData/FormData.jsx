import React, {useState} from "react";
import style from "./FormData.module.css";

const { okButton, formData, formDataInput } = style;

const FormData = ({ handlerAction }) => {
  const infoRequire = {
    repoOwner: "",
    repoName: "",
    repoPath: "",
    userMsg: "",
    token: "",
  };

  const [inputValue, setInputValue] = useState(infoRequire);
  const { repoOwner, repoName, repoPath, userMsg, token } = inputValue;

  const handleChange = e => {
    const { name, value } = e.target;
    setInputValue(prevProps => ({ ...prevProps, [name]: value }));
  };

  return (
    <form className={formData} onSubmit={e => handlerAction(e, inputValue)}>
      <label htmlFor="owner">Owner Repository</label>
      <input
        className={formDataInput}
        id="owner"
        type="text"
        onChange={handleChange}
        name="repoOwner"
        value={repoOwner}
      />
      <label htmlFor="repo">Repository Name</label>
      <input
        className={formDataInput}
        id="repo"
        type="text"
        onChange={handleChange}
        name="repoName"
        value={repoName}
      />
      <label htmlFor="path">Repository Path</label>
      <input
        className={formDataInput}
        id="path"
        type="text"
        onChange={handleChange}
        name="repoPath"
        value={repoPath}
      />
      <label htmlFor="message">Content</label>
      <input
        className={formDataInput}
        id="message"
        type="text"
        onChange={handleChange}
        name="userMsg"
        value={userMsg}
      />
      <label htmlFor="userToken">Token</label>
      <input
        className={formDataInput}
        id="userToken"
        type="text"
        onChange={handleChange}
        name="token"
        value={token}
      />
      <button className={`button ${okButton}`} type="submit">
        Ok
      </button>
    </form>
  );
};

export default FormData;
