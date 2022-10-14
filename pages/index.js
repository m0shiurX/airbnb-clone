import Head from 'next/head';
import { useState, useMemo } from 'react';
import Card from '../components/Card';
import useWindowDimensions from '../hooks/useWindowDimensions';
import dynamic from 'next/dynamic';
import { client } from '../lib/apollo';
import { gql } from '@apollo/client/core';
import { formatListing } from '../lib/formatter';

export default function Home({ posts }) {
	const Map = useMemo(() => dynamic(() => import('../components/Map'), { loading: () => <p>Loading map...</p>, ssr: false }), []);
	const [showMap, setShowMap] = useState(true);
	const { width } = useWindowDimensions();
	const toggleMap = () => {
		setShowMap(() => !showMap);
	};

	return (
		<div className=''>
			<Head>
				<title>Properties</title>
				<meta name='description' content='Buy properties at affordable price' />
			</Head>

			{/* Content area starts from here */}
			<main className='relative laptop:grid laptop:grid-cols-2 desktop:grid-cols-3 w-full min-h-screen min-w-min'>
				{/* Map with leaflet js */}
				<div className='bg-sky-200 min-h-fit h-screen grid place-items-center w-100 fixed laptop:w-1/2 desktop:w-2/3 top-0 left-0 right-0'>
					<Map listings={posts} />
				</div>

				{/* Properties listing */}
				{showMap && (
					<div className='p-6 rounded-t-3xl laptop:col-start-2 laptop:col-span-2 desktop:col-start-3 tablet:rounded-none min-h-screen absolute tablet:top-0 top-[55%] bg-white w-full'>
						{/* Header */}
						<div className='flex items-center justify-between pt-3 pb-5'>
							<div className='text-xl'> 777 properties </div>
							<button className='flex items-center bg-[#a8dee0] border-stone-600 border px-3 py-1 rounded-md'>
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
						<div className='grid gap-6 phone:grid-cols-2 '>
							{posts.map((post) => {
								return <Card key={post.id} post={post} />;
							})}
						</div>

						{/* Pagination */}
						<div className='flex mt-5 justify-center items-center space-x-1'>
							<a href='#' className='flex items-center px-4 py-2 text-gray-500 bg-gray-100 rounded-md'>
								<svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M11 17l-5-5m0 0l5-5m-5 5h12' />
								</svg>
							</a>

							<a href='#' className='px-4 py-2 text-gray-100 bg-lime-700 rounded-md hover:bg-lime-700 hover:text-white'>
								1
							</a>
							<a href='#' className='px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-lime-700 hover:text-white'>
								2
							</a>
							<a href='#' className='px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-lime-700 hover:text-white'>
								3
							</a>
							<a href='#' className='px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-lime-700 hover:text-white'>
								<svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 7l5 5m0 0l-5 5m5-5H6' />
								</svg>
							</a>
						</div>
					</div>
				)}

				{/* Toggle button in tablet mode */}
				<div className='hidden tablet:flex laptop:hidden justify-center fixed bottom-12 left-0 w-full'>
					<button onClick={toggleMap} className='flex items-center gap-x-2 text-xl bg-lime-900 text-white py-2.5 px-5 rounded-xl '>
						<span>Show map</span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
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
					</button>
				</div>
			</main>
			{/* End of content area */}
		</div>
	);
}

export async function getStaticProps() {
	const GET_LISTINGS = gql`
		query getProperties {
			immobilien(first: 1000) {
				nodes {
					id
					link
					title
					imobilienFelder {
						addresse
						adresseOnMap {
							longitude
							latitude
							streetAddress
						}
						grose
						immobilienTyp
						preis
						vdossier
						video
						zimmer
						gallerie {
							sourceUrl(size: MEDIUM)
						}
					}
				}
			}
		}
	`;
	const response = await client.query({
		query: GET_LISTINGS,
	});
	const posts = formatListing(response?.data?.immobilien?.nodes);
	return {
		props: {
			posts,
		},
	};
}
