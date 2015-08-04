/// <reference path="./_app.ts" />

module app {

    export class AppConfig {
        get refreshMinsRealtimeMeterdata():Number {
            return 1;
        }

        get refreshMinsDailyMeterdata():Number {
            return 720;
        }

        get isDevice():Boolean {
            return !!window.cordova;
        }

        get hoursToShowInChart(): number {
            return 6;
        }

        isMockMode:Boolean = true;
        isDeveloperMode: Boolean = false;
        systemTimerInSec:number = 21;
        serviceTimerInSeconds: number = 60 * 5;

        screenLockTimeoutInMin = 20; //20 minutes

        events = {
            serviceTick  : 'service-tick',
            uiTick : 'ui-tick'
        }

        const = {

        }

    }

    var config = new AppConfig();

    'use strict';
    angular.module('starter', ['ionic','ngCordova'])
        .value('config', config)
        .constant('_', _)
        .service("Chats", app.services.ChatFactory)
        .service("appService", app.services.AppService)
        .controller("AppCtrl", app.controllers.AppCtrl)
        .controller("DashCtrl", app.controllers.DashCtrl)
        .controller("ChatCtrl", app.controllers.ChatCtrl)
        .controller("ChatDetailCtrl", app.controllers.ChatDetailCtrl)
        .controller("AccountCtrl", app.controllers.AccountCtrl)
        .run(function($ionicPlatform) {
            $ionicPlatform.ready(function() {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if(window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if(window.StatusBar) {
                    window.StatusBar.styleDefault();
                }
            });
        })

        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider

              // setup an abstract state for the tabs directive
                .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "app/tabs.html"
              })
            
              // Each tab has its own nav history stack:
            
              .state('tab.dash', {
                url: '/dash',
                views: {
                  'tab-dash': {
                    templateUrl: 'app/dash/tab-dash.html',
                    controller: 'DashCtrl'
                  }
                }
              })
            
              .state('tab.chats', {
                  url: '/chats',
                  views: {
                    'tab-chats': {
                      templateUrl: 'app/chat/tab-chats.html',
                      controller: 'ChatCtrl'
                    }
                  }
                })
                .state('tab.chat-detail', {
                  url: '/chats/:chatId',
                  views: {
                    'tab-chats': {
                      templateUrl: 'app/chat/chat-detail.html',
                      controller: 'ChatDetailCtrl'
                    }
                  }
                })
            
              .state('tab.account', {
                url: '/account',
                views: {
                  'tab-account': {
                    templateUrl: 'app/account/tab-account.html',
                    controller: 'AccountCtrl'
                  }
                }
              });
            
              // if none of the above states are matched, use this as the fallback
              $urlRouterProvider.otherwise('/tab/dash');
        });
}