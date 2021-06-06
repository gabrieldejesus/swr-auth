// mock the user api
export default async () => {
  // sleep 500
  await new Promise((response) => setTimeout(response, 500));

  if (document.cookie.includes("swr-test-token=swr")) {
    // authorized
    return {
      name: "Gabriel de Jesus",
      avatar: "https://github.com/gabrieldejesus.png",
    };
  }

  // not autorized
  const error: any = new Error("Not authorized!");
  error.status = 403;
  throw error;
};
