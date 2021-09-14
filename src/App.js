import LeftSibeBar from "./components/LeftSideBar/LeftSideBar";
import NavBar from "./components/NavBar/NavBar";
import NewsFeed from "./components/NewsFeed/NewsFeed";


function App() {
  return (
    <div className="site-container">
      <NavBar/>
      <LeftSibeBar/>
      <NewsFeed/>
    </div>
  );
}

export default App;
