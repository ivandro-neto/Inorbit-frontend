type createGoalsRequest = {
  title: string,
  desiredWeeklyFrequency : number
}

export async function CreateGoals({title, desiredWeeklyFrequency} :  createGoalsRequest) {
  await fetch("http://localhost:3333/goals",{
    method: "POST",
    headers: {
      "content-type" : "application/json"
    },
    body: JSON.stringify({title, desiredWeeklyFrequency})
  })
}