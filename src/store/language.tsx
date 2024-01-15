import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Language {
  id: number;
  name: string;
  code: string;
  image: string;
  terbeli: number;
  alumni: number;
  description: string | null;
  deleted_at: string;
  created_at: string;
  updated_at: string;
  image_path: string;
}

type LanguageStore = {
  selectedLanguage: Language;
  languageList: Language[];
  setSelectedLanguage: (data: Language) => void;
  setLanguageList: (data: Language[]) => void;
  emptyLanguageList: () => void;
};

const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      selectedLanguage: {} as Language,
      languageList: [],
      setSelectedLanguage: (data) => set(() => ({ selectedLanguage: data })),
      setLanguageList: (data) => set(() => ({ languageList: data })),
      emptyLanguageList: () => set(() => ({ languageList: [] })),
    }),
    {
      name: "language-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useLanguageStore;
