import css from './Transaction.module.css';

export default function Transaction({ type, amount, currency, id }) {
  return (
    <tr key={id}>
      <td className={css.td}>{type.replace(type[0], type[0].toUpperCase())}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </tr>
  );
}
