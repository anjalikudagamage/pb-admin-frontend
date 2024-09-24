import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import AppRouter from "./router";

const cache = createCache({ key: "css", prepend: true });

function App() {
  return (
    <CacheProvider value={cache}>
      <div>
        <AppRouter />
      </div>
    </CacheProvider>
  );
}

export default App;
