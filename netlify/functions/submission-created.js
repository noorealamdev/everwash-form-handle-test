exports.handler = async (event) => {
    const formData = JSON.parse(event.body).payload;
    const { data } = formData;
    console.log("New Submission:", data);
    
    // You can process the data here (save to DB, send emails, etc.)

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Submission received!" }),
    };
};
