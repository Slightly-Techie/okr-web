'use client';

import Link from 'next/link';
import Backdrop from './Backdrop';
import OAuth from './OAuth';
import Or from './Or';
import Heading from './Heading';
import '../scss/auth/Auth.scss';

export default function ForgotPassword() {
	function handleSubmit() {}

	return (
		<main className="page-container max-w-container">
			<Backdrop />

			<section className="form-container">
				<article>
					<Heading
						title="Forgot your password? 🤯"
						message="Not a problem! It happens to the best of us."
					/>{' '}
					<form onSubmit={handleSubmit}>
						<div className="email">
							{' '}
							<label htmlFor="email" className="block font-medium">
								Email
							</label>
							<span className="text-sm text-[#777]">
								We will send you an email with instructions on how to reset your
								password.
							</span>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Enter your email"
							/>
						</div>

						<button type="submit">Submit</button>
					</form>
					<Or />
					<OAuth />
					<span className="flex gap-2 mt-1">
						<p className="text-[#1E1E1E]">Don’t have an account?</p>
						<Link href="/auth/signup" className="text-[#111926] font-bold">
							Sign up
						</Link>
					</span>
				</article>
			</section>
		</main>
	);
}
