import FetchBase from "./FetchBase";
import instance from "./axiosConfig";

class ProductAPI extends FetchBase {
  postForm = async (data) => {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      const item = data[key];

      formData.append(key, item);
    });

    const response = await instance.post("/Product", formData, {
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

      if (key === "imageFile" && item) {
        formData.append(key, item);
      } else {
        formData.append(key, item);
      }
    });

    const response = await instance.put(`/Product/${data.id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  };
}

const productAPI = new ProductAPI("/Product");

export default productAPI;
