import Image from 'next/image';
import lines from '../../assets/big_circular_lines.svg';

export default function Backdrop() {
	return (
		<>
			<div className="fixed inset-0 flex z-0">
				<div className="w-1/2 bg-primary-100 relative">
					<Image
						src={lines}
						alt="lines"
						className="w-[100%] h-[70%] absolute bottom-0 right-0"
						priority
					/>
				</div>
			</div>

			<section className="w-1/2 text-white h-screen relative hidden md:block z-10">
				<div className="pt-6 pl-12 flex flex-col">
					<h1 className="font-semibold text-2xl">
						A Game-Changing Approach to <br /> Goal Achievement
					</h1>
					<p className="mt-2 text-lg">
						The simplest way to supercharge your workforce with OKRs
					</p>
				</div>
			</section>
		</>
	);
}
