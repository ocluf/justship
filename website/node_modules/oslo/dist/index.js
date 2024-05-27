export class TimeSpan {
    constructor(value, unit) {
        this.value = value;
        this.unit = unit;
    }
    value;
    unit;
    milliseconds() {
        if (this.unit === "ms") {
            return this.value;
        }
        if (this.unit === "s") {
            return this.value * 1000;
        }
        if (this.unit === "m") {
            return this.value * 1000 * 60;
        }
        if (this.unit === "h") {
            return this.value * 1000 * 60 * 60;
        }
        if (this.unit === "d") {
            return this.value * 1000 * 60 * 60 * 24;
        }
        return this.value * 1000 * 60 * 60 * 24 * 7;
    }
    seconds() {
        return this.milliseconds() / 1000;
    }
    transform(x) {
        return new TimeSpan(Math.round(this.milliseconds() * x), "ms");
    }
}
export function isWithinExpirationDate(date) {
    return Date.now() < date.getTime();
}
export function createDate(timeSpan) {
    return new Date(Date.now() + timeSpan.milliseconds());
}
