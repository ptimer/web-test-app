import { useState } from 'react';

import { useApp } from '@/components/AppProvider';

export default function Users() {
  const { users, setUsers, errorMessage } = useApp();

  const [asc, setAsc] = useState(true);

  const sortByName = () => {
    const sorted = [...users].sort((a, b) =>
      asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    
    setUsers(sorted);
    setAsc(prev => !prev);
  };

  if (errorMessage) {
    return <span className="text-red-500">{errorMessage}</span>;
  }

  return (
    <table className="w-full border-collapse mt-4">
      <thead>
        <tr>
          <th onClick={sortByName} className="cursor-pointer text-left">Name &#11021;</th>
          <th className="text-left">Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, idx) => (
          <tr key={idx} className="border-t">
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}