export function Table({ users }) {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>No</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Win</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
            {users.map((user) => (
              <tr key={user.No}>
                <td>{user.No}</td>
                <td>{user.Team}</td>
                <td>{user.Matches}</td>
                <td>{user.Win}</td>
                <td>{user.Lost}</td>
                <td>{user.Tied}</td>
                <td>{user.NRR}</td>
                <td>{user.Points}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
