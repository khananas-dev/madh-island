export const xAccessToken = () => {
  if (localStorage.getItem("jwt")) {
    let user = localStorage.getItem("jwt");
    let token;
    if (user) {
      token = JSON.parse(user)?.accessToken;
    }
    console.log(token);
    return token;
  }
};
