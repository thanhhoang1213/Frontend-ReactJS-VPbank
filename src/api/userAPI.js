import FetchBase from "./FetchBase";

class UserAPI extends FetchBase {}

const userAPI = new UserAPI("/users");

export default userAPI;
