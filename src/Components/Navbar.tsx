import Link from 'next/link';
import { useState } from 'react';
import Container from '@/Components/Container';

const Navbar = () => {
	const [dropdown, setDropdown] = useState(false);
	const [offCanvas, setOffCanvas] = useState(false);
	const [search, setSearch] = useState(false);

	const handleCanvas = () => {
		setOffCanvas(!offCanvas);
	};

	const handleDropdown = () => {
		setDropdown(!dropdown);
	};

	const handleSearch = () => {
		setSearch(!search);
	};

	const dropdownList = [
		{
			id: 1,
			title: 'Internet',
			link: '#',
		},
		{
			id: 2,
			title: 'Books',
			link: '#',
		},
		{
			id: 3,
			title: 'Open Sources',
			link: '#',
		},
		{
			id: 4,
			title: 'Pricing',
			link: '#',
		},
		{
			id: 5,
			title: 'Docs',
			link: '#',
		},
	];

	return (
		<nav className='py-10'>
			<Container>
				<div className='flex items-center'>
					<div className='w-3/12 lg:hidden'>
						<button
							onClick={() => {
								handleCanvas();
							}}
						>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g opacity='0.4'>
									<path
										d='M3 12H21'
										stroke='white'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M3 6H21'
										stroke='white'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M3 18H21'
										stroke='white'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</g>
							</svg>
						</button>
					</div>
					<div className='lg:w-2/12 w-6/12 flex items-center justify-center lg:justify-start'>
						<div className='w-10 h-10 bg-gray-700 rounded flex items-center justify-center mr-4 shadow-2xl'>
							😡
						</div>
						marahstudios
					</div>
					<div className='w-3/12 lg:hidden text-right'>
						<button
							onClick={() => {
								handleSearch();
							}}
						>
							<svg
								className='inline-block'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g opacity='0.4'>
									<path
										d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z'
										stroke='white'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
									<path
										d='M21 21L16.65 16.65'
										stroke='white'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</g>
							</svg>
						</button>
					</div>
					<div
						className={`lg:w-7/12 w-full bg-gradient-to-b from-gray-600 to-gray-900 lg:bg-none fixed lg:static lg:h-auto lg:p-0 top-0 h-full transition-all p-10 ${
							offCanvas ? 'left-0' : '-left-full'
						}`}
					>
						<button
							className='absolute top-10 right-10'
							onClick={() => {
								handleCanvas();
							}}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='feather feather-x'
							>
								<line x1='18' y1='6' x2='6' y2='18'></line>
								<line x1='6' y1='6' x2='18' y2='18'></line>
							</svg>
						</button>
						<ul className='lg:space-x-14 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0'>
							<li>
								<Link className='hover:underline' href={'/'}>
									UI Design
								</Link>
							</li>
							<li>
								<Link className='hover:underline' href={'/'}>
									Front End
								</Link>
							</li>
							<li>
								<Link className='hover:underline' href={'/'}>
									Backend
								</Link>
							</li>
							<li className='relative'>
								<a
									className='hover:underline cursor-pointer flex items-center'
									onClick={handleDropdown}
								>
									Lainnya
									<svg
										className='ml-2'
										width='16'
										height='16'
										viewBox='0 0 16 16'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M4 6L8 10L12 6'
											stroke='white'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</a>
								{dropdown && (
									<ul className='absolute w-[200px] bg-gray-800 rounded shadow-2xl mt-4'>
										{dropdownList.map((list) => (
											<li
												key={list.id}
												className='border-b border-white/5 last:border-0'
											>
												<Link
													className='flex py-3 px-6 hover:bg-gray-700/60'
													href={list.link}
												>
													{list.title}
												</Link>
											</li>
										))}
									</ul>
								)}
							</li>
						</ul>
					</div>
					<div
						className={`absolute w-full lg:w-3/12 lg:static left-0 px-10 lg:px-0 transition-all ${
							search ? 'top-10' : '-top-40'
						}`}
					>
						<button
							className='absolute top-4 right-14 lg:hidden'
							onClick={() => {
								handleSearch();
							}}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='feather feather-x'
							>
								<line x1='18' y1='6' x2='6' y2='18'></line>
								<line x1='6' y1='6' x2='18' y2='18'></line>
							</svg>
						</button>
						<input
							className='bg-gray-700 py-4 px-6 w-full lg:rounded-full rounded-lg bg-search pl-12'
							placeholder='Search ...'
						/>
					</div>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
