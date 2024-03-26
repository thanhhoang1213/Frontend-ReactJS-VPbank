import FetchBase from "./FetchBase";
import instance from "./axiosConfig";

class UploadAPI extends FetchBase {
  postForm = async (files) => {
    const formData = new FormData();

    files.forEach((element) => {
      formData.append("files", element);
    });

    const response = await instance.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  };
}

const uploadAPI = new UploadAPI("/upload");

export default uploadAPI;
