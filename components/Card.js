import ImageSlider from './ImageSlider';

export default function Card({ post }) {
	return (
		<div className='w-full shadow-md border border-gray-50 rounded-sm'>
			<div className='h-40'>
				<ImageSlider gallery={post.gallery} />
			</div>

			<div className='p-3 text-[#4a707a]'>
				<h4 className='flex items-center gap-x-2 text-sm'>
					{/* location icon */}
					<svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
						/>
						<path strokeLinecap='round' strokeLinejoin='round' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
					</svg>
					<span>{post.address}</span>
				</h4>
				<h4 className='m-1 font-semibold'>{post.price === 'ASK' ? 'Auf Anfrage' : 'CHF ' + post.price}</h4>
				<div className='flex items-center justify-between text-gray-500 text-sm'>
					<div className='flex items-center gap-x-2'>
						{/* home icon */}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-4 w-4'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
							/>
						</svg>
						<span>{post.rooms} Zimmer</span>
					</div>
					<div className='flex items-center gap-x-2'>
						{/* map icon */}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-4 w-4'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'
							/>
						</svg>
						<span>{post.space} m² Wohnfläche</span>
					</div>
				</div>
			</div>
		</div>
	);
}
