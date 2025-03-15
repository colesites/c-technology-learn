import { create } from "zustand";

interface LessonState {
  completedLessons: string[]; // Store completed lesson IDs
  markAsFinished: (lessonId: string) => void;
}

export const useLessonStore = create<LessonState>((set) => ({
  completedLessons: [],

  markAsFinished: (lessonId) => {
    set((state) => ({
      completedLessons: [...state.completedLessons, lessonId], // Add completed lesson locally
    }));
  },
}));
