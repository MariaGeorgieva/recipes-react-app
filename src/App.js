import { Routes, Route } from 'react-router-dom'
import './App.css';

import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';

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
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
