import Transaction from './Transaction';
import css from './Transaction.module.css';
export default function TransactionList({ arr }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {arr.map(({ type, amount, currency, id }) => {
          return (
            <Transaction
              type={type}
              amount={amount}
              currency={currency}
              key={id}
            />
          );
        })}
      </tbody>
    </table>
  );
}
