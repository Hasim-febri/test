// Simulasi data database
const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
  ];
  
  export default {
    getUsers: () => new Promise(resolve => {
      setTimeout(() => resolve(users), 500); // Simulasi delay
    })
  };