var Chance = require('chance');

function from_us_to_canadian_phone_number_format(phone_number){
        if (phone_number){
            return phone_number.replace("(","").replace(")","").replace(" ","-");
        }else{
            return phone_number
        }
    }

module.exports = () => {

    var chance = new Chance();
    const data = { patients: [] };
    // Create 1000 users
    var randomQueueLength = 1000 + parseInt(Math.random()*1000);
    for (let i = 1; i <= randomQueueLength; i++) {
          var us_random_phone_number = chance.phone({ country: "us" });
          var canadian_random_phone_number = from_us_to_canadian_phone_number_format(us_random_phone_number);
          var patient = {
                "phone_number": from_us_to_canadian_phone_number_format(canadian_random_phone_number),
                "status": "WAITING_CALL",
                "name":chance.name(),
                "insertion_time":new Date(Date.now() - 1000*60*60*i)
            };
          data.patients.push(patient);
    }
    data.patients = data.patients.reverse(); //to simulate queue wrt the insertion time
    return data
}