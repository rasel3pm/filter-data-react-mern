import { useState } from "react";
import "./App.css";
import TableCom from "./components/TableCom";
import { User } from "./data/Data";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import { Form } from "react-bootstrap";
function App() {
  const [input, setInput] = useState("");

  const search = (data) => {
    return data.filter(
      (profile) =>
        profile.name.toLowerCase().includes(input) ||
        profile.username.toLowerCase().includes(input) ||
        profile.company.name.toLowerCase().includes(input)
    );
  };

  return (
    <main className="App">
      <h4>Filtaring Data</h4>
      <hr />

      <form>
        <div className="search_area">
          <div className="search_input">
            <input
              type="text"
              placeholder="Search..."
              className="shadow"
              name="search"
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="Check_box">
            <Form.Check
              type="switch"
              id="custom-switch"
              name="switch"
              label="Check"
            />
          </div>
        </div>
      </form>
      <TableCom data={search(User)} />
      <Footer />
    </main>
  );
}

export default App;
