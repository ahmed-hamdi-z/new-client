import React from 'react';

const WhatsAppIcon: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full">
        <a href='/'>
              <svg
        className="w-12 h-12 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0C5.373 0 0 5.373 0 12c0 2.114.55 4.109 1.6 5.904l-1.678 6.124 6.292-1.653C7.887 23.407 9.913 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.012 21.803c-1.754 0-3.487-.454-5.022-1.315l-3.595.945.964-3.519C3.166 16.964 2.72 15.245 2.72 13.487c0-5.15 4.178-9.328 9.328-9.328 5.15 0 9.328 4.178 9.328 9.328s-4.178 9.328-9.328 9.328zm5.362-7.245c-.295-.148-1.744-.858-2.015-.959-.271-.102-.468-.148-.665.148-.197.295-.763.958-.934 1.154-.171.197-.343.221-.639.074-.296-.148-1.252-.462-2.384-1.475-.881-.785-1.477-1.753-1.65-2.048-.171-.295-.018-.454.13-.601.134-.134.296-.346.444-.52.148-.173.197-.296.295-.493.1-.197.05-.37-.024-.521-.075-.148-.665-1.611-.911-2.211-.241-.579-.487-.501-.665-.511-.174-.011-.37-.011-.568-.011-.197 0-.52.074-.794.37-.272.295-1.043 1.018-1.043 2.479s1.067 2.874 1.215 3.074c.148.197 2.098 3.204 5.078 4.493.711.307 1.268.49 1.702.627.715.228 1.365.196 1.877.119.573-.085 1.744-.713 1.99-1.403.246-.688.246-1.278.172-1.403-.071-.124-.272-.197-.567-.346z"
        />
      </svg>
        </a>
     
    </div>
  );
};

export default WhatsAppIcon;
