

const mockUser = {
  id: 1,
  name: "Admin User",
  email: "admin@example.com",
  role: "admin", // Cambia a "user" si quieres probar otro rol
};

export function useAuth() {
  const user = mockUser
  return { user, isAuthenticated: true };
}
