
import {HashRouter, Routes, Link, Route, Switch }from 'react-router-dom';
import Home from './component/Home.jsx';
import ListExpenses from './component/ListExpenses.jsx';
import NewExpense from './component/NewExpense.jsx';
import './App.css';


function App() {
return (
    <>
    <div className="App">
    <h1>Expense Tracker</h1>
    <HashRouter>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/new">New Expense</Link></li>
        <li><Link to="/list">List Expenses</Link></li>
        </ul>
        <Routes>
        
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewExpense />} />
            <Route path="/list" element={<ListExpenses />} />
            <Route path="/list/:id" element={<ListExpenses />} />
        
        </Routes>

    </HashRouter>
    </div>
    </>
);
}

export default App;