class Telephone {
    constructor() {
      this.phoneNumbers = [];
      this.observers = [];
    }
  
    addPhoneNumber(number) {
      this.phoneNumbers.push(number);
    }
  
    removePhoneNumber(number) {
      this.phoneNumbers = this.phoneNumbers.filter(n => n !== number);
    }
  
    dialPhoneNumber(number) {
      if (!this.phoneNumbers.includes(number)) {
        throw new Error('Invalid phone number');
      }
      this.observers.forEach(observer => observer.onDial(number));
    }

    displayNumber(number){
      console.log(number);
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      this.observers = this.observers.filter(o => o !== observer);
    }
  }

  
  class Observer {

    onDial(number) {
      console.log(`Now dailing ${number}`);
    }
  }

  
const phone = new Telephone();

phone.addPhoneNumber('234878786776');


const observer = new Observer();
phone.addObserver(observer);

phone.displayNumber('234878786776');
phone.dialPhoneNumber('234878786776');

