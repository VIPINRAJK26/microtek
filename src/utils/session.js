// utils/session.js
export function getOrCreateSessionKey() {
  let key = localStorage.getItem("session_key");
  if (!key) {
    key = crypto.randomUUID();
    localStorage.setItem("session_key", key);
    console.log("🔑 New session key created:", key);
  }
  return key;
}
