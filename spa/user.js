import Component from '/spa/router/component.js'
import Event from '/spa/router/event.js'
import Store from '/spa/store.js'
import View from '/spa/view/user.js'

export class Page extends Component
{
	Setup(div)
	{
		document.title = 'Js SPA - Client details';

		// Pretty url /todo/{id}
		let id = this.urlParams()[1]

		Store.UserId(id);

		console.log("Todo id: ", id)

		return { 'html': View.Html(div) }
	}
}