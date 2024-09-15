type PendingGoalsResponse = {
  id: string;
  title: string;
  desiredWeklyFrequency: number;
  completionCount: number;
}[];

export const getPendingGoals = async (): Promise<PendingGoalsResponse> => {
  const response = await fetch(
    "https://inorbit-backend-56f6.onrender.com/get-pending-goals",
  );
  const data = await response.json();
  return data;
};
