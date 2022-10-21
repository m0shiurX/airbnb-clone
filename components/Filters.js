import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import PriceSlider from './PriceSlider';
import TypeList from './TypesList';

export default function Filters() {
	const [open, setOpen] = useState(false);

	const cancelButtonRef = useRef(null);

	return (
		<>
			<button onClick={() => setOpen(true)} className='flex items-center border-stone-600 border px-4 py-1.5 rounded-md'>
				<svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z'
					/>
				</svg>
				<span className='font-semibold ml-1.5'>Filters</span>
			</button>

			<Transition.Root show={open} as={Fragment}>
				<Dialog as='div' className='relative z-10' initialFocus={cancelButtonRef} onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
					</Transition.Child>

					<div className='fixed inset-0 z-10 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
								enterTo='opacity-100 translate-y-0 sm:scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 translate-y-0 sm:scale-100'
								leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
							>
								<Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
									{/* Filters content goes here */}
									<div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
										<div className='sm:flex sm:items-start justify-start'>
											<div className='mt-3 text-left sm:mt-0 sm:ml-4 sm:text-left'>
												<div className='mt-2'>
													<p className='text-sm text-gray-500'>
														<PriceSlider initialMin={0} initialMax={100} min={0} max={10000} step={100} priceCap={1000} />
													</p>
												</div>
												<div className='mt-2'>
													<p className='text-sm text-gray-500'>
														<TypeList />
													</p>
												</div>
												<div className='mt-3 px-4'>
													<p className='flex flex-col gap-y-2'>
														<label htmlFor='zimmer'>Zimmer</label>
														<input className='border py-1.5 ' type='text' name='zimmer' />
													</p>
												</div>
												<div className='mt-3 px-4'>
													<p className='flex flex-col gap-y-2'>
														<label htmlFor='space'>Space</label>
														<input className='border py-1.5 ' type='text' name='space' />
													</p>
												</div>
												<div className='mt-3 px-4'>
													<p className='flex flex-col gap-y-2'>
														<label htmlFor='kanton'>Kanton</label>
														<input className='border py-1.5 ' type='text' name='kanton' />
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className='bg-gray-50 px-8 py-3 gap-5 flex justify-between'>
										<button
											type='button'
											className=' inline-flex w-48 justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
											onClick={() => setOpen(false)}
											ref={cancelButtonRef}
										>
											Clear all
										</button>
										<button
											type='button'
											className='inline-flex w-48 justify-center rounded-md border border-transparent bg-stone-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
											onClick={() => setOpen(false)}
										>
											Show all listings (56)
										</button>
									</div>
									{/* Filters content ends here */}
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
}
