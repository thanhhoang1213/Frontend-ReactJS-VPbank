import FetchBase from "./FetchBase";

class AuthAPI extends FetchBase {}

const authAPI = new AuthAPI("/auth");

export default authAPI;
