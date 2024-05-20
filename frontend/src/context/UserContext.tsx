import { BasicInfoUserDTO } from '@/domain/user/BasicInfoUserDTO';
import { getBasicInfoCurrentUser } from '@/services/authService';
import { createContext, useContext, useEffect, useState } from 'react';

interface UserContextState {
  user: BasicInfoUserDTO | null;
  setUser: (user: BasicInfoUserDTO | null) => void;
  isLoading: boolean;
}

const UserContext = createContext<UserContextState | undefined>(undefined);

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const [user, setUser] = useState<BasicInfoUserDTO | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleUser = (user: BasicInfoUserDTO | null) => {
    setUser(user);
  };

  const getUser = async () => {
    setIsLoading(true);
    try {
      const data = await getBasicInfoCurrentUser();
      setUser(data);
    } catch (error) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser: handleUser, isLoading }}>
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
