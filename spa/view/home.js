import Menu from '/spa/view/menu.js'

export default class HomeView
{
	static Home(div)
	{
		return `<div id="content">
			<h1> SPA js router </h1>
			<p> Js SPA router, single page application routing system in javascript. </p>
			<a href="github.com/moovspace/spa-js-router"> Github repository </a>
		</div>`;
	}

	static Html(div)
	{
		return Menu.Html() + this.Home(div);
	}
}