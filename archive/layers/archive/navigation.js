document.querySelector('btn__next').onclick=()=>{

	let pageToken=document.querySelector('meta[name="layer"]').content
	console.log(JSON.parse(pageToken))
	localStorage.setItem('OSI_PAGE_TOKEN',JSON.stringify(pageToken))
}
