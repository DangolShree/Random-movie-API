import "./App.css";
import { Display } from "./component/Display";
import { SearchForm } from "./component/SearchForm";

function App() {
  return (
    <div className="Wrapper bg-dark text-warning min-vh-100">
      <div className="container">
        {/* Title */}

        <div className="row">
          <div className="col">
            <h1 className="mt-5 text-center">My Movie collection</h1>
          </div>
        </div>

        <hr />

        {/* Search area */}
        <SearchForm />
        {/* card */}

        {/* form */}

        <Display />
      </div>
    </div>
  );
}

export default App;
