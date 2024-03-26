import React, { useState } from "react";
import { Accordion } from "./Accordion";

const data = [
  {
    id: 1,
    title: "Câu hỏi chung",
    subTitle: "Câu hỏi thường gặp về chương trình đào tạo AWS cơ bản",
    answerTitle: "AWS là gì?",
    answer: "AWS là một dịch vụ đám mây của Amazon cung cấp các dịch vụ tính toán, lưu trữ,...",
  },
  {
    id: 2,
    title: "Câu hỏi chung",
    subTitle: "Câu hỏi thường gặp về chương trình đào tạo AWS cơ bản",
    answerTitle: "AWS là gì?",
    answer: "AWS là một dịch vụ đám mây của Amazon cung cấp các dịch vụ tính toán, lưu trữ,...",
  },
  {
    id: 3,
    title: "Câu hỏi chung",
    subTitle: "Câu hỏi thường gặp về chương trình đào tạo AWS cơ bản",
    answerTitle: "AWS là gì?",
    answer: "AWS là một dịch vụ đám mây của Amazon cung cấp các dịch vụ tính toán, lưu trữ,...",
  },
  {
    id: 4,
    title: "Câu hỏi chung",
    subTitle: "Câu hỏi thường gặp về chương trình đào tạo AWS cơ bản",
    answerTitle: "AWS là gì?",
    answer: "AWS là một dịch vụ đám mây của Amazon cung cấp các dịch vụ tính toán, lưu trữ,...",
  },
  {
    id: 5,
    title: "Câu hỏi chung",
    subTitle: "Câu hỏi thường gặp về chương trình đào tạo AWS cơ bản",
    answerTitle: "AWS là gì?",
    answer: "AWS là một dịch vụ đám mây của Amazon cung cấp các dịch vụ tính toán, lưu trữ,...",
  },
];

function FaqPage() {
  const [id, setId] = useState(0);

  return (
    <main>
      {/* Start breakcoumb Area */}
      <section style={{ marginTop: 140 }}>
        <div className="breakcomb-container container mt-3">
          <div className="breakcomb row">
            <div className="breakcomb-title col-6">
              <h3 style={{ color: "#02B84D" }}>Câu hỏi thường gặp</h3>
            </div>
            <div className="search-bar col-6">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="px-3 form-control"
                  placeholder="Tìm kiếm"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  style={{ padding: 23 }}
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">
                    <i className="fa fa-search" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End breakcoumb Area */}

      {/* FAQ Area */}
      <section>
        <div className="container my-3">
          <div id="accordion" role="tablist" aria-multiselectable="true">
            {data.map((t) => (
              <Accordion {...t} onOpen={(id) => setId(id)} open={t.id === id} />
            ))}

            {/* <div className="card">
              <div className="card-header" role="tab" id="headingOne">
                <div className="mb-0">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                    className="collapsed d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <i className="fa fa-file-text-o" aria-hidden="true" />
                      <div className="ml-5">
                        <h3>Câu hỏi chung</h3>
                        <p>Câu hỏi thường gặp về chương trình đào tạo AWS cơ bản</p>
                      </div>
                    </div>
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div
                id="collapseOne"
                className="collapse"
                role="tabpanel"
                aria-labelledby="headingOne"
                aria-expanded="false"
              >
                <div className="card-block">
                  <p> AWS là gì?</p>
                  <p>
                    {" "}
                    AWS là một dịch vụ đám mây của Amazon cung cấp các dịch vụ tính toán, lưu trữ,
                    ...
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" role="tab" id="headingTwo">
                <div className="mb-0">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    className="collapsed d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <i className="fa fa-file-text-o" aria-hidden="true" />
                      <div className="ml-5">
                        <h3>CLorem ipsum dolor sit amet</h3>
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
                aria-expanded="false"
              >
                <div className="card-block">
                  <p> AWS là gì?</p>
                  <p>
                    {" "}
                    AWS là một dịch vụ đám mây của Amazon cung cấp các dịch vụ tính toán, lưu trữ,
                    ...
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" role="tab" id="heading3">
                <div className="mb-0">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse3"
                    aria-expanded="false"
                    aria-controls="collapse3"
                    className="collapsed d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <i className="fa fa-file-text-o" aria-hidden="true" />
                      <div className="ml-5">
                        <h3>CLorem ipsum dolor sit amet</h3>
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div
                id="collapse3"
                className="collapse"
                role="tabpanel"
                aria-labelledby="heading3"
                aria-expanded="false"
              >
                <div className="card-block">
                  <p> AWS là gì?</p>
                  <p>
                    {" "}
                    AWS là một dịch vụ đám mây của Amazon cung cấp các dịch vụ tính toán, lưu trữ,
                    ...
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" role="tab" id="heading4">
                <div className="mb-0">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse4"
                    aria-expanded="false"
                    aria-controls="collapse4"
                    className="collapsed d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <i className="fa fa-file-text-o" aria-hidden="true" />
                      <div className="ml-5">
                        <h3>CLorem ipsum dolor sit amet</h3>
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div
                id="collapse4"
                className="collapse"
                role="tabpanel"
                aria-labelledby="heading4"
                aria-expanded="false"
              >
                <div className="card-block">
                  <p> AWS là gì?</p>
                  <p>
                    {" "}
                    AWS là một dịch vụ đám mây của Amazon cung cấp các dịch vụ tính toán, lưu trữ,
                    ...
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" role="tab" id="heading5">
                <div className="mb-0">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse5"
                    aria-expanded="false"
                    aria-controls="collapse5"
                    className="collapsed d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <i className="fa fa-file-text-o" aria-hidden="true" />
                      <div className="ml-5">
                        <h3>CLorem ipsum dolor sit amet</h3>
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div
                id="collapse5"
                className="collapse"
                role="tabpanel"
                aria-labelledby="heading5"
                aria-expanded="false"
              >
                <div className="card-block">
                  <p> AWS là gì?</p>
                  <p>
                    {" "}
                    AWS là một dịch vụ đám mây của Amazon cung cấp các dịch vụ tính toán, lưu trữ,
                    ...
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* End FAQ Area */}
    </main>
  );
}

export default FaqPage;
