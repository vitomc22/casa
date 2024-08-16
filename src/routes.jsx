import { Home } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "root",
    path: "/",
    element: <Home />,
  } 
];

export default routes;
