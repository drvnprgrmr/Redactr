function startApp() {
    const redact = document.getElementById("redact");
    redact.addEventListener("click", () => {
        // Get the sentence and the word to redact.
        const msg = document.getElementById("msg").value
        const word = document.getElementById("word").value
        console.log(msg, word)

        const result = document.getElementById("result")


        // Replace each occurence of `word` with ***
        const redactedMsg = msg.replaceAll(word, '***')
        result.value  = redactedMsg

        console.log(msg, result.value)
    });

}


// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //
