import Head from 'next/head';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Propertica</title>
				<meta name='description' content='Buy properties at affordable price' />
			</Head>
			<main className=''>
				{/* Properties listing */}
				<div className='p-5'>
					{/* Header */}
					<div className='flex items-center justify-between'>
						<div> 777 stays </div>
						<button className='flex items-center'>
							{/* filter icon */}
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
									d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z'
								/>
							</svg>
							<span className='font-semibold ml-1'>Filters</span>
						</button>
					</div>

					{/* Cards */}
					<div></div>

					{/* Pagination */}
					<div></div>
				</div>

				{/* Map with leaflet js */}
				<div></div>
			</main>
		</div>
	);
}
