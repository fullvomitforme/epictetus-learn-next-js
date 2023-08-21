'use client';

import Navbar from '@/Components/Navbar';
import FeaturedPost from '@/Components/FeaturedPost';
import CardPost from '@/Components/CardPost';
import { useState } from 'react';
export default function Home() {
	const [posts, setPosts] = useState([
		{
			thumbnail: '/thumbnail-2.png',
			category: 'Internet',
			date: 'June 28, 2021',
			title: 'How to design a product that can grow itself 10x in year',
			shortDescription:
				'Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.',
			authorAvatar: '/author-2.png',
			authorName: 'Jenny Wilson',
			authorJob: 'Product Designer',
		},
	]);

	return (
		<div className='bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white'>
			<Navbar />
			<div className='container mx-auto'>
				<FeaturedPost />
				<div className='flex -mx-4'>
					{posts.map((post) => (
						<div className='w-4/12 px-4' key={post.title}>
							<CardPost {...post} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
