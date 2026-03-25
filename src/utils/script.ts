export const calcWordCount = (content: string) => content.trim().split(/\s+/).filter(Boolean).length;

export const calcEstimatedDuration = (wordCount: number, wpm = 130) => Math.max(1, Math.ceil((wordCount / wpm) * 60));
