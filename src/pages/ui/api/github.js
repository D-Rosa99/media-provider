import axios from "axios";

export const createFileGithub = (repoName, repoOwner, repoPath, userMsg, token) =>
  axios.post(
    `http://localhost:3000/api/github?repoOwner=${repoOwner}&repoName=${repoName}&path=${repoPath}&token=${token}`,
    {
      userMsg,
    },
  );

export const getFileGithub = (repoOwner, repoName, repoPath, token) =>
  axios.get(
    `http://localhost:3000/api/github?repoOwner=${repoOwner}&repoName=${repoName}&path=${repoPath}&token=${token}`,
  );

export const deleteFileGithub = (repoOwner, repoName, repoPath, token) =>
  axios.delete(
    `http://localhost:3000/api/github?repoOwner=${repoOwner}&repoName=${repoName}&path=${repoPath}&token=${token}`,
  );

export const updateFileGithub = (repoName, repoOwner, repoPath, userMsg, token) =>
  axios.post(
    `http://localhost:3000/api/github?repoOwner=${repoOwner}&repoName=${repoName}&path=${repoPath}&token=${token}`,
    {
      userMsg,
    },
  );
