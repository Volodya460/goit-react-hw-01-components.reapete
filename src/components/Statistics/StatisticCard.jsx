import css from './Statistics.module.css';
import { randomColor } from './randomColor';
export default function StatisticCard({ id, label, percentage }) {
  return (
    <li
      className={css.item}
      key={id}
      style={{ backgroundColor: randomColor() }}
    >
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}
