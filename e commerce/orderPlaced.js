// Function to handle order confirmation logic
function handleOrderConfirmation() {
    // Mock order details
    let orderDetails = {
        orderId: Math.floor(Math.random() * 10000),
        amount: document.getElementById('toth4').textContent.replace('Amount: Rs ', ''),
        timestamp: new Date().toISOString()
    };

    // Send order details to the server
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('POST', 'https://5d76bf96515d1a0014085cf9.mockapi.io/order', true);
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(JSON.stringify(orderDetails));

    // Optionally, handle response or errors
    httpRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 201) {
            console.log('Order placed successfully');
            // You can also handle response data if needed
        } else if (this.readyState === 4) {
            console.log('Error placing order');
        }
    };
}

// Call the function to handle order confirmation when the page loads
document.addEventListener('DOMContentLoaded', handleOrderConfirmation);
