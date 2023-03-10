import { useLocation } from "react-router-dom";
import { AuthBar, AuthorizationPage, Banner } from "./style";
import SignInForm from "../../components/authPage/signInForm";
import SignUpForm from "../../components/authPage/registrationForm";

export default function AuthPage() {
	const location = useLocation();
	return (
		<AuthorizationPage>
			<Banner>
				<h1> linkr </h1>
				<h2> save, share and discover <br /> the best links on the web </h2>
			</Banner>
			<AuthBar>
				{location.pathname === "/" && <SignInForm />}
				{location.pathname === "/signup" && <SignUpForm />}
			</AuthBar>
		</AuthorizationPage>
	);
}