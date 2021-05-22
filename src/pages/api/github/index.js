import { createFile } from "../controllers/github";

const controllers = {
  POST: createFile,
};

const handleRequest = (req, res) => {
  try {
    controllers[req.method](req, res);
  } catch (error) {
    console.log(`Something went wrong ${error}`);
  }
};

export default handleRequest;
