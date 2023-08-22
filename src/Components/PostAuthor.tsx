import Image from 'next/image';

const PostAuthor = ({
	authorAvatar,
	authorName,
	authorJob,
}: {
	authorAvatar: string;
	authorName: string;
	authorJob: string;
}) => {
	return (
		<div className='flex items-center mt-5'>
			<Image
				className='w-14 h-14 rounded-full object-cover'
				src={authorAvatar}
				alt={`Image of ${authorName}`}
				width={48}
				height={48}
			/>
			<div className='ml-4'>
				<h3>{authorName}</h3>
				<div className='text-white/60 text-sm mt-1'>{authorJob}</div>
			</div>
		</div>
	);
};

export default PostAuthor;
