module app.controllers {

	export class ChatDetailCtrl {

		public chat: app.models.IChat;

		constructor(private $stateParams: angular.ui.IStateParamsService,
					private Chats: app.services.ChatFactory){
			this.chat = Chats.get($stateParams["chatId"]);
		}
	}
}
