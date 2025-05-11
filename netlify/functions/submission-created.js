// Capture verified submission form data and send it to multiple locations 
exports.handler = async (event) => {
  const formData = JSON.parse(event.body).payload;
  const { data } = formData;
  //console.log("New Submission:", data);
  const postData = {
    formName: data.formName,
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
  

  // Now process the data here (save to DB, send emails, APIs etc.)
  await fetch('https://pixiwebdesign.com/api.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  })
    .then(response => response.json())
    .then(responseData => {
      console.log('Success:', responseData);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Submission received!" }),
  };
};
