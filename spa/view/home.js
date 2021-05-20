import Menu from '/spa/view/menu.js'

export default class HomeView
{
	static Home(div)
	{
		return `<div id="content">
			<h1> Spa js router </h1>
			<p> Js spa router, single page application routing system in javascript. </p>
			<a href="https://github.com/moovspace/spa-js-router" title="Spa js router"> Github repository </a>
		</div>`;
	}

	static Html(div)
	{
		return Menu.Html() + this.Home(div);
	}
}