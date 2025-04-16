import React from 'react'

function TrendingPosts() {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        const fetchTrendingPosts = async () => {
            try {
                const response = await fetch('http://20.244.56.144/evaluation-service/users/:userid/posts', {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0Nzg4MDY3LCJpYXQiOjE3NDQ3ODc3NjcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImFjZTNjNzdmLTIzMWItNDljYS05NTMxLTk1MTQxMTU3M2MxNyIsInN1YiI6InByYWd5ZXNoXzI0bWNhMDQwQHNhaXRtLmFjLmluIn0sImVtYWlsIjoicHJhZ3llc2hfMjRtY2EwNDBAc2FpdG0uYWMuaW4iLCJuYW1lIjoicHJhZ3llc2gga3VtYXIgc2V0aCIsInJvbGxObyI6IjI0bWNhMDQwIiwiYWNjZXNzQ29kZSI6Ikh0UWR6USIsImNsaWVudElEIjoiYWNlM2M3N2YtMjMxYi00OWNhLTk1MzEtOTUxNDExNTczYzE3IiwiY2xpZW50U2VjcmV0IjoiZ01RZFZ0U2hwU0tGQ2ptTiJ9.cD-wb5bEMDeOrxUREwRhYFwXUWyi8tHZ44BQ56LBvJc',
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching trending posts:', error);
                setPosts([]);
            }
        };

        fetchTrendingPosts();
    }, []);
    return (
        <section>
            <h2 className="text-2xl font-bold mb-4">Trending Posts</h2>
            <div className="grid gap-4">
                {posts.map(post => (
                    <div key={post.title} className="bg-white p-4 rounded shadow border">
                        <div className="font-semibold mb-1">{post.title}</div>
                        <div className="text-sm text-gray-600 mb-2">by {post.author}</div>
                        <div className="flex gap-4 text-xs text-gray-500">
                            <span>Likes: {post.likes}</span>
                            <span>Comments: {post.comments}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TrendingPosts