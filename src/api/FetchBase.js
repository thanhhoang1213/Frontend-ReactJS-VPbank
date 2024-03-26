import instance from "./axiosConfig";

class FetchBase {
  constructor(path) {
    this._path = path;
  }

  get = ({ params = {}, prefix = "" }) => {
    const url = prefix ? `${this._path}${prefix}` : this._path;
    return instance.get(url, { params });
  };

  post = (data = {}, prefix = "") => {
    const url = prefix ? `${this._path}${prefix}` : this._path;
    return instance.post(url, data);
  };

  put = (data = {}, prefix = "") => {
    const url = prefix ? `${this._path}${prefix}` : `${this._path}/${data.id}`;
    return instance.put(url, data);
  };

  delete = (id) => {
    return instance.delete(`${this._path}/${id}`);
  };

  patch = (id, data, prefix = "") => {
    const url = prefix ? `${this._path}${prefix}` : `${this._path}/${id}`;
    return instance.patch(url, data);
  };

  getById = (id) => {
    return instance.get(`${this._path}/${id}`);
  };
}

export default FetchBase;
