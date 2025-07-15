import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export default function BarChartComp({ easy, medium, hard }) {
  const data = [
    { name: 'Easy', count: easy },
    { name: 'Medium', count: medium },
    { name: 'Hard', count: hard }
  ];

  return (
    <div
      className="p-2 rounded shadow"
      style={{
        backgroundColor: '#1a1a1a',
        boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
        borderRadius: '8px',
      }}
    >
      <h3 className="text-center font-bold mb-2" style={{ color: '#FFFFFF' }}>
        Questions Solved
      </h3>
      <BarChart width={300} height={300} data={data}>
        <XAxis dataKey="name" tick={{ fill: '#CCCCCC' }} />
        <YAxis tick={{ fill: '#CCCCCC' }} />
        <Tooltip 
          contentStyle={{ backgroundColor: '#2A2A2A', border: 'none', color: '#FFFFFF' }} 
          itemStyle={{ color: '#FFFFFF' }}
        />
        <Bar dataKey="count" fill="#FFB400" />
      </BarChart>
    </div>
  );
}
