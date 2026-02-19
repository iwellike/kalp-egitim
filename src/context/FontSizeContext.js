import React, { createContext, useState } from 'react';

export const FontSizeContext = createContext();

export function FontSizeProvider({ children }) {
  const [fontSize, setFontSize] = useState(16);

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
}
