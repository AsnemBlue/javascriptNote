// JavaScript source code
Date.prototype.getInterval = function (otherday) {
    if (this > otherday) {
        var intervalMilli = this.getTime() - otherday.getTime();
    } else {
        var intervalMilli = otherday.getTime() - this.getTime();
    }
    var intervalDay = Math.floor(intervalMilli / (1000 * 60 * 60 * 24));
    return intervalDay;
};