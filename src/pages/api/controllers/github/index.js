import { Octokit } from "@octokit/core";

export const createFile = async () => {
  try {
    const shaFile = "625df4415aab96ff2292f0e6f1ce5e0210dbd9e3";
    const encText = btoa("Update this file ");
    const octokit = new Octokit({ auth: "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" });

    const response = await octokit.request("PUT /repos/D-Rosa99/test-github/contents/file.js", {
      message: "creating file",
      content: encText,
      org: "octokit",
      type: "private",
      sha: shaFile,
    });

    console.log(true);
    console.log(response);
  } catch (error) {
    console.log(`Something goes wong ${error}`);
  }
};

export const postFile = async (req, res) => {
  res.send("Good bye world");
};
