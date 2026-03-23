import Tasks from "./Tasks";

export default function Column({ col, data }) {
    return (
        <div className="column">
            <h2 className="column-title">
                {col[0].toUpperCase() + col.slice(1)}
            </h2>
            <div
                className="column-content"

            >
                <Tasks data={data} col={col} />
            </div>
        </div>
    );
}
