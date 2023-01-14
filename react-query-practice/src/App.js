import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from "./components/Produchts";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Products />
    </QueryClientProvider>
  );
}

export default App;
