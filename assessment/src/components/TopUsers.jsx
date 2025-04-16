import React, { useState, useEffect } from 'react'

function TopUsers() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchTopUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://20.244.56.144/evaluation-service/users', {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0Nzg4MDY3LCJpYXQiOjE3NDQ3ODc3NjcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImFjZTNjNzdmLTIzMWItNDljYS05NTMxLTk1MTQxMTU3M2MxNyIsInN1YiI6InByYWd5ZXNoXzI0bWNhMDQwQHNhaXRtLmFjLmluIn0sImVtYWlsIjoicHJhZ3llc2hfMjRtY2EwNDBAc2FpdG0uYWMuaW4iLCJuYW1lIjoicHJhZ3llc2gga3VtYXIgc2V0aCIsInJvbGxObyI6IjI0bWNhMDQwIiwiYWNjZXNzQ29kZSI6Ikh0UWR6USIsImNsaWVudElEIjoiYWNlM2M3N2YtMjMxYi00OWNhLTk1MzEtOTUxNDExNTczYzE3IiwiY2xpZW50U2VjcmV0IjoiZ01RZFZ0U2hwU0tGQ2ptTiJ9.cD-wb5bEMDeOrxUREwRhYFwXUWyi8tHZ44BQ56LBvJc',
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching top users data:', error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTopUsers();
  }, []);
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Top Users</h2>
      {loading ? (
        <p className="text-center py-4">Loading users data...</p>
      ) : users.length > 0 ? (
        <table className="min-w-full bg-white border rounded shadow">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">User</th>
              <th className="py-2 px-4 border-b">Posts</th>
              <th className="py-2 px-4 border-b">Engagement</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.id || idx} className={idx % 2 ? 'bg-gray-50' : ''}>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b text-center">{user.posts}</td>
                <td className="py-2 px-4 border-b text-center">{user.engagement}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center py-4">No users data available.</p>
      )}
    </section>
  );
}

export default TopUsers