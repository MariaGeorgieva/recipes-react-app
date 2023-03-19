import { Routes, Route } from 'react-router-dom'
import './App.css';

import Footer from './components/Footer/Footer';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Navigation from './components/Header/Navigation';
import Homepage from './components/Homepage/Homepage';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import RecipeList from './components/RecipeList/RecipeList';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/recipes' element={<RecipeList />} />
        <Route path='/recipes/:recipeId/' element={<RecipeDetails />} />
        <Route path='/recipes/create/' element={<CreateRecipe />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
