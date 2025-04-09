import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./layout/mainLayout";

// import NotFoundPage from "./pages/NotFoundPage"; // create if needed

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      
      {/* Add more routes if needed */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
