class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
        this.hours = 0;
        this.mins = 0;
        this.secs = 0;
    }
    display() {
        let date = new Date();
        //create 3 variables in one go using array destructuring
        [this.hours, this.mins, this.secs] = [date.getHours(), date.getMinutes(),
        date.getSeconds()];
        if (this.hours < 10) this.hours = '0' + this.hours;
        if (this.mins < 10) this.mins = '0' + this.mins;
        if (this.secs < 10) this.secs = '0' + this.secs;
        console.log(`${this.prefix} ${this.hours}:${this.mins}:${this.secs}`);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}

class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000){
        super(prefix);
        this.precision = precision;
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), this.precision);
    }
}

//const myClock = new PrecisionClock('my clock:')
//myClock.start()

class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '07:00'){
        super(prefix);
        this.wakeupTime = wakeupTime;
    }

    display(){
        super.display();
        let alarmTime = this.wakeupTime.split(':');
        let alarmHour = alarmTime[0];
        let alarmMin = alarmTime[1];
        if(this.hours >= alarmHour && this.mins >= alarmMin){
            this.stop();
            console.log('Wake Up');
        }
    }
}

const myAlarm = new AlarmClock('my alarm:', "16:56");
myAlarm.start();