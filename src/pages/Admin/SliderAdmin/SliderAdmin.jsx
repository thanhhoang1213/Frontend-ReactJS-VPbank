import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSlider } from "../../../features/slider/sliderSlice";
import { fetchDeleteSlider, fetchSliders } from "../../../features/slider/sliderThunk";

function SliderAdmin() {
  const { data } = useSlider();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSliders());
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm(`Bạn có chắc muốn xóa?`);

    if (confirm) {
      dispatch(fetchDeleteSlider(id)).then((t) => {
        if (t.payload?.metadata) {
          dispatch(fetchSliders());
        }
      });
    }
  };

  return (
    <div>
      <Link className="btn btn-success btn-sm mb-2 text-white" to={"/admin/sliders/add"}>
        <i className="fa-solid fa-blog"></i> Thêm Slider
      </Link>

      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Ảnh</th>
              <th scope="col">Văn bản 1</th>
              <th scope="col">Văn bản 2</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {data.length ? (
              data.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>
                    <img
                      src={item.image}
                      width={50}
                      height={50}
                      loading="lazy"
                      style={{ objectFit: "cover" }}
                    />
                  </td>
                  <td>{item.text1}</td>
                  <td>{item.text2}</td>

                  <td>
                    <div className="d-flex" style={{ gap: 10 }}>
                      <div>
                        <Link
                          to={`/admin/sliders/update/${item.id}`}
                          class="btn btn-success btn-sm  text-white"
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

export default SliderAdmin;
