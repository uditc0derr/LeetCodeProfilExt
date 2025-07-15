import { PieChart, Pie, Cell } from 'recharts';

export default function PieChartComp({ acceptanceRate }) {
  const data = [
    { name: 'Accepted', value: acceptanceRate },
    { name: 'Remaining', value: 100 - acceptanceRate }
  ];

  const COLORS = ['#FFB400', '#FFFFFF'];

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
        Acceptance Rate
      </h3>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          startAngle={90}
          endAngle={-270}
          labelLine={false}
          label={({ cx, cy }) => (
            <text
              x={cx}
              y={cy}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-xl font-semibold"
              style={{ fill: '#FFFFFF' }}
            >
              {acceptanceRate}%
            </text>
          )}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}
