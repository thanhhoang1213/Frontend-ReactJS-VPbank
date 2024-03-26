import FetchBase from "./FetchBase";
import instance from "./axiosConfig";

class NewsAPI extends FetchBase {
  postForm = async (data) => {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      const item = data[key];

      formData.append(key, item);
    });

    const response = await instance.post("/news", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  };

  patchForm = async (data) => {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      const item = data[key];

      if (key === "image" && item) {
        formData.append(key, item);
      } else {
        formData.append(key, item);
      }
    });

    const response = await instance.patch(`/news/${data.id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  };
}

const newsAPI = new NewsAPI("/news");

export default newsAPI;
