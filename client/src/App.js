import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from './components/getuser/User';
import Create from './components/createuser/Create';

function App() {

  const route = createBrowserRouter([
    {
      path: "/users",
      element: <User />,
    },
    {
      path: "/users/create",
      element: <Create />,
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
