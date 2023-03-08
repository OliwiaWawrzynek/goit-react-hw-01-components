import data from './data.json';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = () => {
    return (
        <section className="statistics">
            <h2 className="title">Upload stats</h2>

            <ul className="stat-list">
                {data.map(data => (
                    <li
                        style={{
                            backgroundColor: getRandomHexColor()
                        }}
                        className="stat-item" key={data.id}>
                    <span className="label">{data.label}</span>
                    <span className="percentage">{data.percentage}%</span>
                </li>
                ))}
            </ul>
        </section>
    );
};
