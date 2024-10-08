import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import { GlobalProvider } from "./context/GlobalContext.tsx";
import Headphones from "./pages/Headphones.tsx";
import Speakers from "./pages/Speakers.tsx";
import Earphones from "./pages/Earphones.tsx";
import NotFoundPage from "./components/NotFoundPage.tsx";
import XX99MarkIIMore from "./components/XX99MarkIIMore.tsx";
import XX99MarkIMore from "./components/XX99MarkIMore.tsx";
import XX59More from "./components/XX59More.tsx";
import ZX7More from "./components/ZX7More.tsx";
import ZX9More from "./components/ZX9More.tsx";
import YX1More from "./components/YX1More.tsx";
import CheckOut from "./pages/CheckOut.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <NotFoundPage /> },
  {
    path: "/Headphones",
    element: <Headphones />,
  },
  {
    path: "/Speakers",
    element: <Speakers />,
  },
  {
    path: "/Earphones",
    element: <Earphones />,
  },
  {
    path: "/XX99MarkII",
    element: <XX99MarkIIMore />,
  },
  {
    path: "/XX99MarkI",
    element: <XX99MarkIMore />,
  },
  {
    path: "/Headphones/XX99MarkII",
    element: <XX99MarkIIMore />,
  },
  {
    path: "/Headphones/XX99MarkI",
    element: <XX99MarkIMore />,
  },

  {
    path: "/Headphones/XX59",
    element: <XX59More />,
  },

  {
    path: "/Speakers/ZX9",
    element: <ZX9More />,
  },
  {
    path: "/Speakers/ZX7",
    element: <ZX7More />,
  },

  {
    path: "/Earphones/YX1",
    element: <YX1More />,
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>
);
