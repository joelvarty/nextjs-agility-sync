const renderHTML = (html) => {
	if (!html) return { __html: "" };
	return { __html: cleanHTML(html) };
}

const cleanHTML = (html) => {
	if (!html) return ""

	//fix '~' in links in HTML
	return html.replace(/href="~\//gi, 'href="/')
}

module.exports = {
	renderHTML,
	cleanHTML
}