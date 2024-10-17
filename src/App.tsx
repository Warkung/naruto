import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Characters from "./pages/Characters";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "characters",
      element: <Characters />,
    },
  ]);

  return (
    <div className="bg-[url('/images/2af9eabc73867b4ef4d8b5c499b3047f.jpg')] min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
