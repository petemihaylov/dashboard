import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const Loading = ({ children }: Props) => (
  <div
    data-testid="center-outer-container"
    className="flex h-full w-full flex-col items-center justify-center overflow-auto"
  >
    <div
      data-testid="center-inner-container"
      className="flex flex-col items-center justify-center p-4"
    >
      {children}
    </div>
  </div>
);

export default Loading;
