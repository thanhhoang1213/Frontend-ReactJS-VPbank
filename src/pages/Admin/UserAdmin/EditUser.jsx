import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { useUser, userActions } from "../../../features/users/userSlice";
import { fetchUpdateUser, fetchUserById } from "../../../features/users/userThunk";

function EditUser() {
  const [state, setState] = useState({
    displayName: "",
    role: "",
  });

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const params = useParams();
  const isEditMode = Boolean(params?.id);
  const { dataOne } = useUser();

  useEffect(() => {
    if (!params?.id) return;

    dispatch(fetchUserById(params.id)).then((t) => {
      if (t?.payload?.metadata) {
        const { metadata } = t.payload;

        setState((prev) => ({
          ...prev,
          displayName: metadata.displayName,
          role: metadata.role,
        }));
      }
    });

    return () => {
      dispatch(userActions.resetDataOne());
    };
  }, [params?.id]);

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (!state.displayName || !state.role) {
      toast.error("Vui lòng điền tất cả trường");
      return;
    }

    const data = {
      displayName: state.displayName,
      role: state.role,
    };

    if (dataOne) {
      data.id = dataOne.id;
    }

    dispatch(fetchUpdateUser(data)).then((t) => {
      if (t?.payload?.metadata) {
        navigation("/admin/users");
      }
    });
  };

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
        <label htmlFor="displayName">Tên hiển thị</label>
        <input
          type="text"
          className="form-control"
          id="displayName"
          name="displayName"
          value={state.displayName}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="displayName">Vai trò</label>
        <select
          className="form-select mb-2"
          aria-label="Default select example"
          value={state.role}
          onChange={(e) => handleChange({ target: { value: e.target.value, name: "role" } })}
        >
          <option selected disabled>
            Vui lòng chọn
          </option>
          <option value={"customer"}>Người dùng</option>
          <option value="admin">Quản trị</option>
        </select>
      </div>

      <button type="submit" className="btn btn-success">
        {isEditMode ? "Lưu thay đổi" : "Tạo mới"}
      </button>
    </form>
  );
}

export default EditUser;
