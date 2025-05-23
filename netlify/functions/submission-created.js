// Capture verified submission form data and send it to multiple locations 
exports.handler = async (event) => {
  const formData = JSON.parse(event.body).payload;
  const { data } = formData;
  const postData = {
    formName: data.formName.trim(),
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    carWashName: data.carWashName,
    washType: data.washType,
    carWashState: data.carWashState,
    carWashZipcode: data.carWashZipcode,
  }
  console.log("New Submission:", postData);
  /*
  Output data
  New Submission: {
    formName: 'Book A Call 2025',
    firstName: 'Desirae',
    lastName: 'Mooney',
    email: 'lygurisas@mailinator.com',
    phone: '18824139856',
    carWashName: 'Breanna Valentine',
    washType: 'Tunnel',
    carWashState: 'Iowa',
    carWashZipcode: '65776'
  }
*/
  
  // Get correct endpoint based on the form name
  let endpoint = "";
  switch (data.formName.trim()) {
    case "Book A Call 2025":
        //endpoint = "http://go.everwash.com/l/996891/2025-04-24/3hbd2";
        endpoint = "https://pixiwebdesign.com/api.php";
        break;
    case "Case Study":
        endpoint = "https://go.everwash.com/l/996891/2024-03-18/26ddb";
        break;
    default:
        endpoint = "http://go.everwash.com/l/996891/2025-04-24/3hbd2";
  }


  // Now process the data here (save to DB, send emails, APIs etc.)
  await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(postData),
  }).then(response => response.json())
    .then(data => {
      //console.log(data);
      if(data.status === 'success') {
        console.log('Form data has been sent successfully.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
  });
};
