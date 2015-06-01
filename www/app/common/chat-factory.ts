/// <reference path="../_app.ts" />

module app.services {
	'use strict';


    export interface IChatFactory {
		//chats: any[];
        all(): any;
		remove(chat: any): void;
		get(id: string): any;
    }

    export class ChatFactory implements IChatFactory {
		private chats: any[];

        constructor() {
			this.chats = [{
				id: 0,
				name: 'Ben Sparrow',
				lastText: 'You on your way?',
				face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
			}, {
				id: 1,
				name: 'Max Lynx',
				lastText: 'Hey, it\'s me',
				face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
			},{
				id: 2,
				name: 'Adam Bradleyson',
				lastText: 'I should buy a boat',
				face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
			}, {
				id: 3,
				name: 'Perry Governor',
				lastText: 'Look at my mukluks!',
				face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
			}, {
				id: 4,
				name: 'Mike Harrington',
				lastText: 'This is wicked good ice cream.',
				face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
			}];
        }
		public all() {
			var _this = this;
			return _this.chats;
		}
		public remove(chat: any) {
			var _this = this;
			_this.chats.splice(_this.chats.indexOf(chat), 1);
		}
		public get(id: string){
			var _this = this;
			for (var i = 0; i < _this.chats.length; i++) {
				if (_this.chats[i].id === parseInt(id)) {
				  return _this.chats[i];
				}
	      }
	      return null;
		}
    }
}