
import axios from 'axios'


export const getDashboardInfo = (token) => {
	const config =  {
		method: 'get',
		url: 'http://52.77.238.215/api/dashboard/all-info',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	return axios(config)
}