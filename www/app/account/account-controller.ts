/// <reference path="../_app.ts" />

module app.controllers {
    export interface IAccountCtrlScope extends ng.IScope {
        settings: any;
    }

    export class AccountCtrl {
        constructor(private $scope: IAccountCtrlScope){
            $scope.settings = {
                enableFriends: true
            };
        }
    }
}