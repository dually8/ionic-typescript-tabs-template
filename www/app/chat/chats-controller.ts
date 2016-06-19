module app.controllers {

	export class ChatCtrl {

		public chats: app.models.IChat[];

		constructor(
			private $stateParams: angular.ui.IStateParamsService,
			private Chats: app.services.ChatFactory) {
				this.chats = this.Chats.all();
		}

		public remove(chat: app.models.IChat): void {
			this.Chats.remove(chat);
			this.chats = this.Chats.all();
		}
	}
}
