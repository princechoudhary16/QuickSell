export const fetchTickets = async () => {
  const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};
