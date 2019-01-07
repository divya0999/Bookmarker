//listen form submit

document.getElementById("myForm").addEventListener('submit', saveBookmarked);

function saveBookmarked(e){
var sitesName = document.getElementById("siteName").value;
var sitesURL = document.getElementById("siteURL").value;


var bookmark = {

	name:sitesName,
	url: sitesURL
}


if (localStorage.getItem('bookmarks') === null){

	var bookmarks = [];
	

	bookmarks.push(bookmark);

	localStorage.setItem('bookmarks', JSON.stringify('bookmarks') );



}

//store bookmark values in local storage after checking for its availibility
e.preventDefault(); // prevent default action i.e. prevent form from submitting
}