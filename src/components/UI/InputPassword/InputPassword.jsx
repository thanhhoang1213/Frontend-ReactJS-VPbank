import React, { useState } from "react";

function InputPassword({ ...props }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="form-group">
      <input type={open ? "text" : "password"} className="form-control" {...props} />

      <span
        toggle="#loginPassword"
        onClick={() => setOpen((p) => !p)}
        className={`fa fa-fw fa-eye${open ? "-slash" : ""} field-icon toggle-password`}
      />
    </div>
  );
}

export default InputPassword;
