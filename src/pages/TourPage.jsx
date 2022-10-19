import { useState, useEffect } from "react";
import SkeletonCard from "../components/SkeletonCard";
import TourCard from "../components/TourCard";

function TourPage() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);
  const getTours = async () => {
    setLoading(true);
    let data = await fetch('https://course-api.com/react-tours-project');
    let res = await data.json();
    setTours(res);
    setLoading(false);
  };
  const removeTour = (removedID) => {
    let newTours = tours.filter(({ id }) => {
      console.log(id, removedID);
      return id != removedID;
    });
    setTours(newTours);
  };
  useEffect(() => {
    getTours();
  }, []);
  return (
    <>
      <div className='tours'>
        {loading ? (
          <SkeletonCard count={5} />
        ) : (
          tours.map(({ info, name, image, price, id }) => {
            return (
              <TourCard
                image={image}
                name={name}
                price={price}
                info={info}
                remove={removeTour}
                id={id}
                key={id}
              />
            );
          })
        )}
      </div>
      <button className='reset' onClick={() => getTours()}>
        Reset
      </button>
      </>
  );
}

export default TourPage