import axios from "axios";

const loginUser = async (event, username, password) => {
  event.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:8086/api/taskmern/login",
      { username, password }
    );
    const user = await response.data;
    console.log(user);
    // if user credentials match, automatically log in user
    if (user) {
      // store token
      localStorage.setItem("access_token", user.access_token);
      window.location.href = "/taskmern/home";
    }
  } catch (error) {
    console.log(error);
  }
};
export default loginUser;
