import React from 'react'

function Feed() {
    const [feed, setFeed] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchFeedData = async () => {
            try {
                setLoading(true);
                const response = await fetch('http://20.244.56.144/evaluation-service/users/:userid/posts', {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0Nzg4MDY3LCJpYXQiOjE3NDQ3ODc3NjcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImFjZTNjNzdmLTIzMWItNDljYS05NTMxLTk1MTQxMTU3M2MxNyIsInN1YiI6InByYWd5ZXNoXzI0bWNhMDQwQHNhaXRtLmFjLmluIn0sImVtYWlsIjoicHJhZ3llc2hfMjRtY2EwNDBAc2FpdG0uYWMuaW4iLCJuYW1lIjoicHJhZ3llc2gga3VtYXIgc2V0aCIsInJvbGxObyI6IjI0bWNhMDQwIiwiYWNjZXNzQ29kZSI6Ikh0UWR6USIsImNsaWVudElEIjoiYWNlM2M3N2YtMjMxYi00OWNhLTk1MzEtOTUxNDExNTczYzE3IiwiY2xpZW50U2VjcmV0IjoiZ01RZFZ0U2hwU0tGQ2ptTiJ9.cD-wb5bEMDeOrxUREwRhYFwXUWyi8tHZ44BQ56LBvJc',
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setFeed(data);
            } catch (error) {
                console.error('Error fetching feed data:', error);
                setFeed([]);
            } finally {
                setLoading(false);
            }
        };

        fetchFeedData();
    }, []);
    return (
        <section>
            <h2 className="text-2xl font-bold mb-4">Feed Overview</h2>
            <ul className="space-y-4">
                {feed.map(item => (
                    <li key={item.id} className="bg-white p-4 rounded shadow border">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">{item.user}</span>
                            <span className="text-sm text-gray-500">{item.date}</span>
                        </div>
                        <div className="mb-1">{item.content}</div>
                        <div className="text-xs text-gray-600">Reach: {item.reach}</div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Feed
