import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class DepartmentsService{
	
	constructor(){}

	getDepartments() {
        console.log("get departments");
		const url = `${API_URL}/api/departments/`;
		return axios.get(url).then(response => response.data);
	}

	getDepartment(id) {
		const url = `${API_URL}/api/departments/${id}`;
		return axios.get(url).then(response => response.data);
	}

	deleteDepartment(department){
		const url = `${API_URL}/api/departments/${department.id}`;
		return axios.delete(url);
	}

	createDepartment(department){
		const url = `${API_URL}/api/departments/`;
		return axios.post(url,department);
	}

	updateDepartment(department){
		const url = `${API_URL}/api/departments/${department.id}`;
		return axios.put(url,department);
	}
}