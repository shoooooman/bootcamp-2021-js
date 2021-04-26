export const getTodos = async () => {
  const endpoint = "http://localhost:3000/todo";
  try {
    const resp = await fetch(endpoint)
      .then(data => data.json());
    return resp;
  } catch (err) {
    console.error(err);
  }
}

export const addTodo = async (name) => {
  const endpoint = "http://localhost:3000/todo";
  try {
    const resp = await fetch(endpoint,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name})
      }
    )
      .then(data => data.json());
    return resp;
  } catch (err) {
    console.error(err);
  }
}
