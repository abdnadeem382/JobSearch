export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
      "i"
    );
    return pattern.test(url);
  }
};

export const formatJobPostingTime = (utcDate) => {
  const options = { timeZone: "Asia/Karachi" };
  return new Date(utcDate).toLocaleString("en-PK", options);
};
