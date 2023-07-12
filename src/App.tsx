import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import PreviewPage from "./pages/PreviewPage";
import MacBookAir8 from "./pages/MacBookAir8";
import MacBookAir10 from "./pages/MacBookAir8";
import MacBookAir9 from "./pages/MacBookAir9";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/grog-pdf" element={<HomePage />} />
      <Route path="/Preview" element={<PreviewPage />} />
      <Route path="/CSV" element={<MacBookAir9 />} />
    </Routes>
  );
}
export default App;
