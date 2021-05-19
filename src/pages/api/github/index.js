import { createAndUpdateFile, deleteFile, getFile } from "../controllers/github";

const controllers = {
  POST: createAndUpdateFile,
  PUT: createAndUpdateFile,
  DELETE: deleteFile,
  GET: getFile,
};

const handleRequest = req => {
  try {
    const response = controllers[req.method](req);
    console.log(true);
    console.log(response);
    // res.send(response)
  } catch (error) {
    console.log(`Something went wrong ${error}`);
  }
};

export default handleRequest;
