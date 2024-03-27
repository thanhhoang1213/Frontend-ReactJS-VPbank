import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchContentBySlug } from "./../../features/content/contentThunk";
import { useContent } from "./../../features/content/contentSlice";

function CategoryDetailsPage() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dataOne, loading } = useContent();

  useEffect(() => {
    if (!params.slug) {
      navigate(-1);
      return;
    }

    dispatch(fetchContentBySlug(params.slug)).then((t) => {
      if (t?.error?.message) {
        navigate(-1);
      }
    });
  }, [params?.slug]);

  return (
    <section className="contact-us section intro">
      <div className="container">
        <div className="inner-content">
          {dataOne ? (
            <>
              <h2>{dataOne.title}</h2>
              <h3>{dataOne.categoryName}</h3>
              <hr/>
              <div dangerouslySetInnerHTML={{ __html: dataOne.content }} />
              {dataOne.contentParts.map((part, index) => (
                <div key={index} className="content-part">
                  <hr/>
                  <h3>Phần {index + 1}</h3>
                  <div dangerouslySetInnerHTML={{ __html: part.partContent }} />
                </div>
              ))}
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default CategoryDetailsPage;
