import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
    setTotalPages(data.length);
  }, [loading, page]);

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading" : "pagination"}</h1>
        <div className="underline" />
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => (
            <Follower key={follower.id} {...follower} />
          ))}
        </div>
        {!loading && (
          <div className="btn-container">
            {totalPages > 1 && (
              <button
                key="prev"
                disabled={page === 0}
                className="page-btn"
                onClick={() => setPage(page - 1)}
              >
                prev
              </button>
            )}
            {data.map((_, index) => (
              <button
                key={index}
                className={`page-btn ${
                  index === page ? "active-btn disabled" : ""
                }`}
                onClick={() => setPage(index)}
              >
                {index + 1}
              </button>
            ))}
            {totalPages > 1 && (
              <button
                key="next"
                disabled={page === totalPages - 1}
                className="page-btn"
                onClick={() => setPage(page + 1)}
              >
                next
              </button>
            )}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
