'use client';

import FeaturedPost from '@/Components/FeaturedPost';
import CardPost from '@/Components/CardPost';
import { useState } from 'react';
import Container from '@/Components/Container';
import Layout from '@/Components/Layout';
import mockPosts from '../utils/posts.json';
export default function Home() {
	const [posts, setPosts] = useState(mockPosts);

	return (
		<Layout>
			<Container>
				<FeaturedPost />
				<div className='flex -mx-4 flex-wrap mt-6'>
					{posts.map((post) => (
						<div className='md:w-4/12 w-full px-4 py-6' key={post.id}>
							<CardPost {...post} />
						</div>
					))}
				</div>
			</Container>
		</Layout>
	);
}
