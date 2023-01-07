import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./styles/globalStyles";
import AuthPage from "./pages/authPage";
import HomePage from "./pages/homePage";
import DataProvider from "./context/auth";
import TrendPage from "./pages/trendPage";

export default function App() {
	return (
		<BrowserRouter>
			<DataProvider>
			{/* <ProductProvider> */}
			<Routes>
				<Route path="/" element={<AuthPage />} />
				<Route path="/signup" element={<AuthPage />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/hashtag/:hashtag" element={<TrendPage/>} />
			</Routes>
			{/* </ProductProvider> */}
			</DataProvider>
			<GlobalStyle />
			<ToastContainer />
		</BrowserRouter>
	);
}