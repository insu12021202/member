import AppRouter from "./Routes/Router";
import GlobalStyle from "./Common/Style/styles";
import Header from "./Components/Organisms/Header";
function App() {
  return (
    <>
      {/* 전역스타일링 */}
      <GlobalStyle />
      <AppRouter></AppRouter>
    </>
  );
}

export default App;
