export default defineEventHandler(async (event) => {
    // Get the data from the POST request body
    const body = await readBody(event);
    console.log(body);
    
  });