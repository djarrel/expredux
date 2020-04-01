export const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT',
        text
    }
}

export const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
}

export const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    }
}
export const setStartDate = (startDate) => {
    return {
        type: 'SET_START_DATE',
        startDate
    }
}

//SET_END_DATE
export const setEndDate = (endDate) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }
}