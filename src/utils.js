import axios from "axios";

export const fetchData = async (url, payload) => {
  let error = null;
  let response = null;
  try {
    const resp = await axios.post(
      `https://developer-tester.lightningproxies.net/api/${url}`,
      payload,
      {
        headers:{
            "Content-Type":"application/json",
            "api-key": "bqzncgO9k3"
        }
      }
    );

    response = resp?.data;
  } catch (err) {
    console.log(err);
    error = err;
  }

  return { error, response };
};
