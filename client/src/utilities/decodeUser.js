export default function decodeUser(token) {
  let parts = token.split(".");
  let payload = JSON.parse(window.atob(parts[1]));

  return { user: payload, token };
}
