export function setYear(date) {
  const year = date.substring(0, 4);
  return year;
}

export function convertToSlug(Text) {
  return Text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    ;
}
