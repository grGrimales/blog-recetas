




export async function loginUser(email: string, password: string) {
    const res = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  
    if (!res.ok) {
      throw new Error("Credenciales incorrectas");
    }
  
    return res.json();
  }
  
  export async function registerUser(name: string, email: string, password: string) {
    const res = await fetch("http://localhost:3001/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
  
    if (!res.ok) {
      throw new Error("Error en el registro");
    }
  
    return res.json();
  }
  