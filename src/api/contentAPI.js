import FetchBase from "./FetchBase";

class ContentAPI extends FetchBase {}

const contentAPI = new ContentAPI("/contents");

export default contentAPI;
