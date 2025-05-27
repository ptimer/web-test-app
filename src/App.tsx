import { Routes, Route, Navigate } from 'react-router';

import Sidebar from '@/components/Sidebar';
import Overview from '@/pages/Overview';
import Users from '@/pages/Users';
import Settings from '@/pages/Settings';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/overview" />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;