document.querySelector('#form').addEventListener('submit', getFace);

async function getFace (e) {
e.preventDefault();
const gender = document.getElementById('gender').value;
const age = document.getElementById('age').value;
const ethnicity = document.getElementById('ethnicity').value;
const url = `https://face-studio.p.rapidapi.com/generate?gender=${gender}&age=${age}&ethnicity=${ethnicity}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd0fb01dc7msh50d850dd9677a49p10ac77jsn75fd63f0e136',
		'X-RapidAPI-Host': 'face-studio.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.blob();
    const image = URL.createObjectURL(result);
    const imageDOM = document.createElement('img');
    const parDOM = document.createElement('p');
    parDOM.textContent = url;
    document.body.appendChild(parDOM);
    imageDOM.src = image;
    document.body.appendChild(imageDOM);
	console.log(result);
} catch (error) {
	console.error(error);
}
}