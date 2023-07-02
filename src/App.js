import "./App.css";

import React from "react";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const App =()=> {
  // constructor(props) {
  //   super(props);

  //   this.state = {};
  // },

//  const [progress, setProgress] = useState(0)
    return (
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route
              exact
              path="/general"
              element={<News key="general" country="in" category="general" />}
            >
              {" "}
            </Route>
            <Route
              exact
              path="/business"
              element={<News key="business" country="in" category="business" />}
            >
              {" "}
            </Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  country="in"
                  category="entertainment"
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/health"
              element={<News key="health" country="in" category="health" />}
            ></Route>
            <Route
              exact
              path="/science"
              element={<News key="science" country="in" category="science" />}
            ></Route>
            <Route
              exact
              path="/sports"
              element={<News key="sports" country="in" category="sports" />}
            >
              {" "}
            </Route>
            <Route
              exact
              path="/technology"
              element={
                <News key="technology" country="in" category="technology" />
              }
            >
              {" "}
            </Route>
          </Routes>
        </div>
        ;
      </Router>
    );
  }


App.propTypes = propTypes;
App.defaultProps = defaultProps;
// #endregion

export default App;
