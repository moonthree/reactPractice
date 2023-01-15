import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from "./components/Produchts";
import Test from "./components/Test";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Products />
      <Test />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
