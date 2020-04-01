import uuid from 'uuid';

//ADD_EXPENSE
export const addExpense = (expense = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description: expense.description ? expense.description : '',
            note: expense.note ? expense.note : '',
            amount: expense.amount ? expense.amount : 0,
            createdAt: expense.createdAt ? expense.createdAt : 0
        }
    }
}

export const removeExpense = (expense = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id: expense.id
    }
};

//EDIT_EXPENSE
export const editExpense = (id,updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
};