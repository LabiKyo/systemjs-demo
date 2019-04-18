import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

const Loading = <div>Loading...</div>;
// 此处不要求 Plugin 是 lazy loading 的，只是试一下 webpack 内置的实现
const Plugin = lazy(() => import("./pages/Plugin"));

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/plugin/">Plugin</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback={Loading}>
          <Route path="/" exact component={Home} />
          <Route path="/plugin/" component={Plugin} />
        </Suspense>
      </div>
    </Router>
  );
}

export default AppRouter;
