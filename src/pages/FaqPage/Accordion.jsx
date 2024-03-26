import React from "react";

export const Accordion = ({ title, subTitle, answerTitle, answer, id, open, onOpen }) => {
  return (
    <div className="card">
      <div className="card-header" role="tab" id="headingOne" onClick={() => onOpen(id)}>
        <div className="mb-0">
          <a
            data-toggle="collapse"
            data-parent="#accordion"
            href={"#collapseOne" + id}
            aria-expanded="false"
            aria-controls={"collapseOne" + id}
            className="collapsed d-flex justify-content-between align-items-center"
          >
            <div>
              <i className="fa fa-file-text-o" aria-hidden="true" />
              <div className="ml-5">
                <h3>{title}</h3>
                <p>{subTitle}</p>
              </div>
            </div>
            <i className="fa fa-angle-down" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div
        id={"collapseOne" + id}
        className={`collapse ${open ? "show" : ""} showing`}
        role="tabpanel"
        aria-labelledby="headingOne"
        aria-expanded="false"
      >
        <div className="card-block">
          <p>{answerTitle}</p>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};
