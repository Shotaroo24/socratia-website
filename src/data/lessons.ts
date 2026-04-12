export type Lesson = {
  id: string;
  title: string;
  vimeoId: string;
  duration: string;
};

export type Section = {
  id: string;
  title: string;
  lessons: Lesson[];
};

export const sections: Section[] = [
  {
    id: "standard",
    title: "Standard Lesson",
    lessons: Array.from({ length: 41 }, (_, i) => ({
      id: `standard-${i + 1}`,
      title: `Lesson ${i + 1}`,
      vimeoId: "000000000",
      duration: "00:00",
    })),
  },
  {
    id: "conversational",
    title: "Conversational Lesson",
    lessons: Array.from({ length: 12 }, (_, i) => ({
      id: `conversational-${i + 1}`,
      title: `Lesson ${i + 1}`,
      vimeoId: "000000000",
      duration: "00:00",
    })),
  },
  {
    id: "advanced-grammar",
    title: "Advanced Grammar",
    lessons: Array.from({ length: 17 }, (_, i) => ({
      id: `advanced-grammar-${i + 1}`,
      title: `Lesson ${i + 1}`,
      vimeoId: "000000000",
      duration: "00:00",
    })),
  },
  {
    id: "words-summary",
    title: "Words Summary",
    lessons: Array.from({ length: 13 }, (_, i) => ({
      id: `words-summary-${i + 1}`,
      title: `Lesson ${i + 1}`,
      vimeoId: "000000000",
      duration: "00:00",
    })),
  },
  {
    id: "particle-summary",
    title: "Particle Summary",
    lessons: Array.from({ length: 11 }, (_, i) => ({
      id: `particle-summary-${i + 1}`,
      title: `Lesson ${i + 1}`,
      vimeoId: "000000000",
      duration: "00:00",
    })),
  },
];
