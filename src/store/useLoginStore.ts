import create from 'zustand';

interface LoginInterface {
  userId: number;
  userEmail: string;
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
