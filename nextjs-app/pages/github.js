import React, { useState } from "react";
import axios from "axios";

export default function Github() {
  const [responseData, setResponseData] = useState([]);
  const [modifiedData, setModifiedData] = useState({
    githubUser: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setModifiedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.get(
      `https://api.github.com/users/${modifiedData.githubUser}/repos`
    );
    console.log(data);
    setResponseData(data);
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
        <button
          disabled={modifiedData.githubUser.length === 0 ? true : false}
          type="submit"
        >
          Get User repositories
        </button>
      </form>

      <ul>
        {responseData &&
          responseData.map((repository) => (
            <li key={repository.id}>
              <a href={repository.html_url}>
                Repository name: {repository.name}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
