const getDistantBetweenTwoSpot = (ax, ay, bx, by) => {
  const alpha = ax - bx;
  const beta = ay - by;
  return Math.sqrt(alpha ** 2 + beta ** 2).toFixed(0);
};

export default getDistantBetweenTwoSpot;
