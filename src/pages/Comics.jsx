import { useEffect, useState } from "react";
import axios from "axios";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(100);
  const [searchComic, setSearchComic] = useState("");
  const pages = 474;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/comics?limit=${limit}&skip=${skip}&title=${searchComic}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [searchComic, skip, limit]);

  const previousPage = () => {
    setSkip(Math.max(0, skip - limit));
  };

  const nextPage = () => {
    if (skip + limit < pages * limit) {
      setSkip(skip + limit);
    }
  };
  const allPages = Math.ceil(data.count / limit);
  const currentPage = Math.floor(skip / limit) + 1;

  const handleSearch = (event) => {
    setSearchComic(event.target.value);
  };
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <main>
      <section className="container">
        <input
          className="search-input"
          type="text"
          placeholder="Search your favorite comic..."
          value={searchComic}
          onChange={handleSearch}
        />
        <h1>COMICS</h1>
        <div className="articles">
          {data.results.map((comic) => {
            return (
              <article key={comic._id}>
                <img
                  src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                  alt={comic.title}
                />
                <h3>{comic.title}</h3>

                <p>{comic.description} </p>
              </article>
            );
          })}
        </div>
        <div className="pagination">
          <button onClick={previousPage} disabled={skip === 0}>
            Previous
          </button>
          <span>
            Page {currentPage} sur {allPages}
          </span>
          <button
            onClick={nextPage}
            disabled={skip + limit >= data.total || currentPage >= allPages}
          >
            Next
          </button>
        </div>
      </section>
    </main>
  );
};

export default Comics;
