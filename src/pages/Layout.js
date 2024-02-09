import { Outlet, Link } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import "../index.css";
import "../App.css";

export default function Layout() {
  return (
    <div className="App">
      <PrimeReactProvider>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/results">Results</Link>
            </li>
            <li>
              <Link to="/xyz">Not Found </Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </PrimeReactProvider>
    </div>
  );
}
