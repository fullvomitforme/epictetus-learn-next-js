import Link from 'next/link';
import { useState } from 'react';
import Container from '@/Components/Container';

const Navbar = () => {
	const [dropdown, setDropdown] = useState(false);

	const handleDropdown = () => {
		setDropdown(!dropdown);
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
					<div className='w-2/12 flex items-center'>
						<div className='w-10 h-10 bg-gray-700 rounded flex items-center justify-center mr-4 shadow-2xl'>
							😡
						</div>
						marahstudios
					</div>
					<div className='w-7/12'>
						<ul className='space-x-10 flex items-center'>
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
					<div className='w-3/12'>
						<input
							className='bg-gray-700 py-4 px-6 w-full rounded-full bg-search pl-12'
							placeholder='Search ...'
						/>
					</div>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
