import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./ContentPartPage.css";

function ContentPartPage() {
  const params = useParams();
  const location = useLocation();
  const [partContent, setPartContent] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [currentPartNumber, setCurrentPartNumber] = useState(params.partNumber);
  const contentPartCount = location.state ? location.state.contentPartCount : 0;

  useEffect(() => {
    const fetchContentPart = async () => {
      try {
        const response = await axios.get(`http://localhost:8888/v1/api/contentpart/${params.contentId}/${currentPartNumber}`);
        setPartContent(response.data.data.partContent);
        setCategoryName(response.data.data.categoryName);
      } catch (error) {
        console.error("Error fetching content part:", error);
      }
    };

    fetchContentPart();
  }, [params.contentId, currentPartNumber]);

  const handleNextPart = () => {
    if (parseInt(currentPartNumber) < contentPartCount) {
      setCurrentPartNumber(parseInt(currentPartNumber) + 1);
    }
  };

  const handlePreviousPart = () => {
    if (parseInt(currentPartNumber) > 1) {
      setCurrentPartNumber(parseInt(currentPartNumber) - 1);
    }
  };

  return (
    <section className="content-part-page">
      <div className="container">
        <div className="content-part">
          <h3 className="text-center">{categoryName}</h3>
          <h4>Phần {currentPartNumber}</h4>
          <div className="content" dangerouslySetInnerHTML={{ __html: partContent }} />
          <div className="text-center">
            <Button className="btn btn-part" onClick={handlePreviousPart} disabled={currentPartNumber === 1}>
              Prev
            </Button>
            <Button className="btn btn-part" onClick={handleNextPart} disabled={currentPartNumber === contentPartCount}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentPartPage;
