export interface dateProps {
    date: Date
}

export interface expenseitemProps extends dateProps {
    title: string
    amount: number
}

export interface expensesProps {
    items: Array<expenseitemProps>
}


