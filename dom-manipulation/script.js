document.addEventListener("DOMContentLoaded", () =>{

    const quoteDisplay = document.getElementById("quoteDisplay");
    const showButton = document.getElementById("newQuote");
    /*
    const newQuoteText = document.getElementById("newQuoteText");
    const newQuoteCategory = document.getElementById("newQuoteCategory");
    const addButton = document.getElementById("addQuoteButton");
    */

    let quotes = JSON.parse(localStorage.getItem("quotes")) || [
        {text: "'Formal education will make you a living; self-education will make you a fortune.' - Jim Rohn", category: "Discipline"},
        {text: '"I do love nothing in the world so well as you." - William Shakespeare', category: "Poets"},
        {text: '"Love looks not with the eyes, but with the mind and therefore is winged Cupid painted blind" - William Shakespeare', category: "Poets"},
        {text:  '"The wound is the place where the light enters you." - Rumi', category: "Poets"},
        {text:  '"Be like a tree and let the dead leaves drop." - Rumi', category: "Poets"},
        {text:  '"Outstanding leaders go out of their way to boost the self-esteem of their personnel. If people believe in themselves, it’s amazing what they can accomplish." - Sam Walton', category: "Poets"},
        {text:  '"Nothing else can quite substitute for a few well-chosen, well-timed, sincere words of praise. They\'re absolutely free and worth a fortune." - Sam Walton', category: "Poets"},
        {text:  '"With life as short as a half-taken breath, don\'t plant anything but love." - Rumi', category: "Poets"},
        {text: '"All the world\'s a stage, and all the men and women merely players." - William Shakespeare', category: "Poets"},
        {text:  '"Those who dare to fail miserably can achieve greatly" - John F Kennedy', category: "Leadership"},
        {text: '"A man does what he must in spite of personal consequences, in spite of obstacles and dangers and pressures and that is the basis of all human morality" - John F Kennedy', category: "Leadership"},
        {text: `"It\'s not bragging if you can back it up." - Muhammad Ali`, category: "Success"},
        {text: `"If my mind can conceive it, and my heart can believe it, then I can achieve it." - Muhammad Ali`, category: "Success"},
        {text: `"Build a life you don\'t need a vacation from." - Luke Belmar`, category: "Inspiration"},
        {text: `"Never say never, because limits, like fears, are often just an illusion." - Michael Jordan`, category: "Inspiration"},
        {text: `"To learn to succeed, you must first learn to fail.” - Michael Jordan`, category: "Inspiration"},
        {text: `"To live is to suffer, to survive is to find some meaning in the suffering." - Friedrich Nietzsche`, category: "Philosophy"},
        {text: "'He who has a why to live can bear almost any how.' - Friedrich Nietzsche", category: "Philosopy"},
        {text: "'Reading furnishes the mind only with materials of knowledge; it is thinking that makes what we read ours' - John Locke" , category: "Philosopy"},
        {text: `"New opinions are always suspected, and usually opposed, without any other reason but because they are not already common." - John Locke`, category: "Philosopy"},
        {text: `"Patience is bitter, but its fruit is sweet." - Aristotle`, category: "Philosopy"},
        {text: `"The educated differ from the uneducated as much as the living differ from the dead" - Aristotle`, category: "Philosopy"},
        {text: `“The more you know, the more you realize you don\'t know." - Aristotle`, category: "Philosophy"},
        {text: `"Happiness depends upon ourselves." - Aristotle`, category: "Philosophy"},
        {text: `"I think it is possible for ordinary people to choose to be extraordinary" - Elon Musk`, category: "Motivation"},
        {text: "'“Any product that needs a manual to work is broken.”' -  Elon Musk", category: "Business"},
        {text: "'“If something\'s important enough, you should try. Even if the probable outcome is failure.”' -  Elon Musk", category: "Business"},
        {text: "Success is nothing more than a few simple disciplines, practiced every day. - Jim Rohn", category: "Motivation"},
        {text: "'Embrace what you don\'t know, especially in the beginning, because what you don\'t know can become your greatest asset.' - Sara Blakely", category: "Business"},
        {text: "'Failure is not the outcome, failure is not trying. Don\'t be afraid to fail.' - Sara Blakely", category: "Business"},
        {text: "'Discipline equals freedom.' - Jocko Willink", category: "Discipline"},
        {text: "'If you are not willing to risk the unusual, you will have to settle for the ordinary.' - Jim Rohn", category: "Motivation"},
    ];

    function showRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        // display the quote
        quoteDisplay.innerHTML = randomQuote.text;
        // show your last viewed quote
        sessionStorage.setItem("lastViewedQuote", randomQuote.text);
    };

    
    function createAddQuoteForm() {
        // Create the container for the form
        const formContainer = document.createElement("div");

        // Create input fields
        const quoteInput = document.createElement("input");
        quoteInput.id = "newQuoteText";
        quoteInput.placeholder = "Enter a new quote";

        const categoryInput = document.createElement("input");
        categoryInput.id = "newQuoteCategory";
        categoryInput.placeholder = "Enter quote category";

        // Create Add button
        const addButton = document.createElement("button");
        addButton.textContent = "Add Quote";

        function addQuote() {
        const newText = quoteInput.value.trim();
        const newCategory = categoryInput.value.trim();

        if (newText !== "" && newCategory !== "") {
            // Push a new quote object into the array
            quotes.push({ text: newText, category: newCategory });
            
            localStorage.setItem("quotes", JSON.stringify(quotes));

        // Give user feedback
            alert("Quote added successfully!");

            // Clear the input fields
            quoteInput.value = "";
            categoryInput.value = "";

        //Display new quote
        quoteDisplay.textContent = newText;

        } else {
            alert("Please enter a quote and its category");
        }
    };


        addButton.addEventListener("click", addQuote);

         const exportButton = document.getElementById("exportBtn");
        exportButton.addEventListener("click", exportToJsonFile);

         const importInput = document.getElementById("inputFile");
        importInput.accept = "application/json";
        importInput.addEventListener("change", importFromJsonFile);

    // Append elements to the form container
        formContainer.appendChild(quoteInput);
        formContainer.appendChild(categoryInput);
        formContainer.appendChild(addButton);

        // Append the form to the body (or another element)
        document.body.appendChild(formContainer);
    };

    /* function addQuote() {
        const newText = quoteInput.value.trim();
        const newCategory = categoryInput.value.trim();

        if (newText !== "" && newCategory !== "") {
            // Push a new quote object into the array
            quotes.push({ text: newText, category: newCategory });
            
            localStorage.setItem("quotes", JSON.stringify(quotes));

        // Give user feedback
            alert("Quote added successfully!");

            // Clear the input fields
            quoteInput.value = "";
            categoryInput.value = "";

        //Display new quote
        quoteDisplay.textContent = newText;

        } else {
            alert("Please enter a quote and its category");
        }
    }; */

     function exportToJsonFile() {
         const quotes = JSON.parse(localStorage.getItem("quotes")) || [];
        const data = JSON.stringify(quotes, null, 2);
        const blob = new Blob([data], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "quotes.json";
        a.click();

        URL.revokeObjectURL(url);
    }

    function importFromJsonFile(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const importedQuotes = JSON.parse(e.target.result);
                quotes = importedQuotes;
                localStorage.setItem("quotes", JSON.stringify(quotes));
                alert("Quotes imported successfully!");
            } catch {
                alert("Invalid JSON file");
            }
        };
        reader.readAsText(file);
    }

    const lastQuote = sessionStorage.getItem("lastViewedQuote");
    if (lastQuote) {
        quoteDisplay.textContent = `Last viewed: ${lastQuote}`;
    }

    createAddQuoteForm()
    showButton.addEventListener("click", showRandomQuote);
    
});
