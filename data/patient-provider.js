import fetch from "isomorphic-unfetch";

var emptyPatientInfo = {id:-1, number: "***-***-****", queueLength: 0};

var URL_ROOT = "http://localhost:4001"

export async function callNextPatient () {
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
         patient[0].status = "PICKED";
         patient[0].picked_time =  new Date();
         await updatePatient(patient[0]);
         return { patient:patient[0], queueLength: queueLength};
       } else {
         return emptyPatientInfo;
       }
    }

export async function updatePatient(currentPatientInfo) {
       const response = await fetch(URL_ROOT+"/patients/"+currentPatientInfo.phone_number.toString(),
           {
             method: 'PUT',
             headers: {
               'Content-Type': 'application/json'
             },
             body: JSON.stringify(currentPatientInfo)
           });
       var result = await response.json();
     }