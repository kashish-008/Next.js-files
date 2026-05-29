const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 3;
const USERS_STORAGE_KEY = "users";

const normalizeEmail = (email) => email.trim().toLowerCase();

const readUsers = () => {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) || "[]");
  } catch (error) {
    return [];
  }
};

const writeUsers = (users) => {
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
};

export function findRegisteredUser(email) {
  const normalizedEmail = normalizeEmail(email);
  return readUsers().find((user) => user.email === normalizedEmail) || null;
}

export function registerUser({ name, email, password }) {
  if (typeof window === "undefined") {
    return { ok: false, error: "Registration is only available in the browser" };
  }

  const normalizedEmail = normalizeEmail(email);
  const users = readUsers();
  const index = users.findIndex((user) => user.email === normalizedEmail);
  const existing = index === -1 ? null : users[index];

  if (existing && existing.password) {
    return { ok: false, error: "Account already exists. Please login." };
  }

  const newUser = { name, email: normalizedEmail, password };
  if (index === -1) {
    users.push(newUser);
  } else {
    users[index] = newUser;
  }
  writeUsers(users);

  return { ok: true, user: { name, email: normalizedEmail } };
}

export function authenticateUser({ email, password }) {
  const user = findRegisteredUser(email);
  if (!user) return { ok: false, error: "Please sign up first" };
  if (!user.password) {
    return { ok: false, error: "Please sign up again to set a password" };
  }
  if (user.password !== password) {
    return { ok: false, error: "Incorrect password" };
  }
  return { ok: true, user: { name: user.name, email: user.email } };
}

export function validateLogin({ email, password }) {
  if (!email || !password) return "Please fill in all fields";
  if (!EMAIL_REGEX.test(email)) return "Please enter a valid email address";
  if (password.length < MIN_PASSWORD_LENGTH) {
    return `Password must be at least ${MIN_PASSWORD_LENGTH} characters`;
  }
  return "";
}

export function validateSignup({ name, email, password, confirmPassword }) {
  if (!name || !email || !password || !confirmPassword) {
    return "Please fill in all fields";
  }
  if (!EMAIL_REGEX.test(email)) return "Please enter a valid email address";
  const existing = findRegisteredUser(email);
  if (existing && existing.password) {
    return "Account already exists. Please login.";
  }
  if (password.length < MIN_PASSWORD_LENGTH) {
    return `Password must be at least ${MIN_PASSWORD_LENGTH} characters`;
  }
  if (password !== confirmPassword) return "Passwords do not match";
  return "";
}
