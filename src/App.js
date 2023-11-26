import "./App.css";
import React, { createContext, useState } from "react";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import SavedArticles from "./Component/SavedArticles"; // Import the SavedArticles component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Create a context to manage saved articles
export const AppContext = createContext();

const App = () => {
  const [savedArticles, setSavedArticles] = useState([]);

  // Function to save an article
  const saveArticle = (article) => {
    setSavedArticles((prevArticles) => [...prevArticles, article]);
  };

  return (
    <AppContext.Provider value={{ savedArticles, saveArticle }}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<News key="general" country="in" category="general" />}
            />
            <Route
              exact
              path="/business"
              element={<News key="business" country="in" category="business" />}
            />
            <Route
              exact
              path="/entertainment"
              element={<News key="entertainment" country="in" category="entertainment" />}
            />
            <Route
              exact
              path="/health"
              element={<News key="health" country="in" category="health" />}
            />
            <Route
              exact
              path="/science"
              element={<News key="science" country="in" category="science" />}
            />
            <Route
              exact
              path="/sports"
              element={<News key="sports" country="in" category="sports" />}
            />
            <Route
              exact
              path="/technology"
              element={<News key="technology" country="in" category="technology" />}
            />
            <Route exact path="/saved" element={<SavedArticles />} />
          </Routes>
        </div>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
