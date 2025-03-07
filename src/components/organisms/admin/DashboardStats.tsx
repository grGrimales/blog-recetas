export default function DashboardStats() {
    const stats = [
      {
        title: "Total Recetas",
        value: 245,
        change: "+20% desde el último mes",
        icon: "🍽️",
      },
      {
        title: "Usuarios Registrados",
        value: 1234,
        change: "+10% desde el último mes",
        icon: "👥",
      },
      {
        title: "Calificación Promedio",
        value: 4.6,
        change: "+0.2 desde el último mes",
        icon: "⭐",
      },
      {
        title: "Visitas Mensuales",
        value: 45678,
        change: "+15% desde el último mes",
        icon: "📊",
      },
    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{stat.title}</h3>
              <span className="text-2xl">{stat.icon}</span>
            </div>
            <p className="text-3xl font-bold mt-2">{stat.value.toLocaleString()}</p>
            <p className="text-sm text-gray-500">{stat.change}</p>
          </div>
        ))}
      </div>
    );
  }
  