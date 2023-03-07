import './App.css';
import Categories from './components/Categoties';
// import Footer from './components/Footer';
// import Header from './components/Header/Header';
 import RecipeList from './components/RecipeList';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Hero />
      <Categories />

      {/* <Header /> */}
      <RecipeList />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
