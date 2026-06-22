const PT_BR = "pt-BR";

/** YAML pubDate values are calendar dates; format in UTC to avoid day-shift in Brazil. */
export function formatPubDate(
  date: Date,
  options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  },
): string {
  return new Intl.DateTimeFormat(PT_BR, { ...options, timeZone: "UTC" }).format(date);
}

export function formatPubDateDay(date: Date): string {
  return formatPubDate(date, { day: "2-digit" });
}

export function formatPubDateMonthYear(date: Date): string {
  return formatPubDate(date, { month: "long", year: "numeric" });
}

export function pubDateToDatetime(date: Date): string {
  return date.toISOString().slice(0, 10);
}
