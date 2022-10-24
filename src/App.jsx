// import TourCard from './components/TourCard';
// import SkeletonCard from './components/SkeletonCard';
import './styles/styles.css';
import TourPage from './pages/TourPage';

function App() {
  return (
    <section className='tours-section flow'>
      <h1 className='tours-title'>Our Tours</h1>
     <TourPage/>
    </section>
  );
}

export default App;
