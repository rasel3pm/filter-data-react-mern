import { useState } from 'react';
import './App.css';
import TableCom from './components/TableCom';
import { User } from "./data/Data"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
function App() {
  const [input, setInput] = useState("")

  const search = (data) => {
    return data.filter((profile) => profile.name.toLowerCase().includes(input) || profile.username.toLowerCase().includes(input) || profile.company.name.toLowerCase().includes(input))
  }

  return (
    <div className="App">
      <h1>Filtaring Data</h1><hr />
      <input type="text" placeholder='Search...' name='search' className='px-3 my-2' onChange={(e) => setInput(e.target.value)} />
      {/* <input type="checkbox" id="html" name="html" value="html" onChange={(e) => setInput(e.target.value)} />
      <label for="html">HTML</label>
      <input type="checkbox" id="css" name="css" value="css" onChange={(e) => setInput(e.target.value)} />
      <label for="css">css</label> */}

      <TableCom data={search(User)} />
      <Footer/>

    </div>
  );
}

export default App;
