document.getElementById('humanizeButton').addEventListener('click', async () => {
    const inputText = document.getElementById('inputText').value;
    const outputTextArea = document.getElementById('outputText');

    // Replace with your actual API endpoint
    const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'AIzaSyAu9E7iRZShRKc6NuK6oviV5nH37QZ1GoE' // If required
            },
            body: JSON.stringify({ text: inputText })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        outputTextArea.value = data.humanizedText; // Adjust based on your API response structure
    } catch (error) {
        console.error('Error:', error);
        outputTextArea.value = 'An error occurred while processing your request.';
    }
});