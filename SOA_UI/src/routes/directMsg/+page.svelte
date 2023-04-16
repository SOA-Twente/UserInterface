<svelte:head>

</svelte:head>
<script>
    let initiator = 'yunfeng@hotmail.nl'; // set the initiator value
    let receiver = 'yunfeng@hotmail.nl'; // set the receiver value
    let convoID = 1; // set the convoID value

    const fetchConversation = async () => {
        try {
            const producerURL = 'http://localhost:8088/getConvo';
            const response = await fetch(producerURL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'initiator': initiator,
                    'receiver': receiver,
                    'conversationID': convoID
                }
            });
            if (response.ok) {
                // handle successful response
                const correlationID = await response.text();
                console.log('correlation-id:', correlationID);

                // Establish WebSocket connection with the correlation ID
                const socket = new WebSocket(`ws://localhost:8089/directMsg/websocket/${correlationID}`);

                // Add event listener for WebSocket message received
                socket.addEventListener('message', (event) => {
                    // WebSocket message received
                    console.log('WebSocket message received:', event);

                    // Get the received message from the event object
                    const receivedMessage = event.data;

                    // Check if the received message starts with "Confirmation"
                    if (receivedMessage.startsWith("Confirmation")) {
                        // Close the WebSocket session
                        socket.send("received")
                    }
                });

                // Add event listener for WebSocket connection closed
                socket.addEventListener('close', (event) => {
                    // WebSocket connection closed
                    console.log('WebSocket connection closed:', event);
                    // You can handle the WebSocket closure here, e.g., attempt to reconnect
                });
            } else {
                // handle error response
                console.error('Failed to get conversation:', response.status);
            }
        } catch (error) {
            // handle fetch error
            console.error('Failed to fetch:', error);
        }
    };
</script>

<button on:click={fetchConversation}>Fetch Conversation</button>


<!--Add html here-->