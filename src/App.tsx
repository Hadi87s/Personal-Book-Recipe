import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./screens/home/home";
import Recipes from "./screens/recipes/Recipes";
import RecipeDetails from "./screens/recipe-details/RecipeDetails";
import AddRecipe from "./screens/add-recipe/addRecipe";
import Login from "./screens/login/login";
import NotFound from "./screens/not-found/NotFound";
import RecipesProvider from "./providers/recipesProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recipe",
        element: <Recipes />,
      },
      {
        path: "/recipe/:id",
        element: <RecipeDetails />,
      },
      {
        path: "/add-recipe",
        element: <AddRecipe />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function NavbarLayout() {
  return (
    <>
      <Navbar />
      <Outlet />{" "}
      {/*This is used to render the other components beneath the Navbar */}
    </>
  );
}

function App() {
  return <RecipesProvider>
    <RouterProvider router={router} />
  </RecipesProvider>;
}

export default App;
