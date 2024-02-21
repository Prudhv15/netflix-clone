import image from "../assets/capa-dark.jpg";
import { useEffect, useState } from "react";

export default function Cardd() {
  const [result, setResult] = useState();
  const [banner, setBanner] = useState(image);
  const api = `https://www.omdbapi.com/?s=movie&page=1&apikey=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        // Process the fetched data as needed
        console.log(data);
        setResult(data.Search);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [api]);
  console.log(result);

  // function setImage(id) {
  //   console.log(id);
  //   setBanner(id ? result.Poster : "");
  // }

  function setImage(id) {
    console.log(id);

    const selectedMovie = result.find((movie) => movie.imdbID === id);

    setBanner(selectedMovie ? selectedMovie.Poster : "");
  }

  return (
    <>
      <div>
        <header className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center z-50 w-full">
          <div className="flex justify-between items-center p-4">
            <h3 className="font-bold text-4xl sm:text-5xl md:text-6xl text-red-600">
              NETFLIX
            </h3>
          </div>
        </header>

        <img
          src={banner}
          alt="theme"
          style={{ height: "800px" }}
          className="brightness-50 w-full"
        />
      </div>

      <div className="flex  flex-wrap bg-stone-800 p-2">
        {result &&
          result?.map((movie) => (
            <div class="max-w-sm rounded overflow-hidden shadow-lg m-2">
              <img
                class="w-full h-full"
                src={movie.Poster}
                alt="Sunset in the mountains"
                onClick={() => setImage(movie.imdbID)}
              />
              {/* <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              </div> */}
              <div class="px-6 pt-4 pb-2">
                {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span> */}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
