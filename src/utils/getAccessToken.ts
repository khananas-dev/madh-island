export const xAccessToken = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("jwt")) {
      let user = localStorage.getItem("jwt");
      let token;
      if (user) {
        token = JSON.parse(user)?.accessToken;
      }
      console.log(token);
      return token;
    }
  }
};

export const userData = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("jwt")) {
      let user = localStorage.getItem("jwt");
      let data;
      if (user) {
        data = {
          firstName: JSON.parse(user)?.firstName,
          lastName: JSON.parse(user)?.lastName,
          emailId: JSON.parse(user)?.emailId,
          phoneNumber: JSON.parse(user)?.phoneNumber,
        };
      }
      console.log(data);

      return data;
    }
  }
};
