import React from 'react';

const LoadSpinner = () => {
    return (
        <div className="flex items-center justify-center space-x-2 animate-bounce h-screen">
          <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
        </div>
      );
};

export default LoadSpinner;