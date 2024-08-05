// import "./index.css";
// import Dashboard from "./pages/dashboard/Dashboard.tsx";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import Reports from "./pages/reports/Reports.tsx";
// import Home from "./pages/Home.tsx";

// const Layout = () => {
//   return <Outlet />;
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/home",
//         element: <Home />,
//       },
//       {
//         path: "/reports",
//         element: <Reports />,
//       },

//       {
//         path: "/dashboard",
//         element: <Dashboard />,
//       },
//     ],
//   },
// ]);



// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <RouterProvider router={router} />
// );


// src/index.tsx
import "./index.css";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Reports from "./pages/reports/Reports.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import Layout from "./pages/Layout.tsx"; // Updated path
import Profiles from "./pages/profiles/Profiles.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/profiles",
        element: <Profiles />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

