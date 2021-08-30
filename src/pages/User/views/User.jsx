import React, { useEffect,useState } from 'react'
import { useTranslation } from 'react-i18next'
import Table from '../components/Table'
import { get_agency } from '../../../service/client/agency'


function User() {
	const { t } = useTranslation()
	const [agency, setAgency] = useState([])
	useEffect(()=>{
		const token = localStorage.getItem('token')
		get_agency(token).then(res=>{
			const show = res.data.filter((x)=>{
				console.log(x.leader)
				x.is_verified? x['status'] = 'Active': x['status'] = 'Inactive'
				x.leader == null? x.leader = 'No Leader': x.leader
				return x.is_verified == true 
				// x.role.name != 'admin'
			})
			setAgency(show)
		})
	},[])


	const columns = React.useMemo(
		() => [
			{
				Header: t('FULL_NAME'),
				accessor: 'full_name', // accessor is the "key" in the data
			},
			{
				Header: t('SEX'),
				accessor: 'gender',
			},
			{
				Header: t('Role'),
				accessor: 'role.name',
			},
			{
				Header: t('Leader'),
				accessor: 'leader',
			},
			
			{
				Header: t('EMAIL'),
				accessor: 'email',
			},
			{
				Header: t('PHONE'),
				accessor: 'phone1',
			},
			{
				Header: t('ADDRESS'),
				accessor: 'address',
			},
			{
				Header: t('ID CARD'),
				accessor: 'identify_card_number',
			},
		],
		[]
	)

	return (
		<div >
			<div className="flex w-full">
				<h1 className="flex-1 font-bold text-3xl text-yellow-lite">{t('USER')}</h1>
			</div>
			<div className="mt-4"/>
			<Table data={agency} columns={columns} />
			
		</div>
	)
}

export default User