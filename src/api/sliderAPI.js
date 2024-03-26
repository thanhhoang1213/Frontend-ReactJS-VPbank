import FetchBase from "./FetchBase";
import instance from "./axiosConfig";

class SliderAPI extends FetchBase {
  postForm = async (data) => {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      const item = data[key];

      formData.append(key, item);
    });

    const response = await instance.post("/sliders", formData, {
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

    const response = await instance.patch(`/sliders/${data.id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  };
}

const sliderAPI = new SliderAPI("/sliders");

export default sliderAPI;
