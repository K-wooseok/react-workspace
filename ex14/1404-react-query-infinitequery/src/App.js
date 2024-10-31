import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import InfinitePeople from "./people/InfinitePeople";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <InfinitePeople />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
