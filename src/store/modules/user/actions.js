export function userCreate(user) {
  return {
    type: "@user/USER_CREATE",
    user
  };
}
