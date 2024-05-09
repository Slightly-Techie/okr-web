'use client';

import Link from 'next/link';
import Backdrop from './Backdrop';
import OAuth from './OAuth';
import Or from './Or';
import Heading from './Heading';
import { FormEvent } from 'react';
import '../scss/auth/Auth.scss';

export default function Signup() {
	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = e.currentTarget as HTMLFormElement;
		const formData = new FormData(form);

		const credentials = {
			email: formData.get('email'),
			password: formData.get('password1'),
			cPassword: formData.get('password2'),
		};

		console.log(credentials);

		form.reset();
	}

	return (
		<main className="page-container max-w-container">
			<Backdrop />

			<section className="form-container">
				<article>
					<Heading
						title="Welcome to ST-OKR 🚀"
						message="Join us and achieve your goals today!"
					/>
					<form onSubmit={handleSubmit}>
						<div className="email">
							{' '}
							<label htmlFor="email" className="block font-medium">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Enter your email"
							/>
						</div>
						<div>
							{' '}
							<label htmlFor="password1" className="block font-medium">
								Password
							</label>
							<input
								type="password"
								id="password1"
								name="password1"
								placeholder="Enter your password"
							/>
						</div>
						<div>
							{' '}
							<label htmlFor="password2" className="block font-medium">
								Confirm Password
							</label>
							<input
								type="password"
								id="password2"
								name="password2"
								placeholder="Confirm your password"
							/>
						</div>

						<button type="submit">Sign up</button>
					</form>

					<Or />

					<OAuth />

					<span className="flex gap-2 mt-1">
						<p className="text-[#1E1E1E]">Already have an account?</p>
						<Link href="/auth/login" className="text-[#111926] font-bold">
							Sign in
						</Link>
					</span>
				</article>
			</section>
		</main>
	);
}
