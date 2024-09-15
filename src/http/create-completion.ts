export async function CreateCompletion(goalId: string) {
  await fetch("https://inorbit-backend-56f6.onrender.com/completions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ goalId }),
  });
}
