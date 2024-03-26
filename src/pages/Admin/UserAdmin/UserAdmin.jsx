import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import UserRoles from "../../../constants/role.constant";
import { useUser } from "./../../../features/users/userSlice";
import { fetchDeleteUser, fetchUsers } from "./../../../features/users/userThunk";

function UserAdmin() {
  const { data } = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm(`Bạn có chắc muốn xóa?`);

    if (confirm) {
      dispatch(fetchDeleteUser(id)).then((t) => {
        if (t.payload?.metadata) {
          dispatch(fetchUsers());
        }
      });
    }
  };

  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col">Tên đăng nhập</th>
          <th scope="col">Tên hiển thị</th>
          <th scope="col">Vai trò</th>
          <th scope="col">Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {data.length ? (
          data.map((item) => (
            <tr key={item.id}>
              <th className={item.role === UserRoles.admin ? "text-danger" : ""} scope="row">
                {item.username}
              </th>
              <td className={item.role === UserRoles.admin ? "text-danger" : ""}>
                {item.displayName}
              </td>
              <td className={item.role === UserRoles.admin ? "text-danger" : ""}>
                {item.role === UserRoles.admin ? "Quản trị" : "Người dụng"}
              </td>
              <td>
                <div className="d-flex" style={{ gap: 10 }}>
                  <div>
                    <Link
                      to={`/admin/users/update/${item.id}`}
                      class="btn btn-success btn-sm text-white"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 2,
                        padding: "8px 12px",
                      }}
                    >
                      <i class="fa-solid fa-pen-to-square"></i> Sửa
                    </Link>
                  </div>

                  <div>
                    <button
                      disabled={item.role === UserRoles.admin}
                      class="btn btn-danger btn-sm"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 2,
                        padding: "8px 12px",
                        background: "#dc3545",
                      }}
                      onClick={() => handleDelete(item.id)}
                    >
                      <i class="fa-solid fa-trash"></i> Xóa
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <th scope="row" colSpan={4}>
              Chưa có dữ liệu
            </th>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default UserAdmin;
