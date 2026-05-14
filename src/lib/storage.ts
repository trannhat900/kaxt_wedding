/**
 * LocalStorage utilities for guest wishes and preferences
 */

export interface Wish {
  id: string;
  name: string;
  message: string;
  timestamp: number;
}

const WISHES_KEY = 'wedding_wishes';
const MUSIC_MUTED_KEY = 'wedding_music_muted';
const WELCOME_SHOWN_KEY = 'wedding_welcome_shown';

/**
 * Get all wishes from localStorage
 */
export const getWishes = (): Wish[] => {
  try {
    const wishes = localStorage.getItem(WISHES_KEY);
    return wishes ? JSON.parse(wishes) : [];
  } catch (error) {
    console.error('Error reading wishes from localStorage:', error);
    return [];
  }
};

/**
 * Save a new wish to localStorage
 */
export const saveWish = (name: string, message: string): Wish => {
  const wish: Wish = {
    id: `wish_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    name,
    message,
    timestamp: Date.now(),
  };

  try {
    const wishes = getWishes();
    wishes.unshift(wish); // Add to beginning
    localStorage.setItem(WISHES_KEY, JSON.stringify(wishes));
    return wish;
  } catch (error) {
    console.error('Error saving wish to localStorage:', error);
    throw error;
  }
};

/**
 * Export wishes as JSON
 */
export const exportWishes = (): string => {
  const wishes = getWishes();
  return JSON.stringify(wishes, null, 2);
};

/**
 * Download wishes as a JSON file
 */
export const downloadWishesAsJSON = (): void => {
  const wishes = getWishes();
  const dataStr = JSON.stringify(wishes, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `wedding-wishes-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Get music mute preference
 */
export const getMusicMutedPreference = (): boolean => {
  try {
    const muted = localStorage.getItem(MUSIC_MUTED_KEY);
    return muted === 'true';
  } catch (error) {
    return true; // Default to muted for autoplay policy
  }
};

/**
 * Save music mute preference
 */
export const saveMusicMutedPreference = (muted: boolean): void => {
  try {
    localStorage.setItem(MUSIC_MUTED_KEY, String(muted));
  } catch (error) {
    console.error('Error saving music preference:', error);
  }
};

/**
 * Check if welcome modal has been shown
 */
export const hasWelcomeBeenShown = (): boolean => {
  try {
    const shown = localStorage.getItem(WELCOME_SHOWN_KEY);
    return shown === 'true';
  } catch (error) {
    return false;
  }
};

/**
 * Mark welcome modal as shown
 */
export const markWelcomeAsShown = (): void => {
  try {
    localStorage.setItem(WELCOME_SHOWN_KEY, 'true');
  } catch (error) {
    console.error('Error saving welcome preference:', error);
  }
};
