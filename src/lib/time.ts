/**
 * Time utilities for countdown with timezone support
 */

export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

/**
 * Get the target wedding date/time in Asia/Ho_Chi_Minh timezone
 * Wedding: November 21, 2025 at 11:00 AM
 */
export const getWeddingDate = (): Date => {
  // Create date in UTC, then adjust for Vietnam timezone (UTC+7)
  // November 21, 2025, 11:00 AM Vietnam time = November 21, 2025, 04:00 AM UTC
  return new Date('2025-11-21T11:00:00+07:00');
};

/**
 * Calculate time remaining until the wedding
 */
export const calculateTimeRemaining = (): TimeRemaining => {
  const weddingDate = getWeddingDate();
  const now = new Date();
  const total = weddingDate.getTime() - now.getTime();

  if (total <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      total: 0,
    };
  }

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    days,
    hours,
    minutes,
    seconds,
    total,
  };
};

/**
 * Format a number with leading zero
 */
export const padNumber = (num: number): string => {
  return num.toString().padStart(2, '0');
};

/**
 * Get a formatted wedding date string
 */
export const getFormattedWeddingDate = (): string => {
  return 'Thứ Sáu, ngày 21 tháng 11 năm 2025';
};

/**
 * Get wedding time string
 */
export const getWeddingTime = (): string => {
  return '11:00';
};

/**
 * Check if the wedding has already happened
 */
export const hasWeddingPassed = (): boolean => {
  const weddingDate = getWeddingDate();
  const now = new Date();
  return now >= weddingDate;
};
