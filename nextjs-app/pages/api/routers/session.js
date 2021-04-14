import otherApi from "../dummy/data";
import { getSession } from "../controllers/session";

export default (nextConfig) => {
  return nextConfig.get((req, res) => res.send(getSession(otherApi)));
};
