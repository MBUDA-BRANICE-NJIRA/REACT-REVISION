
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import NewBlogs from './component/New-Blogs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NewBlogs/>
      <Home />
    </div>
  );
}

export default App;
