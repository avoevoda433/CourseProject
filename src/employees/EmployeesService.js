import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class EmployeesService{
	
	constructor(){}

	getEmployees() {
        console.log("get Employees");
		const url = `${API_URL}/api/employees/`;
		return axios.get(url).then(response => response.data);
	}

	getEmployee(id) {
		const url = `${API_URL}/api/employees/${id}`;
		return axios.get(url).then(response => response.data);
	}

	deletetEmployee(employee){
		const url = `${API_URL}/api/employees/${employee.id}`;
		return axios.delete(url);
	}

	createtEmployee(employee){
		const url = `${API_URL}/api/employees/`;
		return axios.post(url,employee);
	}

	updatetEmployee(employee){
		const url = `${API_URL}/api/employees/${employee.id}`;
		return axios.put(url,employee);
	}
}