import { Routes, Route } from 'react-router-dom'

import './App.css';

import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Navigation from './components/Header/Navigation';
import Homepage from './components/Homepage/Homepage';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import RecipeList from './components/RecipeList/RecipeList';
import RecipeCreate from './components/RecipeCreate/RecipeCreate';
import AuthProvider from './contexts/AuthContext'
import {Logout} from './components/Logout/Logout';
import Categories from './components/Categories/Categories';
import CategoryList from './components/CategoryList/CategoryList';
import Profile from './components/Profile/Profile';
import { RecipeProvider } from './contexts/RecipeContext';
import RecipeEdit from './components/RecipeEdit/RecipeEdit';


function App() {

  return (
    <div className="App">
      <AuthProvider>
        <RecipeProvider>
          <Navigation />

          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/profile' element={<Profile />} />

            <Route path='/recipes' element={<RecipeList />} />
            <Route path='/recipes/create/' element={<RecipeCreate />} />
            <Route path='/recipes/:recipeId/' element={<RecipeDetails />} />
            <Route path='/recipes/:recipeId/edit' element={<RecipeEdit />} />

            <Route path='/categories/' element={<Categories />} />
            <Route path='/categories/:catName' element={<CategoryList />} />
          </Routes>
        </RecipeProvider>
        <Footer />

      </AuthProvider>
    </div>
  );
}

export default App;
