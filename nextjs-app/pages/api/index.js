import nextConfig from "../../config/nextSetup";
import sessionRoute from "./routers/session";

export default sessionRoute(nextConfig.nextConnect);
