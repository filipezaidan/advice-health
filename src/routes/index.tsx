import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { Layout } from "../components/layout";
import { Agendamentos } from "../pages/Agendamentos";
import { Consultas } from "../pages/Consultas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/agendamento",
        element: <Agendamentos />,
      },
      {
        path: "/consulta",
        element: <Consultas />,
      },
    ],
  },
]);

export const Route = () => {
  return <RouterProvider router={router} />;
};
