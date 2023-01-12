import { PropsWithChildren } from 'react';
import { NavLeft } from '@/components';

export interface PropsMessageAlert {}

export const MessageAlert = ({ children }: PropsWithChildren<PropsMessageAlert>): JSX.Element => {
  return (
    <div
      className="flex h-12 justify-between p-3.5"
      style={{
        width: '344px',
        background: '#323232',
        color: '#EBF2F7',
        borderRadius: '4px',
      }}
    >
      <div className="inline-flex space-x-3">
        <div className="mt-0.5">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4211_1112)">
              <path
                d="M11.0553 6.33203L6.97935 10.2205L4.94482 8.27629"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 14.666C11.6815 14.666 14.666 11.6815 14.666 8C14.666 4.31846 11.6815 1.33398 8 1.33398C4.31846 1.33398 1.33398 4.31846 1.33398 8C1.33398 11.6815 4.31846 14.666 8 14.666Z"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_4211_1112">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="text-sm font-normal" style={{ color: '#EBF2F7' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MessageAlert;
