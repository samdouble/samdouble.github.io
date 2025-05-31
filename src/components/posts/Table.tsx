export default function Table({
  children,
  headers,
}: { children: React.ReactNode; headers: string[] }) {
  return (
    <table>
      <thead>
        <tr style={{ backgroundColor: '#f5f5f5' }}>
          {headers.map((header) => <th key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
}
