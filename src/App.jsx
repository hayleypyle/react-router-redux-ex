import './App.css';
import {BrowserRouter, Routes, Link, Route }from 'react-router-dom';
import Home from './component/Home.jsx';
import ListExpenses from './component/ListExpenses.jsx';
import NewExpense from './component/NewExpense.jsx';


function App() {
  return (
    <>
    <div className="App">
      <h1>Expense Tracker</h1>
      <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/new">New Expense</Link></li>
          <li><Link to="/list">List Expenses</Link></li>
        </ul>
        <Routes>
        <Route exact path ="/" element={Home}>Home</Route>
        <Route path ="/new" element={NewExpense}>New Expense</Route>
        <Route path = "/list" element={ListExpenses}>List Expenses</Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
