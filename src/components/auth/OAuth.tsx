import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

export default function OAuth() {
	return (
		<section className="oauth-container">
			<div>
				<FcGoogle size={24} className="mr-2" />
				Sign in with Google
			</div>

			<div>
				<FaGithub size={24} className="mr-2" />
				Sign in with Github
			</div>
		</section>
	);
}
