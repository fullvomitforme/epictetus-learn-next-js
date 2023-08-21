import Image from 'next/image';

const InfoPost = ({
	category,
	date,
	title,
	shortDescription,
	authorAvatar,
	authorName,
	authorJob,
}: any) => {
	return (
		<>
			<div className='flex items-center text-white/60 space-x-4'>
				<div className='uppercase'>{category}</div>
				<span>&bull;</span>
				<div>{date}</div>
			</div>
			<h2 className='text-2xl mt-4'>{title}</h2>
			<p className='text-white/60 mt-5 w-10/12'>{shortDescription}</p>
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
		</>
	);
};

export default InfoPost;
