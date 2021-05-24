import React, { useState } from "react";

import { FormData, GroupButton } from "../components";
import { createFileGithub, getFileGithub, deleteFileGithub } from "./ui/api/github";

const Home = () => {
  const [topic, setTopic] = useState("");
  const [action, setAction] = useState("");
  const [rawData, setRawData] = useState(null);

  const buttonTopicLabelList = ["Content", "Repository", "User"];
  const buttonActionLabelList = ["GET", "POST", "UPDATE", "DELETE"];

  const handleChange = (event, setItem) => setItem(event.target.name);

  const handlers = {
    postContent: (event, inputValue) => {
      event.preventDefault();
      const { repoName, repoOwner, repoPath, userMsg, token } = inputValue;

      createFileGithub(repoName, repoOwner, repoPath, userMsg, token);
    },

    getContent: (event, inputValue) => {
      event.preventDefault();
      const { repoOwner, repoName, repoPath, token } = inputValue;

      const repoData = getFileGithub(repoName, repoOwner, repoPath, token);
      setRawData(repoData);
    },

    deleteContent: (event, inputValue) => {
      event.preventDefault();
      const { repoOwner, repoName, repoPath, token } = inputValue;

      deleteFileGithub(repoOwner, repoName, repoPath, token);
    },
  };

  return (
    <div className={"home"}>
      <h1>Hit the topic you want to make an action in Github</h1>
      <GroupButton dataList={buttonTopicLabelList} handle={e => handleChange(e, setTopic)} />
      {topic && !action && (
        <GroupButton dataList={buttonActionLabelList} handle={e => handleChange(e, setAction)} />
      )}
      {action && <FormData handlerAction={handlers[action.toLocaleLowerCase() + topic]} />}
      <br />
      <br />
      {rawData}
    </div>
  );
};

export default Home;
