import { Octokit } from "octokit";

const { TOKEN_GITHUB, REPO_NAME, OWNER_NAME } = process.env;

const octokit = new Octokit({ auth: TOKEN_GITHUB });

//TODO ask the user the type of the file to create
export const createFile = async (req, res) => {
  const { userMsg, path } = req.body;
  const commitMsg = `Creating a file at ${path}`;
  const encText = btoa(userMsg);

  await octokit.rest.repos.createOrUpdateFileContents({
    owner: OWNER_NAME,
    repo: REPO_NAME,
    content: encText,
    message: commitMsg,
    path,
  });

  return res.status(201).send(true);
};
