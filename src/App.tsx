import { Header } from "./components/layout/Header";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div>
        <Header />
        <main>
          <p></p>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
