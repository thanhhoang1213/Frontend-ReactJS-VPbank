import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { fetchContentBySlug } from "./../../features/content/contentThunk";
import { useContent } from "./../../features/content/contentSlice";
import "./ConNguoiPage.css";

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
              <h3 className="text-center">{dataOne.categoryName}</h3>
              <hr />
              <div className="content" dangerouslySetInnerHTML={{ __html: dataOne.content }} />
              <div className="text-center">
                {[...Array(dataOne.contentPartCount)].map((_, index) => (
                  <Link
                    key={index}
                    to={`/contentId/${dataOne.id}/part/${index + 1}`}
                    state={{ contentPartCount: dataOne.contentPartCount }} // Truyền contentPartCount qua props
                  >
                    <button className="btn btn-part mx-2">Phần {index + 1}</button>
                  </Link>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default CategoryDetailsPage;
