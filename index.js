RandImageArray = new Array();
RandImageArray[0] = 'assets/homepage/landscape1.png';
RandImageArray[1] = 'assets/homepage/landscape2.png';
RandImageArray[2] = 'assets/homepage/landscape3.png';
RandImageArray[3] = 'assets/homepage/landscape4.png';
var num = Math.floor(Math.random()*4);
document.getElementById("bannerImage").src = RandImageArray[num];
console.log("Loaded banner Image:",RandImageArray[num]);

const githubURL="https://api.github.com/repositories/1135079675"
fetch(githubURL)
	.then(response => {
		if(!response.ok){
			throw new Error(`HTTP Error! Status: ${response.status}`);
		}
		return response.json();
	})
	.then(data => {
		console.log(data);
		const updatedDate=new Date(data.updated_at).toLocaleDateString();
		document.getElementById("lastPageUpdatedDate").innerHTML=updatedDate
	})
	.catch(error => {	
		console.error('Error:', error);
	});
