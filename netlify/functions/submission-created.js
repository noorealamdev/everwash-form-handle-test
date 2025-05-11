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

  // Api endpoints to send data based on form name
  const apis = [
    {name: "Book a Call", api: "http://go.everwash.com/l/996891/2025-04-24/3hbd2"},
    {name: "Case Study", api: "https://go.everwash.com/l/996891/2024-03-18/26ddb"}
  ]

  // Get api by form name function
  function getApiByFormName(formName) {
    const result = apis.find(api => api.name === formName);
    return result ? result.api : "Form not found";
  }


  // Now process the data here (save to DB, send emails, APIs etc.)
  await fetch('https://pixiwebdesign.com/api.php', {
    method: 'POST',
    body: JSON.stringify(postData),
  }).then(response => response.json())
    .then(data => {
      //console.log(data);
      if(data.status === 'success') {
        console.log('Form data submitted successfully.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Submission received!" }),
  };
};
