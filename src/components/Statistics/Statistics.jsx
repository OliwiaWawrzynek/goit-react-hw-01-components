import data from './data.json';

export const Statistics = () => {
    return (
        <section className="statistics">
            <h2 className="title">Upload stats</h2>

            <ul className="stat-list">
                {data.map(data => (
                <li className="item" key={data.id}>
                    <span className="label">{data.label}</span>
                    <span className="percentage">{data.percentage}%</span>
                </li>
                ))}
            </ul>
        </section>
    );
};