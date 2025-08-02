import React, { createContext, useState, ReactNode } from 'react';

// Define all possible section keys
type Section = 'home' | 'skills' | 'projects' | 'contact';

// Define the shape of the state
type ActiveLinkState = {
  [key in Section]: boolean;
};

// Define the context value type
interface ActiveContextType {
  activelink: ActiveLinkState;
  setActivelink: React.Dispatch<React.SetStateAction<ActiveLinkState>>;
  handleActiveLink: (section: Section) => void;
}

// Create the context
export const activeContext = createContext<ActiveContextType | null>(null);

// Define props for the provider
interface ActiveProviderProps {
  children: ReactNode;
}

// ✅ Make sure sections is defined **inside** the file, before use
const allSections: Section[] = ['home', 'skills', 'projects', 'contact'];

export const ActiveProvider: React.FC<ActiveProviderProps> = ({ children }) => {
  const [activelink, setActivelink] = useState<ActiveLinkState>({
    home: true,
    skills: false,
    projects: false,
    contact: false,
  });

  const handleActiveLink = (section: Section) => {
    const updatedState = Object.fromEntries(
      allSections.map((s) => [s, s === section])
    ) as ActiveLinkState;

    setActivelink(updatedState);
  };

  return (
    <activeContext.Provider value={{ activelink, setActivelink, handleActiveLink }}>
      {children}
    </activeContext.Provider>
  );
};
