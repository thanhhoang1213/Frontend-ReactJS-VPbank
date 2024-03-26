import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContents, fetchDeleteContent } from "./../../../features/content/contentThunk";
import { useContent } from "./../../../features/content/contentSlice";
import { formatDate } from "./../../../utils/formatDate";
import { Link } from "react-router-dom";
import "./ContentAdmin.css";

function ContentAdmin() {
  const { data } = useContent();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContents());
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm(`Bạn có chắc muốn xóa?`);

    if (confirm) {
      dispatch(fetchDeleteContent(id)).then((t) => {
        if (t.payload?.metadata) {
          dispatch(fetchContents());
        }
      });
    }
  };

  return (
    <div>
      <Link className="btn btn-success btn-sm mb-2 text-white" to={"/admin/contents/add"}>
        <i className="fa-solid fa-blog"></i> Thêm nội dung
      </Link>

      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Tên danh mục</th>
              <th scope="col">Tóm tắt</th>
              <th scope="col">Nội dung</th>
              <th scope="col">Ngày tạo</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {data.length ? (
              data.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td width={200}>{item.categoryName}</td>
                  <td className="truncate-sumarize" width={300}>{item.summarizeContent}</td>
                  <td className="truncate" width={400}>{item.content}</td>
                  <td>{formatDate(item.createdAt)}</td>

                  <td>
                    <div className="d-flex" style={{ gap: 10 }}>
                      <div>
                        <Link
                          to={`/admin/contents/update/${item.id}`}
                          className="btn btn-success btn-sm text-white"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 2,
                            padding: "8px 12px",
                          }}
                        >
                          <i className="fa-solid fa-pen-to-square"></i> Sửa
                        </Link>
                      </div>
                      <div>
                        <button
                          className="btn btn-danger btn-sm"
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
                          <i className="fa-solid fa-trash"></i> Xóa
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th scope="row" colSpan={6}>
                  Chưa có dữ liệu
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContentAdmin;
