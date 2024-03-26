import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { contentActions, useContent } from "../../../features/content/contentSlice";
import {
  fetchAddContent,
  fetchContentById,
  fetchUpdateContent,
} from "../../../features/content/contentThunk";
import uploadAPI from "./../../../api/uploadAPI";
import "./AddEditContent.css";

function AddEditContent() {
  const [state, setState] = useState({
    categoryName: "",
    content: "",
    summarizeContent: "", // Thêm trường summarizeContent
    contentParts: []
  });
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const params = useParams();
  const isEditMode = Boolean(params?.id);
  const { dataOne } = useContent();

  useEffect(() => {
    if (!params?.id) return;

    dispatch(fetchContentById(params.id)).then((t) => {
      if (t?.payload?.metadata) {
        const { metadata } = t.payload;
        setState((prev) => ({
          ...prev,
          content: metadata.content,
          categoryName: metadata.categoryName,
          summarizeContent: metadata.summarizeContent, // Cập nhật giá trị summarizeContent
        }));
      }
    });

    return () => {
      dispatch(contentActions.resetDataOne());
    };
  }, [params?.id]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
  
    if (!state.categoryName || !state.content) {
      toast.error("Vui lòng điền tất cả trường!");
      return;
    }
  
    const data = {
      categoryName: state.categoryName,
      content: state.content,
      summarizeContent: state.summarizeContent, // Thêm summarizeContent vào data gửi đi
      contentParts: state.contentParts.map(part => ({
        partNumber: part.partNumber,
        partContent: part.partContent
      }))
    };
  
    if (dataOne) {
      data.id = dataOne.id;
    }
  
    dispatch(isEditMode ? fetchUpdateContent(data) : fetchAddContent(data)).then((t) => {
      if (t?.payload?.metadata) {
        navigation("/admin/contents");
      }
    });
  };

  const handleChange = (event) => {
    const {
      target: { value, name },
    } = event;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const uploadAdapter = (loader) => {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          loader.file.then(async (file) => {
            try {
              if (file) {
                const response = await uploadAPI.postForm([file]);

                resolve({ default: response });
              }
            } catch (error) {
              reject(error);
            }
          });
        });
      },
    };
  };

  const handleAddContentPart = () => {
    const newContentParts = [...state.contentParts];
    newContentParts.push({ partNumber: newContentParts.length + 1, partContent: "" });
    setState((prev) => ({ ...prev, contentParts: newContentParts }));
  };

  const handleContentPartChange = (index, value) => {
    const newContentParts = [...state.contentParts];
    newContentParts[index].partContent = value;
    setState((prev) => ({ ...prev, contentParts: newContentParts }));
  }

  const handleRemoveContentPart = (index) => {
    const newContentParts = [ ...state.contentParts ];
    newContentParts.splice(index, 1);
    setState((prev) => ({ ...prev, contentParts: newContentParts }));
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <h4 className="text-center">{isEditMode ? "Thay đổi" : "Thêm"} nội dung</h4>

      <div className="form-group">
        <label htmlFor="categoryName">Tên danh mục</label>
        <input
          type="text"
          className="form-control"
          id="categoryName"
          placeholder="VD: Giao thông vận tải đang phát triển"
          name="categoryName"
          value={state.categoryName}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="summarizeContent">Tóm tắt nội dung</label>
        <input
          type="text"
          className="form-control"
          id="summarizeContent"
          placeholder="Tóm tắt nội dung"
          name="summarizeContent"
          value={state.summarizeContent}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="content">Nội dung</label>
        <CKEditor
          editor={ClassicEditor}
          data={state.content}
          name="content"
          onChange={(event, editor) => {
            handleChange({ target: { value: editor.getData(), name: "content" } });
          }}
          config={{
            extraPlugins: [uploadPlugin],
          }}
        />
      </div>

      {state.contentParts.map((part, index) => (
        <div className="part-content-container">
          <div key={index} className="form-group content-part">
          <label htmlFor={`partContent${index}`}>Nội dung phần {index + 1}</label>
          <CKEditor
            editor={ClassicEditor}
            data={part.partContent}
            onChange={(event, editor) => {
              handleContentPartChange(index, editor.getData());
            }}
            config={{
              extraPlugins: [uploadPlugin],
            }}
          />
        </div>
        <button 
        type="button"
        className="btn btn-danger btn-sm delete-part-btn"
        onClick={() => handleRemoveContentPart(index)}
      >Xóa</button>
        </div>
       
        
      ))}

      <div className="my-4">
        <button type="button" className="btn btn-primary" onClick={handleAddContentPart}>
          Thêm ND Nhỏ
        </button>
      </div>
      

      <button type="submit" className="btn btn-success">
        {isEditMode ? "Lưu thay đổi" : "Tạo mới"}
      </button>
    </form>
  );
}

export default AddEditContent;
