import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class SpecialitiesService{
	
	constructor(){}

	getSpecialities() {
        console.log("get Specialities");
		const url = `${API_URL}/api/specialities/`;
		return axios.get(url).then(response => response.data);
	}

	getSpeciality(id) {
		const url = `${API_URL}/api/specialities/${id}`;
		return axios.get(url).then(response => response.data);
	}

	deleteSpeciality(speciality){
		const url = `${API_URL}/api/specialities/${speciality.id}`;
		return axios.delete(url);
	}

	createSpeciality(speciality){
		const url = `${API_URL}/api/specialities/`;
		return axios.post(url,speciality);
	}

	updateSpeciality(speciality){
		const url = `${API_URL}/api/specialities/${speciality.id}`;
		return axios.put(url,speciality);
	}
}