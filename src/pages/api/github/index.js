import { postFile } from "../controllers/github";

const controllers = {
  POST: postFile,
};

const handleRequest = (req, res) => {
  controllers[req.method](req, res);
};

export default handleRequest;
