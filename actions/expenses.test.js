import { editExpense } from '../actions/expense';

test('should setup edit expense action object', () => {
    const action = editExpense('123abcd', {description: 'Buy office desk'});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abcd",
        updates: {
            description: "Buy office desk"
        }
    })
})