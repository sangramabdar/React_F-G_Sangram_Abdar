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
import FormDetails from "./components/form-details";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<FeedBackTable />} />
      <Route path="/form" element={<FeedBackForm />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/:formId" element={<FormDetails />} />
    </>
  )
);

function App() {
  return (
    <main className="bg-primary max-w-7xl mx-auto p-4">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
