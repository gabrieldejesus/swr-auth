// mock login and logout
export function login() {
  // add cookie
  document.cookie = "swr-test-token=swr;";
}

export function logout() {
  // delete cookie
  document.cookie = `swr-test-token=; expires= Thu, 04 Jan 2022 00:00:01 GMT;`;
}
