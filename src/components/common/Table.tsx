
type TableProps = {
  columns: string[];
  data: Record<string, string | number>[];
  striped?: boolean;
};

function Table({
  columns,
  data,
  striped = false,
}: TableProps) {
  return (
    <table className={`data-table ${striped ? "striped" : ""}`}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column}>
                {row[column] ?? "-"}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
