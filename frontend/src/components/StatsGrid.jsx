export default function StatsGrid({ data }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      <div
        className="p-2 rounded shadow text-center"
        style={{
          backgroundColor: '#1a1a1a',
          boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
          borderRadius: '8px',
        }}
      >
        <p className="font-bold text-[#FFB400]">Total Solved</p>
        <p className="text-[#FFFFFF]">{data.totalSolved}</p>
      </div>

      <div
        className="p-2 rounded shadow text-center"
        style={{
          backgroundColor: '#1a1a1a',
          boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
          borderRadius: '8px',
        }}
      >
        <p className="font-bold text-[#FFB400]">Easy</p>
        <p className="text-[#FFFFFF]">{data.easy}</p>
      </div>

      <div
        className="p-2 rounded shadow text-center"
        style={{
          backgroundColor: '#1a1a1a',
          boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
          borderRadius: '8px',
        }}
      >
        <p className="font-bold text-[#FFB400]">Medium</p>
        <p className="text-[#FFFFFF]">{data.medium}</p>
      </div>

      <div
        className="p-2 rounded shadow text-center"
        style={{
          backgroundColor: '#1a1a1a',
          boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
          borderRadius: '8px',
        }}
      >
        <p className="font-bold text-[#FFB400]">Hard</p>
        <p className="text-[#FFFFFF]">{data.hard}</p>
      </div>
    </div>
  );
}
