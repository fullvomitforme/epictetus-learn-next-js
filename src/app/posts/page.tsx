'use client';

import Container from '@/Components/Container';
import Layout from '@/Components/Layout';
import CardPost from '@/Components/CardPost';
import { useState } from 'react';
import mockPosts from '../../utils/posts.json';
import SectionHeader from '@/Components/SectionHeader';

const Posts = () => {
	const [posts, setPosts] = useState(mockPosts);

	return (
		<Layout>
			<Container>
				<SectionHeader>UI Design</SectionHeader>
				{!posts.length ? (
					<div className='text-center py-20'>
						<h2 className='text-6xl'>No Result 😭</h2>
						<p className='text-xl mt-4 text-white/60 md:w-6/12 mx-auto'>
							We couldn’t find any posts with the keyword `yahahahayuk`.
							<span className='font-bold'> Please try another keyword.</span>
						</p>
					</div>
				) : (
					<div className='flex -mx-4 flex-wrap mt-6'>
						{posts.map((post) => (
							<div className='md:w-4/12 w-full px-4 py-6' key={post.id}>
								<CardPost {...post} />
							</div>
						))}
					</div>
				)}
			</Container>
		</Layout>
	);
};

export default Posts;
