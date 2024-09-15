import { Plus } from "lucide-react";
import { OutlineButton } from "./ui/outline-button";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPendingGoals } from "../http/get-pending-goals";
import { CreateCompletion } from "../http/create-completion";

export function PendingGoals() {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["pending-goals"],
    queryFn: getPendingGoals,
    staleTime: 1000 * 60, //60 secs
  });

  if (!data) return null;

  const handleCreateCompletion = async (goalId: string) => {
    await CreateCompletion(goalId);

    queryClient.invalidateQueries({ queryKey: ["summary"] });
    queryClient.invalidateQueries({ queryKey: ["pending-goals"] });
  };
  return (
    <div className="flex gap-3 flex-wrap">
      {data.map((goal) => {
        return (
          <OutlineButton
            key={goal.id}
            disabled={goal.completionCount >= goal.desiredWeklyFrequency}
            onClick={() => handleCreateCompletion(goal.id)}
          >
            <Plus />
            {goal.title}
          </OutlineButton>
        );
      })}
    </div>
  );
}
