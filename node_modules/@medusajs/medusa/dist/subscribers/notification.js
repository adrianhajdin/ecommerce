"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NotificationSubscriber = /** @class */ (function () {
    function NotificationSubscriber(_a) {
        var eventBusService = _a.eventBusService, notificationService = _a.notificationService;
        var _this = this;
        this.onEvent = function (data, eventName) {
            return _this.notificationService_.handleEvent(eventName, data);
        };
        this.notificationService_ = notificationService;
        this.eventBus_ = eventBusService;
        this.eventBus_.subscribe("*", this.onEvent);
    }
    return NotificationSubscriber;
}());
exports.default = NotificationSubscriber;
//# sourceMappingURL=notification.js.map