import { useEffect, useState } from "react";
import axios from "axios";

const Characters = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(100);
  const [searchCharacter, setSearchCharacter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/characters?limit=${limit}&skip=${skip}&name=${searchCharacter}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [searchCharacter, skip, limit]);

  const previousPage = () => {
    setSkip(Math.max(0, skip - limit));
  };

  const nextPage = () => {
    if (skip + limit < data.count) {
      setSkip(skip + limit);
    }
  };
  const allPages = Math.ceil(data.count / limit);
  const currentPage = Math.floor(skip / limit) + 1;

  const handleSearch = (event) => {
    setSearchCharacter(event.target.value);
  };
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <main>
      <section className="container">
        <input
          className="search-input"
          type="text"
          placeholder="Search your favorite character..."
          value={searchCharacter}
          onChange={handleSearch}
        />
        <h2>CHARACTERS</h2>

        <div className="articles">
          {data.results.map((character) => {
            return (
              <article key={character._id}>
                <img
                  src={
                    character.thumbnail.path +
                    "." +
                    character.thumbnail.extension
                  }
                  alt={character.name}
                />
                <h3>{character.name}</h3>

                {character.description && <p>{character.description}</p>}
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
            disabled={skip + limit >= data.count || currentPage >= allPages}
          >
            Next
          </button>
        </div>
      </section>
    </main>
  );
};

export default Characters;
