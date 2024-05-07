export function getHashFromUrl(url: string) {
  const hashIndex = url.indexOf("#");
  if (hashIndex !== -1) {
    const hash = url.substring(hashIndex);
    return hash;
  } else {
    return "#home";
  }
}
