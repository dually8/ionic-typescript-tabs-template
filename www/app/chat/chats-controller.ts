/// <reference path="../_app.ts" />

module app.controllers {
    
    export interface IChatCtrlScope extends ng.IScope {
        chats: any;
        remove(chat: any): void;
    }

    export class ChatCtrl {
        constructor(private $scope: IChatCtrlScope,
                    private $stateParams,
                    private Chats: app.services.IChatFactory){
            $scope.chats = Chats.all();
            $scope.remove = function(chat) {
                Chats.remove(chat);
            }
        }
    }
}