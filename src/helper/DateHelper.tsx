import {
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  parseISO,
  fromUnixTime,
} from "date-fns";

export function diffDateFromNow(data: string) {
  const dataInSeconds = differenceInSeconds(new Date(), parseISO(data));
  const dataInMinutes = differenceInMinutes(new Date(), parseISO(data));
  const dataInHours = differenceInHours(new Date(), parseISO(data));
  const dataInDays = differenceInDays(new Date(), parseISO(data));
  const dataInMonths = differenceInMonths(new Date(), parseISO(data));
  const dataInYears = differenceInYears(new Date(), parseISO(data));

  if (dataInYears > 0) {
    return dataInYears + " Tahun";
  } else if (dataInMonths > 0) {
    return dataInMonths + " Bulan";
  } else if (dataInDays > 0) {
    return dataInDays + " Hari";
  } else if (dataInHours > 0) {
    return dataInHours + " Jam";
  } else if (dataInMinutes > 0) {
    return dataInMinutes + " Menit";
  } else if (dataInSeconds > 0) {
    return dataInSeconds + " Detik";
  } else {
    return "0 Detik";
  }
}

export function diffDateFromNowEpochTime(epochTime: number) {
  const currentDate = new Date();
  const targetDate = fromUnixTime(epochTime / 1000); // Convert milliseconds to seconds

  const dataInSeconds = differenceInSeconds(currentDate, targetDate);
  const dataInMinutes = differenceInMinutes(currentDate, targetDate);
  const dataInHours = differenceInHours(currentDate, targetDate);
  const dataInDays = differenceInDays(currentDate, targetDate);
  const dataInMonths = differenceInMonths(currentDate, targetDate);
  const dataInYears = differenceInYears(currentDate, targetDate);

  if (dataInYears > 0) {
    return <span>{dataInYears} Tahun</span>;
  } else if (dataInMonths > 0) {
    return <span>{dataInMonths} Bulan</span>;
  } else if (dataInDays > 0) {
    return <span>{dataInDays} Hari</span>;
  } else if (dataInHours > 0) {
    return <span>{dataInHours} Jam</span>;
  } else if (dataInMinutes > 0) {
    return <span>{dataInMinutes} Menit</span>;
  } else if (dataInSeconds > 0) {
    return <span>{dataInSeconds} Detik</span>;
  } else {
    return <span>0 Detik</span>;
  }
}
