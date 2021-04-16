import React, { useState } from "react";
const { Octokit } = require("@octokit/core");

export default function Github() {
  // const [responseData, setResponseData] = useState([]);
  const [modifiedData, setModifiedData] = useState({
    githubUser: "",
    contentMessage: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setModifiedData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreateFile = async () => {
    try {
      const enc = btoa(`${modifiedData.contentMessage}`);
      const octokit = new Octokit({
        auth: `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`,
      });

      const response = await octokit.request(
        "PUT /repos/D-Rosa99/strapi-cms-nextjs/contents/post.js",
        {
          message: "updating post file in the repository",
          content: enc,
          org: "octokit",
          type: "private",
        },
      );

      console.log(response);
      console.log(true);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleDeleteFile = async () => {
  //   try {
  //     const octokit = new Octokit({
  //       auth: `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`,
  //     });

  //     const response = await octokit.request(
  //       "DELETE /repos/D-Rosa99/strapi-cms-nextjs/contents/post.js",
  //       {
  //         message: "deleting a file in a repository",
  //         org: "octokit",
  //         type: "private",
  //       }
  //     );

  //     console.log(response);
  //     console.log(true);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSubmit = async e => {
    e.preventDefault();

    // const { data } = await axios.get(
    //   `https://api.github.com/users/${modifiedData.githubUser}/repos`
    // );
    // setResponseData(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="formInput">
        <label>
          github userName{" "}
          <input
            type="text"
            name="githubUser"
            placeholder="Enter a user"
            value={modifiedData.githubUser}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button disabled={modifiedData.githubUser.length === 0 ? true : false} type="submit">
          Get User repositories
        </button>
        <br />
        <br />
        <br />
        <br />
        <label>
          Enter the content message of the file{" "}
          <input
            type="text"
            name="contentMessage"
            placeholder="Enter a message"
            value={modifiedData.contentMessage}
            onChange={handleChange}
          />
        </label>
        <br />
        <button onClick={handleCreateFile}>Post a File in a repository</button>
        {/* <button onClick={handleDeleteFile}>
          Deleting a File in a repository
        </button> */}
      </form>

      {/* <ul>
        {responseData &&
          responseData.map(repository => (
            <li key={repository.id}>
              <a href={repository.html_url}>Repository name: {repository.name}</a>
            </li>
          ))}
      </ul> */}
    </div>
  );
}
