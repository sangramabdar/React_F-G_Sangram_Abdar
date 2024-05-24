import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";

import ThankYou from "./components/thank-you-page";
import FeedBackTable from "./components/feedback-table";
import FeedBackForm from "./components/feedback-form";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<FeedBackTable />} />
      <Route path="/form" element={<FeedBackForm />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
