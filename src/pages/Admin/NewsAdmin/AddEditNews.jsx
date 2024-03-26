import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { getBlobImg } from "./../../../utils/function";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAddNews, fetchNewsById, fetchUpdateNews } from "../../../features/news/newsThunk";
import { newsActions, useNews } from "../../../features/news/newsSlice";

function AddEditNews() {
  const [state, setState] = useState({
    title: "",
    link: "",
    image: "",
    imageFile: null,
  });
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const params = useParams();
  const isEditMode = Boolean(params?.id);
  const { dataOne } = useNews();

  useEffect(() => {
    if (!params?.id) return;

    dispatch(fetchNewsById(params.id)).then((t) => {
      if (t?.payload?.metadata) {
        const { metadata } = t.payload;
        setState((prev) => ({
          ...prev,
          image: metadata.image,
          link: metadata.link,
          title: metadata.title,
        }));
      }
    });

    return () => {
      dispatch(newsActions.resetDataOne());
    };
  }, [params?.id]);

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (!state.title || !state.link || (!isEditMode && !state.imageFile)) {
      toast.error("Vui lòng điền tất cả trường và chọn ảnh");
      return;
    }

    const data = {
      title: state.title,
      link: state.link,
    };

    if (state.imageFile) {
      data.image = state.imageFile;
    }

    if (isEditMode) {
      data.id = dataOne.id;
    }

    dispatch(isEditMode ? fetchUpdateNews(data) : fetchAddNews(data)).then((t) => {
      if (t?.payload?.metadata) {
        navigation("/admin/news");
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
      <h4 className="text-center">{isEditMode ? "Thay đổi" : "Thêm"} tin tức</h4>

      <div className="form-group">
        <label htmlFor="title">Tiêu đề</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="VD: Giao thông vận tải đang phát triển"
          name="title"
          value={state.title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="link">Đường dẫn link</label>
        <input
          type="text"
          className="form-control"
          id="link"
          placeholder="Nhập đường dẫn"
          name="link"
          value={state.link}
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

export default AddEditNews;
