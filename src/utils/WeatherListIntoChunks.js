export const WeatherListIntoChunks = (arr, chunkSize) => {
  const result = [];
  const filteringConditions = new Date()
    .toLocaleDateString()
    .split(".")
    .reverse()
    .join("-");
  const firstChunk = arr.filter(
    ({ dt_txt }) => dt_txt.substring(0, 10) === filteringConditions
  );
  const othersChunk = arr.filter(
    ({ dt_txt }) => dt_txt.substring(0, 10) !== filteringConditions
  );
  result.push(firstChunk);
  for (let i = 0; i < othersChunk.length; i += chunkSize) {
    const chunk = othersChunk.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
};
