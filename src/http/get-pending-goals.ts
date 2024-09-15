type PendingGoalsResponse = {
  id: string;
  title: string;
  desiredWeklyFrequency: number;
  completionCount: number;
}[]

export const getPendingGoals = async (): Promise<PendingGoalsResponse> => {
  const response = await fetch("http://localhost:3333/get-pending-goals");
  const data = await response.json();
  return data;
}