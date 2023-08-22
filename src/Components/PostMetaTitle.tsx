const PostMetaTitle = ({
	category,
	date,
	title,
	center,
}: {
	category: string;
	date: string;
	title: string;
	center: any;
}) => {
	return (
		<div>
			<div className='flex items-center text-white/60 space-x-4'>
				<div className='uppercase'>{category}</div>
				<span>&bull;</span>
				<div>{date}</div>
			</div>
			<h2 className={`text-2xl mt-4 ${center ? 'text-center' : ''}`}>
				{/* <h2 className={`text-2xl mt-4 ${center ? `text-center` : ``}`}> */}
				{title}
			</h2>
		</div>
	);
};

export default PostMetaTitle;
