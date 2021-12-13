import axios from 'axios'

export const getAllActivityLogs = (token) => {
	const config =  {
		method: 'get',
		url: 'http://52.77.238.215/api/activitylog/get-all-logs',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	return axios(config)
}