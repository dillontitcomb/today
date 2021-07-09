export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const getTaskScore = (time, urgency, resistance) => {
  let score = 0;
  // If time is not set or is set to 0, score can only be worth 1 point
  if (time < 1) {
    score = 1;
    return score;
  } else if (time >= 1 && time <= 15) {
    score++;
  } else if (time > 15 && time < 40) {
    score += 2;
  } else if (time >= 40 && time < 120) {
    score += 3;
  } else if (time >= 120) {
    score += 4;
  }

  // Add urgency (0-3) and resistance (0-3) values to get a max of 10/10
  score += parseInt(urgency);

  score += parseInt(resistance);

  return score;
};
