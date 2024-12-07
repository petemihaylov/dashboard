import * as React from "react";

interface LayoutContextProps {
  ref: React.MutableRefObject<HTMLDivElement | null>;
}

const LayoutRefContext = React.createContext<LayoutContextProps | undefined>(
  undefined
);

export const useLayoutContext = () => {
  const context = React.useContext(LayoutRefContext);
  if (!context) {
    throw new Error("useLayoutContext must be used within a LayoutProvider");
  }
  return context;
};

export const LayoutRefProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const value = React.useMemo(() => ({ ref }), [ref]);

  return (
    <LayoutRefContext.Provider value={value}>
      {children}
    </LayoutRefContext.Provider>
  );
};
