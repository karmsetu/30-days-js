// Level 3

function personAccount(
    firstName: string,
    lastName: string,
    incomes: number[],
    expenses: number[]
) {
    const totalIncome = () => incomes.reduce((p, c) => p + c);
    const totalExpenses = () => expenses.reduce((p, c) => p + c);
    const accountBalance = () => totalIncome() - totalExpenses();
    const accountInfo = () => {
        name: firstName + lastName;
    };
    const addIncome = (income: number) => incomes.push(income);
    const addExpenses = (expense: number) => expenses.push(expense);

    return {
        totalIncome: totalIncome(),
        totalExpenses: totalExpenses(),
        accountBalance: accountBalance(),
        accountInfo: accountInfo(),
        addIncome,
        addExpenses,
    };
}
