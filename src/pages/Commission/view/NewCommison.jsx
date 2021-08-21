import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
import AddCommisionAgent from '../components/AddCommsionAgent'
import { getAvailablePlan, getPlanById, get_plan } from '../../../service/client/Plan'
getAvailablePlan
import { createCommission } from '../../../service/client/Commision'
import { useHistory } from 'react-router-dom'

function NewCommison() {
	const { t } = useTranslation()
	const [Agency, setAgency] = useState([])
	const [Plans, setPlans] = useState([])
	const [selectedPlan, setSelectedPlan] = useState()
	const [CommissionTo, setCommissionTo] = useState([])
	const [CommissionPrice, setCommissionPrice] = useState([])
	const history = useHistory()
	const { register, handleSubmit, control } = useForm()

	useEffect(() => {
		const token = localStorage.getItem('token')
		get_plan(token).then(res => {
			if (!res?.data.error){
				let k = res.data.map(x => {
					return {
						'label': x.plan_name,
						'value': x.id
					}
				})
				setPlans(k)
			}
		}).catch(err =>  console.log(err))
		setAgency([{
			'label': 'Agency',
			'value': 'agency_id'
		}])

	}, [])

	const onSubmit = async(data) => {
		const commission = {
			'real_estate': data.real_estate,
			'plan_id': selectedPlan,
			'num_lots': data.number_lots,
			'total_commission_price': CommissionPrice,
			'agency': CommissionTo.map(x => {
				return { 'agency_id': x.id, 'price': x.ammount }
			})

		}
	
		let totalMoneyCommission = 0
		CommissionTo.filter(x=>{
			totalMoneyCommission += Number(x.ammount)
		})

		if(CommissionPrice == totalMoneyCommission){
			const token = localStorage.getItem('token')
			console.log(commission)
			await createCommission(commission,token)
			history.push('/commission')
		}else{
			alert('Total Money Commission must be equal total money agency')
		}
		
	}

	const onAgentAdd = (data) => {
		let agent = data.agent.split('/')
		setCommissionTo([...CommissionTo, {
			'id': agent[0],
			'name': agent[1],
			'ammount': data.ammount
		}])
	}
	const onPlanChange = async (data) => {
		// alert(data.value)
		const token = localStorage.getItem('token')
		setSelectedPlan(data.value)
		const plan = await getPlanById(data.value,token)
		setCommissionPrice(plan.data.commission_price)		
	}

	return (
		<div >
			<div className="flex w-full">
				<h1 className="flex-1 font-bold text-3xl text-yellow-lite">{t('NEW_COMMISION')}</h1>
			</div>
			<div className="mt-10" />
			<div >
				<form onSubmit={handleSubmit(onSubmit)}>

					<div className="md:grid md:grid-cols-3 md:gap-6">
						<div className="md:col-span-1">
							<div className="px-4 sm:px-0">
								<h3 className="text-lg font-medium leading-6 text-gray-900">Commision</h3>
								<p className="mt-1 text-sm text-gray-600">
									Commision details
								</p>
							</div>
						</div>
						<div className="mt-5 md:mt-0 md:col-span-2">
							<div className="shadow sm:rounded-md ">
								<div className="px-4 py-5 bg-white space-y-6 sm:p-6">
									<div className="grid grid-cols-3 gap-6">
										<div className="col-span-3 sm:col-span-2">
											<label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
												{t('REAL_ESTATE')}
											</label>
											<div className="mt-1 flex rounded-md shadow-sm">
												<input {...register('real_estate')} type="text" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 p-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" />
											</div>
										</div>
									</div>
									<div className="grid grid-cols-3 gap-6">
										<div className="col-span-3 sm:col-span-2">
											<label htmlFor="phone" className="block text-sm font-medium text-gray-700">
												{t('NUMBER_LOTS')}
											</label>
											<div className="mt-1 flex rounded-md shadow-sm">
												<input {...register('number_lots')} type="number" className="focus:ring-indigo-500 focus:border-indigo-500 p-1 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" />
											</div>
										</div>
									</div>
									<div className="grid grid-cols-3 gap-6">
										{/* <div className="col-span-3 sm:col-span-2">
											<label htmlFor="agency" className="block text-sm font-medium text-gray-700">
												{t('AGENCY')}

											</label>
											<Controller
												name="agency"
												control={control}
												rules={{ required: true }}
												render={({ field }) => (
													<Select
														{...field}
														options={Agency}
													/>
												)}
											/>
										</div> */}
										<div className="col-span-3 sm:col-span-2">
											<label htmlFor="plan" className="block text-sm font-medium text-gray-700">
												{t('PLAN')}

											</label>
											<Select
												
												onChange={onPlanChange}
												options={Plans}
											/>
											
										</div>
									</div>
									<div className="grid grid-cols-3 gap-6">
										<div className="col-span-3 sm:col-span-2">
											<label htmlFor="phone" className="block text-sm font-medium text-gray-700">
												{t('Total Commission Price')}
											</label>
											<div className="mt-1 flex rounded-md shadow-sm">
												
												<input {...register('total_commission_price')} type="text" className="focus:ring-indigo-500 focus:border-indigo-500 p-1 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" value={CommissionPrice} />
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
						<div className="md:col-span-1">
							<div className="px-4 sm:px-0">
								<h3 className="text-lg font-medium leading-6 text-gray-900">Agents</h3>
								<p className="mt-1 text-sm text-gray-600">
									Agent commision
								</p>
							</div>
						</div>
						<div className="mt-5 md:mt-0 md:col-span-2">
							<div className="shadow sm:rounded-md ">
								<div className="px-4 py-5 bg-white space-y-6 sm:p-6">
									<div className="grid grid-cols-3">
										<p className=" col-span-2 font-bold text-lg">Agent commisions</p>
										<AddCommisionAgent onAgentAdd={onAgentAdd} />
										<div className=" col-span-3">
											<table className="rounded-t-lg m-5 w-11/12 mx-auto bg-gray-200 text-gray-800">
												<tbody className=" text-center">
													<tr className="border-b-2 py-2 border-gray-300">
														<th className=" px-1">No. </th>
														<th className=" px-1">Name</th>
														<th className=" px-1">Ammount</th>
													</tr>

													{CommissionTo.length === 0 && <tr className="py-2"><td colSpan={3} className="text-center">Nothing to show</td></tr>}
													{CommissionTo.length > 0 &&
														CommissionTo.map((x, index) => (
															<tr key={'agent_commision' + index} className="py-2">
																<td className=" p-1">{index + 1}</td>
																<td className="p-1">{x.name}</td>
																<td className="p-1">{x.ammount}</td>
																<td className='p-1' onClick={() => console.log(x.id)}><button>Delete</button></td>
															</tr>
														))
													}

												</tbody>

											</table>
										</div>
									</div>

								</div>
							</div>
						</div>
						<button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Save
						</button>

					</div>
				</form>
			</div>
		</div>
	)
}

export default NewCommison