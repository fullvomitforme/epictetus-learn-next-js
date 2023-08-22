'use client';

import Layout from '@/Components/Layout';
import Container from '@/Components/Container';
import PostMetaTitle from '@/Components/PostMetaTitle';
import PostAuthor from '@/Components/PostAuthor';
import Image from 'next/image';

const Detail = () => {
	return (
		<Layout>
			<Container>
				<div className='md:w-6/12 w-full mx-auto flex items-center flex-col'>
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
				<div className='md:w-10/12 w-full mx-auto my-10'>
					<Image
						src={'/detail-image.png'}
						width={1080}
						height={1080}
						alt='Understanding color theory: the color wheel and finding complementary colors'
						className='w-full rounded-lg'
					></Image>
				</div>
				<div className='md:w-8/12 w-full mx-auto leading-relaxed'>
					<p className='text-xl mb-4'>
						Male sixth sea it a. Brought was signs female darkness signs form
						cattle land grass whose from subdue also they&apos;re their brought
						seas isn&apos;t, to day from bearing grass third midst after
						beginning man which you&apos;re. Dry, gathering beginning given made
						them evening.
					</p>
					<p className='mb-4'>
						Lights dry. Thing, likeness, forth shall replenish upon abundantly
						our green. Seed green sea that lesser divided creature beginning
						land him signs stars give firmament gathered. Wherein there their
						morning a he grass. Don&apos;t made moving for them bring creature
						us you&apos;ll tree second deep good unto good may. Us yielding.
					</p>
					<p>
						Have. Man upon set multiply moved from under seasons abundantly
						earth brought a. They&apos;re open moved years saw isn&apos;t
						morning darkness. Over, waters, every let wherein great were fifth
						saw was lights very our place won&apos;t and him Third fourth moving
						him whales behold. Beast second stars lights great was don&apos;t
						green give subdue his. Third given made created, they&apos;re forth
						god replenish have whales first can&apos;t light was. Herb
						you&apos;ll them beast kind divided. Were beginning fly air multiply
						god Yielding sea don&apos;t were forth.
					</p>
				</div>
			</Container>
		</Layout>
	);
};

export default Detail;
