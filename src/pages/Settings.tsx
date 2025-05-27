import { useApp } from '@/components/AppProvider';
import { useState } from 'react';

export default function Settings() {
  const { theme, toggleTheme } = useApp();
  
  const [enabled, setEnabled] = useState(true);
  const [note, setNote] = useState('');

  return (
    <div className="space-y-4 max-w-md">
      <div>
        <label className="block mb-1">Theme:</label>
        <button onClick={toggleTheme} className="ml-auto px-3 py-1 border rounded">
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
      <div>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={enabled}
            onChange={() => setEnabled(!enabled)}
            className="mr-2"
          />
          Enable Feature
        </label>
      </div>

      <div>
        <label className="block mb-1">Note:</label>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />
      </div>
    </div>
  );
}
