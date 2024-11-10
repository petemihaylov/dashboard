import React, { useState } from 'react';
import { Button } from '../components/ui/button';

const Home = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-auto">
      {/* Inner container for vertical and horizontal centering */}
      <div className="flex max-h-full flex-col items-center">
        {/* Content */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="my-4">Vite + React</h1>
          <Button onClick={() => setCount((c) => c + 1)}>
            count is {count}
          </Button>

          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
};

export default Home;
