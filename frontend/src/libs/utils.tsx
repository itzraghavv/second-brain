export const getTweetId = (url: string) => {
  const regex = /(?:\/status\/|statuses\/)(\d+)/;

  const tweetId = url.match(regex);
  return tweetId ? tweetId[1] : null;
};
