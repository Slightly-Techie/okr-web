import Image from 'next/image';
import lines from '../../assets/big_circular_lines.svg';

export default function Backdrop() {
	return (
		<>
			<div className="backdrop-bg">
				<div>
					<Image src={lines} alt="lines" priority />
				</div>
			</div>

			<section className="backdrop">
				<div className="flex-colpt-6">
					<h1>
						A Game-Changing Approach to <br /> Goal Achievement
					</h1>
					<p>The simplest way to supercharge your workforce with OKRs</p>
				</div>
			</section>
		</>
	);
}
