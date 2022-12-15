import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class EmployeeShiftsService{
	
	constructor(){}

	getEmployeeShifts() {
        console.log("get Employees");
		const url = `${API_URL}/api/employee_shifts/`;
		return axios.get(url).then(response => response.data);
	}

	getEmployeeShift(id) {
		const url = `${API_URL}/api/employee_shifts/${id}`;
		return axios.get(url).then(response => response.data);
	}

	deletetEmployeeShift(employee_shift){
		const url = `${API_URL}/api/employee_shifts/${employee_shift.id}`;
		return axios.delete(url);
	}

	createtEmployeeShift(employee_shift){
		const url = `${API_URL}/api/employee_shifts/`;
		return axios.post(url,employee_shift);
	}

	updatetEmployeeShift(employee_shift){
		const url = `${API_URL}/api/employee_shifts/${employee_shift.id}`;
		return axios.put(url,employee_shift);
	}
}