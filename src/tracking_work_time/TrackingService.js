import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class TrackingService{
	
	constructor(){}

	getTracking() {
        console.log("get Tracking");
		const url = `${API_URL}/api/tracking/`;
		return axios.get(url).then(response => response.data);
	}

	getTrack(id) {
		const url = `${API_URL}/api/tracking/${id}`;
		return axios.get(url).then(response => response.data);
	}

	deletetTrack(track){
		const url = `${API_URL}/api/tracking/${track.id}`;
		return axios.delete(url);
	}

	createTrack(track){
		const url = `${API_URL}/api/tracking/`;
		return axios.post(url,track);
	}

	updateTrackt(track){
		const url = `${API_URL}/api/tracking/${track.id}`;
		return axios.put(url,track);
	}
}