import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { sliderActions, useSlider } from "../../../features/slider/sliderSlice";
import {
  fetchAddSlider,
  fetchSliderById,
  fetchUpdateSlider,
} from "../../../features/slider/sliderThunk";
import { getBlobImg } from "../../../utils/function";

function AddEditSlider() {
  const [state, setState] = useState({
    text1: "",
    text2: "",
    image: "",
    imageFile: null,
  });
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const params = useParams();
  const isEditMode = Boolean(params?.id);
  const { dataOne } = useSlider();

  useEffect(() => {
    if (!params?.id) return;

    dispatch(fetchSliderById(params.id)).then((t) => {
      if (t?.payload?.metadata) {
        const { metadata } = t.payload;
        setState((prev) => ({
          ...prev,
          image: metadata.image,
          text2: metadata.text2,
          text1: metadata.text1,
        }));
      }
    });

    return () => {
      dispatch(sliderActions.resetDataOne());
    };
  }, [params?.id]);

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (!state.text1 || !state.text2 || (!isEditMode && !state.imageFile)) {
      toast.error("Vui lòng điền tất cả trường và chọn ảnh");
      return;
    }

    const data = {
      text1: state.text1,
      text2: state.text2,
    };

    if (state.imageFile) {
      data.image = state.imageFile;
    }

    if (isEditMode) {
      data.id = dataOne.id;
    }

    dispatch(isEditMode ? fetchUpdateSlider(data) : fetchAddSlider(data)).then((t) => {
      if (t?.payload?.metadata) {
        navigation("/admin/sliders");
      }
    });
  };

  const handleChangeImages = useCallback(async (event) => {
    const {
      target: { files },
    } = event;

    if (!files || !files?.length) return;

    setState((prev) => ({ ...prev, imageFile: files[0] }));

    try {
      const { url } = await getBlobImg(files[0]);
      setState((prev) => ({ ...prev, image: url }));
    } catch (error) {
      console.log("====================================");
      console.log(`error`, error);
      console.log("====================================");
    }
  }, []);

  const handleChange = (event) => {
    const {
      target: { value, name },
    } = event;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h4 className="text-center">{isEditMode ? "Thay đổi" : "Thêm"} Slider</h4>

      <div className="form-group">
        <label htmlFor="text1">Văn bản 1</label>
        <input
          type="text"
          multiple
          className="form-control"
          id="text1"
          placeholder="VD: Giao thông vận tải đang phát triển"
          name="text1"
          value={state.text1}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="text2">Văn bản 2</label>
        <input
          type="text"
          multiple
          className="form-control"
          id="text2"
          placeholder="Nhập đường dẫn"
          name="text2"
          value={state.text2}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlFile1">Ảnh</label>
        <input
          type="file"
          className="form-control-file"
          id="exampleFormControlFile1"
          onChange={handleChangeImages}
        />
      </div>

      {state.image ? (
        <div className="form-group">
          <img
            src={state.image}
            width={100}
            height={100}
            style={{ objectFit: "cover", borderRadius: 20 }}
          />
        </div>
      ) : null}

      <button type="submit" className="btn btn-success">
        {isEditMode ? "Lưu thay đổi" : "Tạo mới"}
      </button>
    </form>
  );
}

export default AddEditSlider;
