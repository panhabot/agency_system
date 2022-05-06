import axios from 'axios'

export const getAllActivityLogs = (token) => {
	const config =  {
		method: 'get',
		url: 'http://3.1.5.196/api/activitylog/get-all-logs',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	return axios(config)
}