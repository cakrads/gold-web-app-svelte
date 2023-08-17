export const convertDate = (
  epoch: number,
  type: 'id-ID' | 'en-US' = 'id-ID'
): string => {
  const date = new Date(epoch * 1000); // Convert epoch to milliseconds
  if (type === 'id-ID') {
    return convertDateIndo(date);
  } else if (type === 'en-US') {
    return convertDateEn(date);
  } else {
    throw new Error("Invalid type. Supported types are 'ID' and 'EN'.");
  }
}

const convertDateIndo = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };

  return date.toLocaleString('id-ID', options).replace(" pukul", ",");
}

const convertDateEn = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short'
  };

  return date.toLocaleString('en-US', options).replace(" at", ",");
}