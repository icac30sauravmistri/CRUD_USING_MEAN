import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from './components/getuser/User';

function App() {

  const route = createBrowserRouter([
    {
      path: "/users",
      element: <User />,
    },
    {
      path: "/users/create",
      element: "User Create page",
    },
    {
      path: "/users/edit",
      element: "User Edit page",
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
