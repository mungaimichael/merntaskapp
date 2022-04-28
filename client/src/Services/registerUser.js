import axios from "axios";

export const registerUser = async (event, username, password) => {
  event.preventDefault();
  try {
    const res = await axios.post(
      "http://localhost:8086/api/taskmern/register",
      {
        username,
        password,
      }
    );
    const user = await res.data;

    // if user exists, automatically log in
    if (user) {
      window.location.href = "/taskmern/home";
    }
  } catch (err) {
    console.log(err);
  }
};
