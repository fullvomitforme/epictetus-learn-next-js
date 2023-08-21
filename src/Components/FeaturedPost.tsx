import Image from 'next/image';
import InfoPost from './InfoPost';
const FeaturedPost = () => {
	return (
		<article>
			<div className='flex -mx-4 items-center'>
				<div className='px-4 w-8/12'>
					<Image
						src={'/featured-thumbnail.png'}
						alt='Thumbnail 1'
						width={'1080'}
						height={'1080'}
						className='rounded-xl w-full'
						blurDataURL='data:...' // automatically provided
						placeholder='blur' // Optional blur-up while loading
					/>
				</div>
				<div className='w-4/12 px-4'>
					<InfoPost
						category='UI Design'
						date='Jun 2023'
						title='Understanding color theory: the color wheel and finding complementary colors'
						shortDescription='Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'
						authorAvatar='/author-1.png'
						authorName='Leslie Alexander'
						authorJob='UI Designer'
					/>
				</div>
			</div>
		</article>
	);
};

export default FeaturedPost;
