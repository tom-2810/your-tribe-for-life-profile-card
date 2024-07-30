export async function handler(event, context) {
    // This function will be triggered when a form submission is verified
  
    // The form data is included in the event body
    const formData = JSON.parse(event.body).payload;
  
    
    // You can add your own custom logic here...
  
  
    // The function should return a response
    return {
      statusCode: 200,
      body: "Form submission received",
    };
  }