'use client';

import Layout from '@/Components/Layout';
import Container from '@/Components/Container';
import FeaturedPost from '@/Components/FeaturedPost';
import CardPost from '@/Components/CardPost';
import mockPosts from '@/utils/posts.json';
import { useState } from 'react';
import PostMetaTitle from '@/Components/PostMetaTitle';
import PostAuthor from '@/Components/PostAuthor';

const Detail = () => {
	const [posts, setPosts] = useState(mockPosts);
	return (
		<Layout>
			<Container>
				<div className='w-6/12 mx-auto flex items-center flex-col'>
					<PostMetaTitle
						category='UI Design'
						date='July 2, 2021'
						title='Understanding color theory: the color wheel and finding complementary colors'
						center
					/>
					<PostAuthor
						authorAvatar='/author-1.png'
						authorName='Leslie Alexander'
						authorJob='UI Designer'
					/>
				</div>
			</Container>
		</Layout>
	);
};

export default Detail;
