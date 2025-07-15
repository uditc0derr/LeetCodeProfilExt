import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLeetCodeProfile } from '../services/api';

export default function HomePage() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (loading) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      setSeconds(0);
    }
    return () => clearInterval(timer);
  }, [loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError('');

    try {
      const data = await getLeetCodeProfile(username.trim());
      if (data && Object.keys(data).length > 0) {
        navigate(`/profile/${username.trim()}`, { state: { profile: data } });
      } else {
        setError('Profile not found!');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch profile.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4" style={{ backgroundColor: '#121212' }}>
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#FFB400] tracking-wide text-center">
        LeetCode Profile Stats
      </h1>

      <form onSubmit={handleSubmit} className="flex w-full max-w-2xl">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter LeetCode username"
          className="flex-1 p-3 text-lg rounded-l text-[#FFFFFF] outline-none"
          style={{ 
            backgroundColor: '#2A2A2A', 
            border: '1px solid #444444',
            marginRight: '6px'  
          }}
          onFocus={(e) => e.target.style.border = '1px solid #FFB400'}
          onBlur={(e) => e.target.style.border = '1px solid #444444'}
        />
        <button
          type="submit"
          className="px-4 py-3 font-semibold text-lg rounded-r transform transition-transform duration-150 active:scale-95 cursor-pointer"
          style={{ backgroundColor: '#FFB400', color: '#000000' }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#E09B00'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#FFB400'}
          onMouseDown={(e) => e.target.style.backgroundColor = '#C48800'}
          onMouseUp={(e) => e.target.style.backgroundColor = '#FFB400'}
        >
          Search
        </button>
      </form>

      {loading && (
        <div className="mt-4 text-[#CCCCCC] text-lg flex items-center gap-2">
          <svg className="animate-spin h-5 w-5 text-[#FFB400]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
          </svg>
          Loading profile... ({seconds}s)
        </div>
      )}

      {error && (
        <div className="mt-4 text-red-500 text-lg">{error}</div>
      )}
    </div>
  );
}
