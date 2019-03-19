export const fetchDogsService = dogs => {
  return fetch(`${process.env.API_URL}/dogs`, {
  // return fetch('http://localhost:7892/dogs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dogs)
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const fetchDogService = _id => {
  return fetch(`${process.env.API_URL}/dogs/${_id}`, {
  // return fetch(`http://localhost:7892/dogs/${_id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};
