/**
 *
 * @param {number} time - Unix time in seconds returns it in miliseconds
 */
export function convertDate(time) {
  return time * 1000;
}

export function forecast(latitude, longitude, date) {
	return fetch(`https://se-weather-api.herokuapp.com/api/v1/forecast?latitude=${latitude}&longitude=-${longitude}&date=${date}`)
		.then((response) => {
			return response.json();
		})
}

export function geoLocation(zipCode) {
	return fetch(`https://se-weather-api.herokuapp.com/api/v1/geo?zip_code=${zipCode}`)
		.then((response) => {
			return response.json();
		})
}