import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from './components/getuser/User.jsx';
import Create from './components/createuser/Create.jsx';
import Edit from './components/edituser/Edit.jsx';

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
      path: "/users/edit/:id",
      element: <Edit />,
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
