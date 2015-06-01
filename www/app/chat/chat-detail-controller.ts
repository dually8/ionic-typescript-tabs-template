/// <reference path="../_app.ts" />

module app.controllers {
    
    export interface IChatDetailCtrlScope extends ng.IScope {
        chat: any;
    }

    export class ChatDetailCtrl {
        constructor(private $scope: IChatDetailCtrlScope,
                    private $stateParams,
                    private Chats: app.services.IChatFactory){
            $scope.chat = Chats.get($stateParams.chatId);
        }
    }
}