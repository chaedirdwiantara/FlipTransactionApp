const elipsisText = (text: string, lengthText: number): string =>
  text?.length > lengthText ? text.substring(0, lengthText - 3) + '...' : text;

const capitalizeText = (text: string): string => {
  if (text.length > 4) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  } else {
    return text.toUpperCase();
  }
};

const formatCurrency = (value: number): string => {
  if (value <= 0) return "Invalid amount";
  const formattedValue = value.toLocaleString('id-ID', {
    maximumFractionDigits: 0,
  });
  return `Rp${formattedValue}`;
};

function formatDate(dateString: string): string {
  const months: string[] = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

export {elipsisText, capitalizeText, formatCurrency, formatDate};
