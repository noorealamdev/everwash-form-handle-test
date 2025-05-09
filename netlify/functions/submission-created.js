exports.handler = async (event) => {
    const payload = JSON.parse(event.body);
    console.log("New Submission:", payloadData.data);
    
    // You can process the data here (save to DB, send emails, etc.)

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Submission received!" }),
    };
};
