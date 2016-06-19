module app.controllers {

	interface AccountSettings {
		enableFriends: boolean;
	}

	export class AccountCtrl {

		public settings: AccountSettings;

		constructor(){
			this.settings = {
				enableFriends: true
			};
		}
	}
}
