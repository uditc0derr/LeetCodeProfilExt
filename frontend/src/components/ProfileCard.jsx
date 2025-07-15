export default function ProfileCard({ data }) {
  return (
    <div
      className="shadow p-4 rounded grid grid-cols-1 md:grid-cols-2 gap-4 items-center"
      style={{
        backgroundColor: '#1a1a1a',
        boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
        borderRadius: '8px',
      }}
    >
      <div className="flex flex-col items-center md:items-start">
        {data.avatar && (
          <img
            src={data.avatar}
            alt="Avatar"
            className="w-28 h-28 rounded-full mb-2"
            style={{
              border: '2px solid #FFB400',
            }}
          />
        )}
        <div className="text-center md:text-left">
  <div className="text-base font-bold text-[#FFFFFF]">{data.realName}</div>
  <a
    href={`https://leetcode.com/${data.username}`}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#FFB400] text-sm hover:underline"
  >
    ({data.username})
  </a>
</div>

      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-[#FFFFFF]">Country: <span className="text-[#FFB400]">{data.country ? data.country : 'null'}</span></p>
        <p className="text-[#FFFFFF]">Ranking: <span className="text-[#FFB400]">{data.ranking}</span></p>
        <p className="text-[#FFFFFF]">Reputation: <span className="text-[#FFB400]">{data.reputation}</span></p>
        <div className="flex gap-4 mt-2">
          {data.githubUrl && (
            <a
              href={data.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#FFB400] text-black px-3 py-1 rounded hover:bg-[#E09B00]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.094 3.292 9.396 7.862 10.924.574.106.784-.25.784-.554 0-.274-.01-1.16-.014-2.105-3.2.696-3.878-1.542-3.878-1.542-.524-1.33-1.28-1.684-1.28-1.684-1.046-.716.08-.701.08-.701 1.158.082 1.767 1.188 1.767 1.188 1.03 1.767 2.702 1.256 3.36.96.105-.746.403-1.257.732-1.547-2.553-.29-5.235-1.276-5.235-5.685 0-1.257.448-2.287 1.185-3.095-.12-.29-.513-1.463.113-3.048 0 0 .967-.31 3.17 1.183a11.024 11.024 0 0 1 2.886-.388c.98.005 1.967.132 2.886.388 2.202-1.493 3.168-1.183 3.168-1.183.628 1.585.235 2.758.116 3.048.74.808 1.184 1.838 1.184 3.095 0 4.42-2.686 5.392-5.248 5.676.414.36.78 1.083.78 2.182 0 1.576-.015 2.85-.015 3.24 0 .306.208.666.788.552C20.71 21.393 24 17.09 24 12c0-6.352-5.148-11.5-12-11.5z"/>
              </svg>
              GitHub
            </a>
          )}
          {data.linkedinUrl && (
            <a
              href={data.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#FFB400] text-black px-3 py-1 rounded hover:bg-[#E09B00]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.983 3.5c0 1.381-1.12 2.5-2.5 2.5S0 4.881 0 3.5 1.12 1 2.5 1s2.483 1.119 2.483 2.5zM.5 8h4V24h-4V8zm7.5 0h3.766v2.176h.054c.524-.991 1.802-2.037 3.712-2.037C20.3 8.139 21 11.084 21 15.201V24h-4v-8.34c0-1.988-.035-4.544-2.772-4.544-2.771 0-3.194 2.164-3.194 4.401V24h-4V8z"/>
              </svg>
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
