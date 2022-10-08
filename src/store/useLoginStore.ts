import create from 'zustand';

// type Nullable<T> = T | null;

interface LoginInterface {
  userId: Nullable<number>;
  userEmail: Nullable<string>;
  updateLoginInfo: (userId: number, userEmail: string) => void;
  resetLoginInfo: () => void;
}

const useLoginStore = create<LoginInterface>((set) => ({
  userId: null,
  userEmail: null,
  updateLoginInfo: (userId, userEmail) => {
    console.log('updateLoginInfo:', userId);
    console.log('userEmail:', userEmail);

    set({
      userId,
      userEmail,
    });
  },
  resetLoginInfo: () =>
    set({
      userId: null,
      userEmail: null,
    }),
}));

export default useLoginStore;
