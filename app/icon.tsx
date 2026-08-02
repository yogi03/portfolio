import { ImageResponse } from 'next/og';

export const size = {
  width: 96,
  height: 96,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="96" height="96">
          <rect width="64" height="64" rx="16" fill="#18181A" />
          <path
            d="M18 18 L32 32 L18 46"
            fill="none"
            stroke="#FFFF22"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M46 18 L32 32 L46 46"
            fill="none"
            stroke="#a3e635"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
