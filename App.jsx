import { useState } from 'react';
import TourCard from './components/TourCard';
import data from '../src/utils/data';

function App() {
  const [tours, setTours] = useState(data);
  return (
    <div>
      <h1>Tours</h1>
      {tours.map(({ img, name, price, description }) => {
        return (
          <TourCard
            img={img}
            name={name}
            price={price}
            description={description}
          />
        );
      })}
    </div>
  );
}

export default App;
