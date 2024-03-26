import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNews } from "../../../features/news/newsSlice";
import { fetchDeleteNews, fetchNews } from "../../../features/news/newsThunk";
import { formatDate } from "./../../../utils/formatDate";
import { Link } from "react-router-dom";

function NewsAdmin() {
  const { data } = useNews();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm(`Bạn có chắc muốn xóa?`);

    if (confirm) {
      dispatch(fetchDeleteNews(id)).then((t) => {
        if (t.payload?.metadata) {
          dispatch(fetchNews());
        }
      });
    }
  };

  return (
    <div>
      <Link className="btn btn-success btn-sm mb-2 text-white" to={"/admin/news/add"}>
        <i className="fa-solid fa-blog"></i> Thêm tin tức
      </Link>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Tiêu đề</th>
            <th scope="col">Đường dẫn link</th>
            <th scope="col">Ngày đăng</th>
            <th scope="col">Ảnh</th>
            <th scope="col">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {data.length ? (
            data.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.link}</td>
                <td>{formatDate(item.createdAt)}</td>
                <td>
                  <img
                    src={item.image}
                    width={50}
                    height={50}
                    loading="lazy"
                    style={{ objectFit: "cover" }}
                  />
                </td>
                <td>
                  <div className="d-flex" style={{ gap: 10 }}>
                    <div>
                      <Link
                        to={`/admin/news/update/${item.id}`}
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
  );
}

export default NewsAdmin;
