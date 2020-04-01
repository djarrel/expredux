import React from 'react'

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: ''
    }
    render() {
        return (
            <div>
                <form>
                    <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    />
                    <input
                    type="text"
                    placeholder="Amount"
                    value={this.state.amount} />
                    <textarea
                    placeholder="Add a note for expense(optional)"
                    value={this.state.note}>
                    </textarea>
                </form>
            </div>
        )
    }
}

