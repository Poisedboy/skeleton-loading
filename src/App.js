import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home';
import { Post } from './components/Post';
import { SkeletonTheme } from 'react-loading-skeleton';

function App() {
  return (
    <div className="App">
      <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
        <BrowserRouter>
          <Routes>
            <Route path='skeleton-loading/' element={<Home />} />
            <Route path='skeleton-loading/post/:userId' element={<Post />} />
          </Routes>
        </BrowserRouter>
      </SkeletonTheme>
    </div>
  );
}

export default App;
