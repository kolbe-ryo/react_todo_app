// Date型をYYYY/MM/DD HH:MMに変換(2024/1/10 1:02)
export const formatDateToYYYYMMDDHHMM = (date: Date): string => {
  const pad = (num: number): string => num.toString().padStart(2, '0');
  return `${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
};