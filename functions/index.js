/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const axios = require("axios");
// const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const {onDocumentCreated} = require("firebase-functions/v2/firestore");

exports.mbwayRequest = onDocumentCreated("ticketBuyer/{id}", (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log("No data associated with the event");
    return;
  }
  const data = snapshot.data();
  logger.info(data, {structuredData: true});
  const options = {
    method: "POST",
    url: "https://clientes.eupago.pt/clientes/rest_api/mbway/create",
    headers: {"accept": "application/json", "content-type": "application/json"},
    data: {
      chave: process.env.EU_PAGO,
      valor: data.total,
      alias: data.phone,
      email: data.email,
      descricao: "Compra de bilhetes Gala Thirst Project",
      contacto: data.phone,
      id: data.id,
    },
  };
  axios.request(options)
      .then((data) => {
        logger.info(data.data, {structuredData: true});
        snapshot.ref.update({
          referenceCreated: true,
          error: false,
        });
      })
      .catch((error) => {
        logger.info(error, {structuredData: true});
      });
});

// exports.multibancoRequest = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   const api = axios.create({
//     baseURL: "https://clientes.eupago.pt",
//     headers: {
//       "Accept": "application/json",
//       "Content-Type": "application/json",
//     },
//   });
//   api.post("/clientes/rest_api/multibanco/create", {
//     chave: process.env.REACT_APP_API_EUPAGO,
//     valor: request.body.total,
//     email: request.body.email,
//     failOver: "1",
//     data_fim: request.body.data_fim,
//     per_dup: 0,
//   })
//       .then((response) => {
//         response.send(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//         response.send(false);
//       });
//   response.send("Hello from Firebase!");
// });
