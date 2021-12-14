import React,{useState} from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { useSortBy, useAsyncDebounce, usePagination, useTable, useFilters, useGlobalFilter } from 'react-table'
import PropTypes from 'prop-types'
import { InlineIcon } from '@iconify/react'
import chevronRight from '@iconify-icons/mdi/chevron-right'
import chevronLeft from '@iconify-icons/mdi/chevron-left'
import pageLast from '@iconify-icons/mdi/page-last'
import pageFirst from '@iconify-icons/mdi/page-first'

import arrowDownDropCircleOutline from '@iconify-icons/mdi/arrow-down-drop-circle-outline'
import arrowUpDropCircleOutline from '@iconify-icons/mdi/arrow-up-drop-circle-outline'
import printerOutline from '@iconify-icons/mdi/printer-outline'
import ReactToPrint from 'react-to-print'
import { useTranslation } from 'react-i18next'
import moment from 'moment'



export default function Table({ data, columns }) {
	let componentRef = React.createRef()
	const {t} = useTranslation()

	const [startDate, setStartDate]  = useState()
	const [endDate, setendDate] = useState()
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		preGlobalFilteredRows,
		setGlobalFilter,
		state: { pageIndex, pageSize, globalFilter },
	} = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: 0 },
		},
		useFilters,
		useGlobalFilter,
		useSortBy,
		usePagination,
	)

	const count = preGlobalFilteredRows.length
	const [value, setValue] = React.useState(globalFilter)
	const onChange = useAsyncDebounce(value => {
		setGlobalFilter(value || undefined)
	}, 200)
	
	var [dateRange, setDateRange] = useState([])
	const [isRange,setIsRange] =useState(false)
	function getDates(startDate, stopDates) {
		var dateArray = []
		var currentDate = moment(startDate)
		var stopDate = moment(stopDates)
		while (currentDate <= stopDate) {
			dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
			currentDate = moment(currentDate).add(1, 'days')
		}
		setDateRange(dateRange = dateArray)
		setIsRange(true)
		console.log(dateRange)
		return dateArray
	}

	return (
		<>
			<div className="flex sm:flex-col flex-row justify-between">
			<div className="mb-5 mt-10">
				<ReactToPrint
					trigger={() => <button className="flex space-x-2 font-bold text-primary-default p-1 px-3 rounded">
						<InlineIcon icon={printerOutline} className="text-xl"/><span>{t('PRINT')}</span>
					</button>}
					content={() => componentRef}
				/>
			</div>
			<div className="mb-5 mt-10 sm:mt-0 sm:mb-0">
			{t('SEARCH')}:{' '} 
				<input
					value={value || ''}
					onChange={e => {
						setValue(e.target.value)
						onChange(e.target.value)
					}}
					placeholder={`${count} ${t('RECORD')}...`}
					className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b pl-8 pr-6 py-2 bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
				/>
				{/* <h1 className="inline-block mx-10">Date:</h1>
				<input type="date" onChange={e => {setValue(e.target.value) 
				onChange(e.target.value)}}></input> */}


			</div>
			</div>
			<div className='sm:flex sm:flex-col flex flex-row'>
<h1 className="inline-block sm:mx-0 sm:block mx-10">From:</h1>

<input type="date" className='border border-gray-400 rounded-md px-3' onChange={e => {setStartDate(e.target.value) 
console.log(startDate)
}}></input>
<h1 className="inline-block sm:block sm:mx-0 mx-10">To:</h1>

<input type="date" className='border border-gray-400 rounded-md px-3' onChange={e => {setendDate(e.target.value) 
console.log(endDate)
}}></input>
<button onClick={() => getDates(startDate,endDate)} className=" border border-gray-400 sm:my-1 px-2  mx-5 rounded-md">Search</button>
</div>
			<div className="flex flex-col mt-2 "  ref={(el) => (componentRef = el)}>
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow border-b border-gray-200 sm:rounded-lg">
							<table {...getTableProps()} className="min-w-full divide-y divide-gray-200 ">
								<thead className=" bg-primary-default text-sm lg:text-md text-white ">
									{headerGroups.map((headerGroup,index) => (
										<tr key={'row'+ index} {...headerGroup.getHeaderGroupProps()}>
											{headerGroup.headers.map((column,index) => (
												<th
													{...column.getHeaderProps(column.getSortByToggleProps())}
													className="px-6 py-3 text-left tracking-wider "
													key={'column' + index}
												>
													{column.render('Header')}{' '}
													<span className="inline-block">
														{column.isSorted
															? column.isSortedDesc
																? <InlineIcon icon={arrowDownDropCircleOutline} />
																: <InlineIcon icon={arrowUpDropCircleOutline} />
															: ''}
													</span>
												</th>
											))}
											<th
												className="px-6 py-3 text-left tracking-wider"
											>
												
											</th>
										</tr>
									))}
								</thead>
								<tbody {...getTableBodyProps()}>
									{
									!isRange ? 
									page.map((row,index) => {
										prepareRow(row)
										return (
											<tr key={'row-' + index} {...row.getRowProps()}>
												{row.cells.map((cell,index) => {
													return (
														<td
															{...cell.getCellProps()}
															className="px-6 py-4 whitespace-nowrap max-w-sm "
															key={'cell-' + index}
														>
															<div className="text-sm text-gray-900 overflow-x-hidden">
																{cell.render('Cell')}
															</div>
														</td>
														
													)
												})}
											</tr>
										)
									})
								: page.filter(x => dateRange.includes(x.values.date.split(' ')[0]))
								.map((row,index) => {
									prepareRow(row)
									return (
										<tr key={'row-' + index} {...row.getRowProps()}>
											{row.cells.map((cell,index) => {
												return (
													<td
														{...cell.getCellProps()}
														className="px-6 py-4 whitespace-nowrap max-w-sm "
														key={'cell-' + index}
													>
														<div className="text-sm text-gray-900 overflow-x-hidden">
															{cell.render('Cell')}
														</div>
													</td>
													
												)
											})}
										</tr>
									)
								})

								}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div className="px-4 flex flex-wrap space-y-2 space-x-2  mt-1">
				<div className="space-x-2 text-bold text-xl flex-1 flex">
					<button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
						<span className="sr-only">Next</span>
						<InlineIcon icon={pageFirst} />
					</button>
					<button onClick={() => previousPage()} disabled={!canPreviousPage}>
						<span className="sr-only">Next</span>
						<InlineIcon icon={chevronLeft} />
					</button>
					<button onClick={() => nextPage()} disabled={!canNextPage}>
						<span className="sr-only">Next</span>
						<InlineIcon icon={chevronRight} />

					</button>
					<button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
						<span className="sr-only">Next</span>
						<InlineIcon icon={pageLast} />

					</button>
				</div>
				
				<div className="flex-1">
				{t('PAGE')} {' '}
					<strong>
						<input
							className=" w-1/5 text-center border"
							type="number"
							defaultValue={pageIndex + 1}
							onChange={e => {
								const page = e.target.value ? Number(e.target.value) - 1 : 0
								gotoPage(page)
							}}
						/> of {pageOptions.length}
					</strong>
					
				</div>
				<select
					value={pageSize}
					onChange={e => {
						setPageSize(Number(e.target.value))
					}}
					className=" flex-1 p-1"
				>
					{[10, 20, 30, 40, 50].map(pageSize => (
						<option key={pageSize} value={pageSize}>
							{t('SHOW')} {pageSize}
						</option>
					))}
				</select>
			</div>

		</>
	)
}
Table.propTypes = {
	data: PropTypes.array,
	columns: PropTypes.array
}