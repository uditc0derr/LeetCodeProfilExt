import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getLeetCodeProfile } from '../services/api';
import ProfileCard from '../components/ProfileCard';
import StatsGrid from '../components/StatsGrid';
import PieChartComp from '../components/PieChartComp';
import BarChartComp from '../components/BarChartComp';

export default function ProfilePage() {
  const { username } = useParams();
  const location = useLocation();
  const initialData = location.state?.profile || null;

  const [data, setData] = useState(initialData);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!initialData) {
      getLeetCodeProfile(username)
        .then((res) => {
          if (res && Object.keys(res).length > 0) {
            setData(res);
          } else {
            setError('Profile not found!');
          }
        })
        .catch(() => setError('Failed to load profile.'));
    }
  }, [username, initialData]);

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  if (!data) return null; 

  return (
    <div className="p-4 max-w-4xl mx-auto" style={{ backgroundColor: '#121212' }}>
      <h1 className="text-3xl font-bold text-center mb-6 text-[#FFB400] tracking-wide">
        LeetCode Profile Overview
      </h1>

      <ProfileCard data={data} />
      <StatsGrid data={data} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="p-2 rounded transition duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          style={{ backgroundColor: '#1a1a1a', boxShadow: '0 2px 4px rgba(0,0,0,0.4)' }}>
          <PieChartComp acceptanceRate={data.acceptanceRate} />
        </div>

        <div className="p-2 rounded transition duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          style={{ backgroundColor: '#1a1a1a', boxShadow: '0 2px 4px rgba(0,0,0,0.4)' }}>
          <BarChartComp easy={data.easy} medium={data.medium} hard={data.hard} />
        </div>
      </div>

      <div className="mt-4 p-4 rounded"
        style={{ backgroundColor: '#1a1a1a', boxShadow: '0 2px 4px rgba(0,0,0,0.4)' }}>
        <h3 className="font-bold mb-4 text-[#FFB400] tracking-wide">Problems Solved by Language</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.languages.map(lang => (
            <div key={lang.languageName}
              className="p-3 rounded text-center transition duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg"
              style={{ backgroundColor: '#2A2A2A', color: '#FFFFFF', boxShadow: '0 2px 4px rgba(0,0,0,0.4)' }}>
              <div className="font-semibold text-[#FFB400]">{lang.languageName}</div>
              <div className="text-[#CCCCCC]">Solved: {lang.problemsSolved}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
