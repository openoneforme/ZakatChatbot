messages = [];

function getAIResponse(input) {
    let msg1 = { name: "User", message: input }
    messages.push(msg1);

    fetch($SCRIPT_ROOT + '/predict', {
        method: 'POST',
        body: JSON.stringify({ message: input}),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(r => r.json())
    .then(r => {
        //console.log(r.answer)
        let botHtml = '<p class="botText"><span>' + r.answer + '</span></p>';
        $("#chatbox").append(botHtml);

        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        //let msg2 = { name: "Sam", message: r.answer};
        //console.log(msg2['message']);
        //messages.push(msg2['message']);
        //return msg2['message'];
        // updateChatText()
        // textField.value = ''

    }).catch((error) => {
        console.error('Error:', error);
        //updateChatText()
        textField.value = ''
    });
}