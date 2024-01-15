import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CourseCategory {
  id: number;
  name: string;
  language_id: number;
  image: string;
  is_published: boolean;
  deleted_at: string;
  created_at: string;
  updated_at: string;
}

interface CourseProgram {
  id: number;
  name: string;
  course_category_id: number;
  description: string;
  image: string;
  test_link: string;
  is_published: boolean;
  deleted_at: string;
  created_at: string;
  updated_at: string;
}

interface CourseClassType {
  id: number;
  name?: string;
  class_type: string;
  class_type_id: number;
  minimum_students: number;
  maximum_students: number;
  student_meet_set_id: number;
  final_price: number;
  session_number: number;
}

interface ClassMeetingSet {
  class_meeting_set_id: number;
  id: number;
  name: string;
  number_of_meeting: number;
  max_day_duration: number;
  session_minute_duration: number;
  created_at: string;
  updated_at: string;
}

interface HourOption {
  day: string;
  hour_start: string;
  hour_end: string;
}

interface CoursePreference {
  classGoal: string | null;
  skillsGoal: Array<string>;
  tutorPreference: Array<string>;
  studentAvailability: Array<HourOption>;
  gender: string;
  pertemuan: number;
}

interface Language {
  id: number;
  name: string;
  code: string;
  image: string;
  description: string | null;
}

interface CourseClass {
  id: number;
  name: string;
  description: string;
  code: string;
  class_type_id: number;
  class_type: CourseClassType;
  class_meeting_set_id: number;
  class_meeting_set: ClassMeetingSet;
  original_price: number;
  final_price: number;
  is_published: true;
  course_program_id: number;
  course_program: CourseProgram;
  discount: number;
  features: string[];
  materi_pembelajaran: string[];
  keuntungan?: string[];
  benefits?: string[];
  slug: string;
  course_category: CourseCategory;
  language: Language;
  deleted_at: string;
  created_at: string;
  updated_at: string;
}

type CourseStore = {
  // CourseCategory
  selectedCourseCategory: CourseCategory;
  courseCategoryList: CourseCategory[];
  selectCourseCategory: (data: CourseCategory) => void;
  deselectCourseCategory: () => void;
  setCourseCategoryList: (data: CourseCategory[]) => void;
  emptyCourseCategoryList: () => void;
  // CourseProgram
  selectedCourseProgram: CourseProgram;
  courseProgramList: CourseProgram[];
  selectCourseProgram: (data: CourseProgram) => void;
  deselectCourseProgram: () => void;
  setCourseProgramList: (data: CourseProgram[]) => void;
  emptyCourseProgramList: () => void;
  // CourseClassType
  selectedCourseClassType: CourseClassType;
  courseClassTypeList: CourseClassType[];
  selectCourseClassType: (data: CourseClassType) => void;
  deselectCourseClassType: () => void;
  setCourseClassTypeList: (data: CourseClassType[]) => void;
  emptyCourseClassTypeList: () => void;
  // CourseClass
  selectedCourseClass: CourseClass;
  courseClassList: CourseClass[];
  selectCourseClass: (data: CourseClass) => void;
  deselectCourseClass: () => void;
  setCourseClassList: (data: CourseClass[]) => void;
  emptyCourseClassList: () => void;
  // CoursePreference
  selectedCoursePreference: CoursePreference;
  selectCoursePreference: (data: CoursePreference) => void;
  deselectCoursePreference: () => void;
};

const useCourseStore = create<CourseStore>()(
  persist(
    (set) => ({
      // CourseCategory
      selectedCourseCategory: {} as CourseCategory,
      courseCategoryList: [],
      selectCourseCategory: (data) =>
        set(() => ({ selectedCourseCategory: data })),
      deselectCourseCategory: () =>
        set(() => ({ selectedCourseCategory: {} as CourseCategory })),
      setCourseCategoryList: (data) =>
        set(() => ({ courseCategoryList: data })),
      emptyCourseCategoryList: () => set(() => ({ courseCategoryList: [] })),
      // CourseProgram
      selectedCourseProgram: {} as CourseProgram,
      courseProgramList: [],
      selectCourseProgram: (data) =>
        set(() => ({ selectedCourseProgram: data })),
      deselectCourseProgram: () =>
        set(() => ({ selectedCourseProgram: {} as CourseProgram })),
      setCourseProgramList: (data) => set(() => ({ courseProgramList: data })),
      emptyCourseProgramList: () => set(() => ({ courseProgramList: [] })),
      // CourseClassType
      selectedCourseClassType: {} as CourseClassType,
      courseClassTypeList: [],
      selectCourseClassType: (data) =>
        set(() => ({ selectedCourseClassType: data })),
      deselectCourseClassType: () =>
        set(() => ({ selectedCourseClassType: {} as CourseClassType })),
      setCourseClassTypeList: (data) =>
        set(() => ({ courseClassTypeList: data })),
      emptyCourseClassTypeList: () => set(() => ({ courseClassTypeList: [] })),
      // CourseClass
      selectedCourseClass: {} as CourseClass,
      courseClassList: [],
      selectCourseClass: (data) => set(() => ({ selectedCourseClass: data })),
      deselectCourseClass: () =>
        set(() => ({ selectedCourseClass: {} as CourseClass })),
      setCourseClassList: (data) => set(() => ({ courseClassList: data })),
      emptyCourseClassList: () => set(() => ({ courseClassList: [] })),
      // CoursePreference
      selectedCoursePreference: {} as CoursePreference,
      selectCoursePreference: (data) =>
        set(() => ({ selectedCoursePreference: data })),
      deselectCoursePreference: () => () =>
        set(() => ({ selectedCoursePreference: {} as CoursePreference })),
    }),
    {
      name: "course-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCourseStore;
