import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

const Comicscharacterid = () => {
  const characterId = useParams();
  console.log(characterId);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/comics/${characterId}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [characterId]);
  const location = useLocation();
  console.log(location);
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <main>
      <h1> </h1>
    </main>
  );
};

export default Comicscharacterid;
