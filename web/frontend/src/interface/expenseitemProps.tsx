export interface dateProps {
    date: Date
}

export interface expenseitemProps extends dateProps {
    id?: string
    title: string
    amount: number
}

export interface expensesProps {
    items: Array<expenseitemProps>
}

export interface newExpenseForm {
    onSaveExpenseData(expenseData :expenseitemProps): void
    onCancel(): void
}




