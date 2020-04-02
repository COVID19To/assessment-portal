import fetch from "isomorphic-unfetch";

var emptyPatientInfo = {id:-1, number: "***-***-****", queueLength: 0};

var URL_ROOT = "http://localhost:4001"

export async function callNextPatient () {
       console.log("Calling next patient");
       const response = await fetch(URL_ROOT+"/patients?status=WAITING_CALL&_limit=1",
           {
             method: 'GET',
             headers: {
               'Content-Type': 'application/json'
             }
           });
       var patient = await response.json();

       const queueLength = response.headers.get('X-Total-Count');

       if (patient.length == 1) {
         return { patient:patient[0], queueLength: queueLength};
       } else {
         return emptyPatientInfo;
       }
    }

export async function updatePatient(patientInfo) {
       const response = await fetch(URL_ROOT+"/patients/"+patientInfo.phone_number.toString(),
           {
             method: 'PUT',
             headers: {
               'Content-Type': 'application/json'
             },
             body: JSON.stringify(patientInfo)
           });
       var result = await response.json();
     }