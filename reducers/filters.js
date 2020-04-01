//Filters reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

export default (state = filtersReducerDefaultState,action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return Object.assign({},state,{
                text: action.text
            })
        case 'SORT_BY_AMOUNT':
            return Object.assign({},state,{
                sortBy: 'amount'
            })
        case 'SORT_BY_DATE':
            return Object.assign({},state,{
                sortBy: 'date'
            })
        case 'SET_START_DATE':
            return Object.assign({},state,{
                startDate: action.startDate
            })
        case 'SET_END_DATE':
            return Object.assign({},state,{
                endDate: action.endDate
            })
        default:
            return state;
    }
};