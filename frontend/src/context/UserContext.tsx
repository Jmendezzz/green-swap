import { BasicInfoUserDTO } from '@/domain/user/BasicInfoUserDTO';
import { createContext, useContext, useState } from 'react';

interface UserContextState {
  user: BasicInfoUserDTO | null;
  setUser: (user: BasicInfoUserDTO | null) => void;
}

const UserContext = createContext<UserContextState | undefined>(undefined);

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const [user, setUser] = useState<BasicInfoUserDTO | null>(null);

  const handleUser = (user: BasicInfoUserDTO | null) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, setUser: handleUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext(){
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserContextProvider');
    }
    return context;
}
