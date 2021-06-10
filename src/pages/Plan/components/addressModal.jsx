import React from 'react'
import { useTranslation } from 'react-i18next'


export default function Modal() {
	const [showModal, setShowModal] = React.useState(false)
	const { t } = useTranslation('plan')
	return (
		<>
			<button
				className="p-2 font-bold flex justify-end border-2 text-white bg-blue-500 opacity-80 hover:opacity-100 rounded items-center"
				type="button"
				onClick={() => setShowModal(true)}
			>
                Input Location
			</button>
			{showModal ? (
				<>
					<div
						className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
					>
						<div className="relative md:w-6/12 my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
									<h3 className="text-3xl font-semibold">
										{t('LOCATION')}
									</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black hover:opacity-100 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										X
										{/* <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            
										</span> */}
									</button>
								</div>
								<form >
									<div className="relative p-6 flex-auto ">
										<div className="flex flex-wrap -mx-3 mb-6 space-y-1">
											<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
												<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
													House Number
												</label>
												<input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" />												
											</div>
											<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
												<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
													Street
												</label>
												<input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" />
											</div>
											<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
												<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
													District
												</label>
												<input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" />
											</div>
											<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
												<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
													City/Province
												</label>
												<input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" />
											</div>
										</div>
									</div>
									{/*footer*/}
									<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
										<button
											className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
											type="button"
											onClick={() => setShowModal(false)}
										>
                                            Close
										</button>
										<button
											className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
											type="submit"
											onClick={() => setShowModal(false)}
										>
                                            Confirm
										</button>
									</div>

								</form>
								
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	)
}