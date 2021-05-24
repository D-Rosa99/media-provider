import { Octokit } from "octokit";
import { encode } from "js-base64";

export const createOrUpdateFile = async (req, res) => {
  const { repoOwner, repoName, path, token } = req.query;
  const { userMsg } = req.body;

  const commitMsg = `Creating a file at ${path}`;
  const encText = encode(userMsg);

  const sha = await getShaFile(req);

  const octokit = new Octokit({ auth: token });

  await octokit.rest.repos.createOrUpdateFileContents({
    owner: repoOwner,
    repo: repoName,
    content: encText,
    message: commitMsg,
    path,
    sha,
  });

  return res.status(201).send(true);
};

export const getFileGithub = async (req, res) => {
  const { repoOwner, repoName, path, token } = req.query;

  const octokit = new Octokit({ auth: token });
  const { data } = await octokit.rest.repos.getContent({ owner: repoOwner, path, repo: repoName });

  return res.status(200).send(data);
};

export const deleteFileGithub = async (req, res) => {
  const { repoOwner, repoName, path, token } = req.query;
  const commitMsg = `Deleting a file at ${path}`;

  const sha = await getShaFile(req);

  const octokit = new Octokit({ auth: token });

  await octokit.rest.repos.deleteFile({
    owner: repoOwner,
    repo: repoName,
    path,
    message: commitMsg,
    sha,
  });

  return res.status(200).send(true);
};

const getShaFile = async req => {
  const { repoOwner, repoName, path, token } = req.query;

  const octokit = new Octokit({ auth: token });
  const { data } = await octokit.rest.repos.getContent({ owner: repoOwner, path, repo: repoName });

  return data.sha;
};
