'use client';

import Link from 'next/link';
import Or from './Or';
import OAuth from './OAuth';
import { FormEvent } from 'react';
import Backdrop from './Backdrop';
import Heading from './Heading';
import '../scss/auth/Auth.scss';

function handleSubmit(e: FormEvent<HTMLFormElement>) {
	e.preventDefault();
	const form = e.currentTarget as HTMLFormElement;
	const formData = new FormData(form);

	const credentials = {
		email: formData.get('email'),
		password: formData.get('password'),
		isChecked: formData.get('checkbox'),
	};

	console.log(credentials);

	form.reset();
}

export default function Login() {
	return (
		<main className="page-container max-w-container">
			<Backdrop />

			<section className="form-container">
				<article>
					<Heading
						title="Welcome to ST-OKR 🚀"
						message="Enter your credentials to access your account"
					/>{' '}
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
							<label htmlFor="password" className="block font-medium">
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								placeholder="Enter your password"
							/>
						</div>

						<div className="flex items-center mt-1">
							<div className="flex flex-row-reverse justify-end items-center">
								<label
									htmlFor="checkbox"
									className="ml-2 text-[#1E1E1E] text-sm"
								>
									Keep me logged in
								</label>
								<input type="checkbox" id="checkbox" name="checkbox" />
							</div>

							<Link
								href="/auth/forgotpassword"
								className="ml-auto text-[#777] text-sm"
							>
								Forgot password?
							</Link>
						</div>

						<button type="submit">Sign In</button>
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
