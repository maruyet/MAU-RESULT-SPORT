function doGet() {
  return HtmlService.createHtmlOutputFromFile("index");
}

function getResultByRoll(rollNo) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][1]).trim() === String(rollNo).trim()) {
      return data[i].slice(0, 11); // Return up to "Ball" column
    }
  }
  return null;
}
