// Date型をYYYY/MM/DD HH:MMに変換
export const formatDateToYYYYMMDDHHMM = (date: Date): string => {
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
};