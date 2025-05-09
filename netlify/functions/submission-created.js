exports.handler = async (event) => {
    const submissionData = JSON.parse(event.body);
    console.log("New Submission:", submissionData);
    
    // You can process the data here (save to DB, send emails, etc.)

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Submission received!" }),
    };
};
