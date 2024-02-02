
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses } = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost); }, 0);

        if(event.target.value > 20000) {
            alert("Value budget max exceeded!");
            return;
        }

        if(event.target.value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }
        
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;