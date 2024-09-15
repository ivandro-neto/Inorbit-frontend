type SummaryResponse = {
  completed: number;
  total: number;
  goalsPerDay: Record<
    string,
    {
      id: string;
      title: string;
      completedAt: string;
    }[]
  >;
};

export const getSummary = async (): Promise<SummaryResponse> => {
  const response = await fetch(
    "https://inorbit-backend-56f6.onrender.com/summary",
  );
  const data = await response.json();
  return data;
};
