import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: process.env.AUTH_TOKEN_GITHUB });

export const createAndUpdateFile = async req => {
  const { path } = req.query;
  const { commitMsg, userMsg } = req.body;
  const encText = btoa(`${userMsg}`);

  const response = await octokit.request(
    `PUT /repos/${process.env.USER_REPOSITORY}/${process.env.USER_REPOSITORY_NAME}/contents/${path}`,
    {
      message: `${commitMsg}`,
      content: encText,
      org: "octokit",
      type: "private",
    },
  );

  return response;
};

export const getFile = async req => {
  const { path } = req.query;
  const response = await octokit.request(
    `GET /repos/${process.env.USER_REPOSITORY}/${process.env.USER_REPOSITORY_NAME}/contents/${path}`,
  );

  return response;
};

export const deleteFile = async req => {
  const { path } = req.query;
  const { commitMsg } = req.body;

  const response = await octokit.request(
    `DELETE /repos/${process.env.USER_REPOSITORY}/${process.env.USER_REPOSITORY_NAME}/contents/${path}`,
    {
      message: `${commitMsg}`,
      org: "octokit",
      type: "private",
    },
  );

  return response;
};
