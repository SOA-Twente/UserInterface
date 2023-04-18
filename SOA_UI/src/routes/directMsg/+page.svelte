<svelte:head>

</svelte:head>
<script>

    // to store the received messages in
    let messages = [];

    let initiator = 'yunfeng@hotmail.nl'; // set the initiator value
    let receiver = 'yunfeng@hotmail.nl'; // set the receiver value
    let convoID = 1; // set the convoID value

    const createConversation = async () => {
        try {
            const producerURL = 'http://localhost:8088/createConvo';
            const response = await fetch(producerURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'initiator': 'sender1',
                    'receiver': 'receiver1'
                })
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
                        socket.send("received");
                        socket.close();
                    }

                    console.log(receivedMessage)
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


    }

    const fetchConversation = async () => {
        try {
            const producerURL = 'http://localhost:8088/getConvo';
            const response = await fetch(producerURL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'initiator': 'sender1',
                    'receiver': 'receiver1',
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
                        socket.send("received");
                        socket.close();
                    }

                    // remove the "Confirmation:" before parsing
                    const jsonMessage = receivedMessage.substring("Confirmation:".length);
                    messages = JSON.parse(jsonMessage);
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

    const sendMessage = async () => {
        try {
            const producerURL = 'http://localhost:8088/sendMsg';
            const response = await fetch(producerURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'sender': 'sender1',
                    'receiver': 'receiver1',
                    'message':'test1'
                })
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
                        socket.send("received");
                        socket.close();
                    }

                    console.log(receivedMessage)
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
        }}
</script>

<button on:click={fetchConversation}>Fetch Conversation</button>
<button on:click={createConversation}>Create Conversation</button>
<button on:click={sendMessage}>Send Message</button>


<!--Add html here-->
{#if messages.length === 0}
    <p>No conversations to display.</p>
{:else}
    {#each messages as message}
        <h2>Conversation {message.convoID}</h2>
        {#each message.messages.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)) as message}
            <div>
                <p>{message.sender}: {message.message}</p>
                <p>Created at: {message.createdAt}</p>
            </div>
        {/each}
    {/each}
{/if}