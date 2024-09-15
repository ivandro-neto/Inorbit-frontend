type createGoalsRequest = {
  title: string;
  desiredWeeklyFrequency: number;
};

export async function CreateGoals({
  title,
  desiredWeeklyFrequency,
}: createGoalsRequest) {
  await fetch("https://inorbit-backend-56f6.onrender.com/goals", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ title, desiredWeeklyFrequency }),
  });
}
