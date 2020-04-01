import fetch from "isomorphic-unfetch";
import { useEffect } from "react";
import Router from "next/router";
import nextCookie from "next-cookies";
import cookie from "js-cookie";

var emptyPatientInfo = {id:-1, number: "***-***-****", queueLength: 0};


export async function callNextPatient () {
       const response = await fetch("http://localhost:4001/patients?status=WAITING_CALL&_limit=1",
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
         return { patient:patient[0], queueLength: queueLength};
       } else {
         return emptyPatientInfo;
       }
    }

export async function handleCurrentPatient(currentPatientInfo) {
       currentPatientInfo.handled_time =  new Date();
       const response = await fetch("http://localhost:4001/patients/"+currentPatientInfo.id.toString(),
           {
             method: 'PUT',
             headers: {
               'Content-Type': 'application/json'
             },
             body: JSON.stringify(currentPatientInfo)
           });
       var result = await response.json();
     }