import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CharactersDetail from "./pages/CharactersDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "characters/:id",
      element: <CharactersDetail />,
    },
  ]);

  return (
    <div className="bg-[url('/images/2af9eabc73867b4ef4d8b5c499b3047f.jpg')] min-h-screen ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
