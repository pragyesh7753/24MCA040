import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import TopUsers from './components/TopUsers'
import Feed from './components/Feed'
import TrendingPosts from './components/TrendingPosts'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow mb-6">
          <div className="container mx-auto px-4 py-3 flex gap-6">
            <Link to="/top-users" className="text-blue-600 hover:underline">Top Users</Link>
            <Link to="/feed" className="text-blue-600 hover:underline">Feed</Link>
            <Link to="/trending-posts" className="text-blue-600 hover:underline">Trending Posts</Link>
          </div>
        </nav>
        <main className="container mx-auto px-4">
          <Routes>
            <Route path="/top-users" element={<TopUsers />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/trending-posts" element={<TrendingPosts />} />
            <Route path="/" element={<Navigate to="/top-users" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
