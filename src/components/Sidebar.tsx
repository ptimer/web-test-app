import { Link, useLocation } from 'react-router';

const navItems = [
  { name: 'Overview', path: '/overview' },
  { name: 'Users', path: '/users' },
  { name: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  const { pathname } = useLocation();
  return (
    <aside className="w-60 bg-gray-100 h-screen p-4">
      <nav className="flex flex-col space-y-4">
        {navItems.map(item => (
          <Link
            key={item.name}
            to={item.path}
            className={`text-lg ${pathname === item.path ? 'font-bold text-blue-600' : ''}`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}