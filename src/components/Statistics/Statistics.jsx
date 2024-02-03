import StatisticCard from './StatisticCard';
import css from './Statistics.module.css';
export default function Statistics({ title, data }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {data.map(({ id, label, percentage }) => {
          return (
            <StatisticCard key={id} label={label} percentage={percentage} />
          );
        })}
      </ul>
    </section>
  );
}
