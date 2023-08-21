import Image from 'next/image';
import InfoPost from './InfoPost';

const CardPost = ({ thumbnail, ...infoPost }: any) => {
	return (
		<article>
			<Image
				alt='Test'
				src={thumbnail}
				className='w-full rounded mb-4'
				width={1080}
				height={1080}
			/>
			<InfoPost {...infoPost} />
		</article>
	);
};

export default CardPost;
