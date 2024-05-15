const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map() //an empty map to begin with
phoneBookDEF.set('Derek', '0412312724')
phoneBookDEF.set('Eli', '0235221218')
phoneBookDEF.set('Freddy', '0275261172')

phoneBookABC.set('Caroline', '0214731634')

function printPhoneBook(contacts){
    for(let contact of contacts){
        console.log(contact[0] + " : " + contact[1])
    }
}

//printPhoneBook(phoneBookABC);

const phoneBook = [...phoneBookABC, ...phoneBookDEF];

printPhoneBook(phoneBook);