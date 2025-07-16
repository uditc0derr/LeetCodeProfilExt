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
      timer = setInterval(() => setSeconds(prev => prev + 1), 1000);
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
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 bg-[#121212]">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-[#FFB400] tracking-wide text-center">
        LeetCode Profile Stats
      </h1>

      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col sm:flex-row w-full max-w-2xl gap-2 sm:gap-0"
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter LeetCode username"
          className="
            w-full 
            p-3 sm:p-4 
            text-base sm:text-lg 
            rounded-t sm:rounded-l sm:rounded-t-none 
            text-white 
            outline-none 
            bg-[#2A2A2A] 
            border border-[#444444] 
            focus:border-[#FFB400] 
            transition-colors"
        />
        <button
          type="submit"
          className="
            w-full sm:w-auto 
            px-4 sm:px-5 
            py-3 sm:py-4 
            font-semibold 
            text-base sm:text-lg 
            rounded-b sm:rounded-r sm:rounded-b-none 
            bg-[#FFB400] 
            text-black 
            hover:bg-[#E09B00] 
            active:bg-[#C48800] 
            transition-colors"
        >
          Search
        </button>
      </form>

      {loading && (
        <div className="mt-4 text-[#CCCCCC] text-base sm:text-lg flex items-center gap-2">
          <svg className="animate-spin h-5 w-5 text-[#FFB400]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
          </svg>
          Loading profile... ({seconds}s)
        </div>
      )}

      {error && (
        <div className="mt-4 text-red-500 text-base sm:text-lg">{error}</div>
      )}
    </div>
  );
}
