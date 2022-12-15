import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class WorkShiftsService{
	
	constructor(){}

	getWorkShifts() {
        console.log("get WorkShifts");
		const url = `${API_URL}/api/work_shifts/`;
		return axios.get(url).then(response => response.data);
	}

	getWorkShift(id) {
		const url = `${API_URL}/api/work_shifts/${id}`;
		return axios.get(url).then(response => response.data);
	}

	deleteWorkShift(work_shift){
		const url = `${API_URL}/api/work_shifts/${work_shift.id}`;
		return axios.delete(url);
	}

	createWorkShift(work_shift){
		const url = `${API_URL}/api/work_shifts/`;
		return axios.post(url,work_shift);
	}

	updateWorkShift(work_shift){
		const url = `${API_URL}/api/work_shifts/${work_shift.id}`;
		return axios.put(url,work_shift);
	}
}