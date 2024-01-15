import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface StudentDashboardData {
  program_terselesaikan: number;
  program_berjalan: number;
  total_waktu_kursus_dijalani: number;
  hak_student: string[];
  profile_percentage: number;
}

type StudentDashboardDataStore = {
  studentDashboardData: StudentDashboardData;
  setStudentDashboardData: (data: StudentDashboardData) => void;
  emptyStudentDashboardData: () => void;
};

const useStudentDashboardDataStore = create<StudentDashboardDataStore>()(
  persist(
    (set) => ({
      studentDashboardData: {} as StudentDashboardData,
      setStudentDashboardData: (data) =>
        set(() => ({ studentDashboardData: data })),
      emptyStudentDashboardData: () =>
        set(() => ({ studentDashboardData: {} as StudentDashboardData })),
    }),
    {
      name: "studentdashboard-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStudentDashboardDataStore;
