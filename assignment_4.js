/*
Problem ====> 1 
*/

function radianToDegree(radian) {


    if (typeof radian != 'number') {
        return "Inter valid value"
    }
    else {
        const convertedDegree = (radian * 57.2958).toFixed(2);
        // console.log(convertedDegree);
        return parseFloat(convertedDegree);
    }


}

console.log(radianToDegree(66));


//-------------------------------------------------------------//



/*
Problem ====> 2
*/

function isJavaScriptFile(file) {


    if (typeof file != "string") {
        return 'Inter valid value';
    }

    else if (file.includes('.js') && file.endsWith('.js')) {
        const fileType = file.includes('js');
        // console.log(fileType);
        return fileType;
    }

    else {
        return false;
    }


}


console.log(isJavaScriptFile('app.js.pdf'));

//-------------------------------------------------------------//



/*
Problem ====> 3
*/

function oilPrice(diesel, petrol, octen) {

    if (typeof diesel != 'number' || typeof petrol != 'number' || typeof octen != 'number') {
        return 'Inter valid value';
    }
    else {
        const dieselPrice = diesel * 114;
        const petrolPrice = petrol * 130;
        const octenPrice = octen * 135;

        const totalCosting = dieselPrice + petrolPrice + octenPrice;
        // console.log(totalCosting);
        return totalCosting;
    }

}
console.log(oilPrice(3, 6, 8));


//-------------------------------------------------------------//



/*
Problem ====> 4
*/

function publicBusFare(totalPeople) {

    if (typeof totalPeople != 'number') {
        return 'Inter valid value';
    }
    else {

        if (totalPeople > 0) {
            const microPassenger = totalPeople % 50;
            const publicBusPassenger = microPassenger % 11;
            const ticketPrice = 250;
            const costOfPublicBusFare = ticketPrice * publicBusPassenger;

            // console.log(costOfPublicBusFare);
            return costOfPublicBusFare;
        }
        else {
            return 0;
        }

    }


}
console.log(publicBusFare(765));


//-------------------------------------------------------------//



/*
Problem ====> 5
*/

function isBestFriend(obj_1, obj_2) {
    if (typeof obj_1 != 'object' || typeof obj_2 != 'object') {
        return 'Inter valid value';
    }
    else {
        if (obj_1.name === obj_2.friend && obj_1.friend === obj_2.name) {
            return true;
        }
        else {
            return false;
        }
    }

}

const obj_1 = { name: 'Jabir', friend: 'Nazrul' };
const obj_2 = { name: 'Parosh', friend: 'Jabir' };

console.log(isBestFriend(obj_1, obj_2));