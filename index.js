const { google } = require('googleapis')
const fs = require('fs');
const sheets = google.sheets('v4');
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
async function getAuthToken() {

  const credentialJSON = fs.readFileSync('./credentials.json');
  const credentials = JSON.parse(credentialJSON);

  const auth = new google.auth.GoogleAuth({
    scopes: SCOPES,
    credentials,
  });
  try {
    
    const authToken = await auth.getClient();
    return authToken;
  }
  catch(err) { console.log('error', err)}

}

async function getSpreadSheet({spreadsheetId, auth}) {
  const res = await sheets.spreadsheets.get({
    spreadsheetId,
    auth,
  });
  return res;
}

async function getSpreadSheetValues({spreadsheetId, auth, sheetName}) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    auth,
    range: sheetName
  });
  return res;
}


module.exports = {
  getAuthToken,
  getSpreadSheet,
  getSpreadSheetValues
}


//export GCLOUD_PROJECT=104970386160730214773
//export GOOGLE_APPLICATION_CREDENTIALS=~/dev/morningBid/credentials.json
