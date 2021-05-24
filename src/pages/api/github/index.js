import { createOrUpdateFile, getFileGithub, deleteFileGithub } from "../controllers/github";

const controllers = {
  POST: createOrUpdateFile,
  GET: getFileGithub,
  DELETE: deleteFileGithub,
  UPDATE: createOrUpdateFile,
};

const handleRequest = (req, res) => {
  try {
    return controllers[req.method](req, res);
  } catch (error) {
    console.log(`Something went wrong ${error}`);
  }
};

export default handleRequest;
