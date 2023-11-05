import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArtistBio from './ArtistBio';
import FamousPainting from './FamousPainting';
import PaintingCollection from './PaintingCollection';
import PaintingDetails from './PaintengDetails';

function App() {
  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/bio">Біографія</Link>
        </li>
        <li>
          <Link to="/painting">Найвідоміша картина</Link>
        </li>
        <li>
          <Link to="/collection">Колекція картин</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/bio" element={<ArtistBio />} />
      <Route path="/painting" element={<FamousPainting />} />
      <Route path="/collection" element={<PaintingCollection />} />
      <Route path="/painting/:id" element={<PaintingDetails />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
