exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: "Method Not Allowed" }),
        };
    }

    try {
        // Parse the form data
        const formData = event.da;
        console.log('Server Form Data>>>>>>>', formData);

        return {
            statusCode: 200,
            body: JSON.stringify({
                status: 'success',
                message: "Form data received successfully!",
                data: formData,
            }),
        };
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Invalid form data", error: error.message }),
        };
    }
};
