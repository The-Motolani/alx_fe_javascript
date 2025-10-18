document.addEventListener("DOMContentLoaded", () =>{

    const quoteDisplay = document.getElementById("quoteDisplay");
    const showButton = document.getElementById("newQuote");
    const categoryFilter = document.getElementById("categoryFilter");

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
        {text: "'He who has a why to live can bear almost any how.' - Friedrich Nietzsche", category: "Philosophy"},
        {text: "'Reading furnishes the mind only with materials of knowledge; it is thinking that makes what we read ours' - John Locke" , category: "Philosophy"},
        {text: `"New opinions are always suspected, and usually opposed, without any other reason but because they are not already common." - John Locke`, category: "Philosophy"},
        {text: `"Patience is bitter, but its fruit is sweet." - Aristotle`, category: "Philosophy"},
        {text: `"The educated differ from the uneducated as much as the living differ from the dead" - Aristotle`, category: "Philosophy"},
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
        {text: "The only way to do great work is to love what you do.", category: "Motivation"},
  {text: "In the middle of every difficulty lies opportunity.", category: "Inspiration"},
  {    text: "Do not wait to strike till the iron is hot, but make it hot by striking.", category: "Action"},
  {    text: "Happiness is not something ready made. It comes from your own actions.", category: "Happiness"},
  {    text: "Success usually comes to those who are too busy to be looking for it.", category: "Success"},
  {text: "'Genius is one percent inspiration and ninety-nine percent perspiration.' - Thomas Edison", category: "Action"}, 
  {text: "'You can observe a lot just by watching.' - Yogi Berra",  category: "Patience"}, 
  {text: "'A house divided against itself cannot stand.' - Abraham Lincoln", category: "Leadership"}, 
  {text: "'Difficulties increase the nearer we get to the goal.' - Johann Wolfgang von Goethe", category: "Motivation"}, 
  {text: "'Fate is in your hands and no one elses' - Byron Pulsifer", category: "Inspiration"}, 
  {text: `"Be the chief but never the lord." - Lao Tzu`, category: "Leadership"}, 
{text: `"Nothing happens unless first we dream." - Carl Sandburg`, category: "Motivation"}, 
{text: `"Well begun is half done." - Aristotle`, category:"Philosophy"}, 
{text: `"Life is a learning experience, only if you learn." - Yogi Berra`, category:"Discipline"}, 
{text: `"Self-complacency is fatal to progress." - Margaret Sangster`, category:"Motivation"}, 
{text: `"Peace comes from within. Do not seek it without." - Buddha`, category: "Philosophy"}, 
{text: `"What you give is what you get." - Byron Pulsifer`, category: "Motivation"}, 
{text: `"We can only learn to love by loving." - Iris Murdoch`, category:"Inspiration"}, 
{text: `"Life is change. Growth is optional. Choose wisely." - Karen Clark`, category: "Inspiration"}, 
{text: `"You\'ll see it when you believe it." - Wayne Dyer`, category: "Success"},  
{text: `"To lead people walk behind them." - Lao Tzu`, category: "Leadership"}, 
{text: `"Having nothing, nothing can he lose." - William Shakespeare`, category: "Poets"}, 
{text: `"Trouble is only opportunity in work clothes." - Henry J. Kaiser`, category: ""}, 
{text: `"A rolling stone gathers no moss." - Publilius Syrus`, category: "Motivation"}, 
{text: `"Ideas are the beginning points of all fortunes." - Napoleon Hill`, category: "Motivation"},
 {text: "'Everything in life is luck.' - Donald Trump", categpry: ""},
 {text: "'Doing nothing is better than being busy doing nothing.' - Lao Tzu", category: "Philosophy"}, 
 {text: "'Trust yourself. You know more than you think you do.' - Benjamin Spock", category: "Motivation"}, 
{text: "'Study the past, if you would divine the future.' - Confucius", category: "Philosophy"}, 
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

            const select = document.getElementById("all");
        const categoryExists = Array.from(select.options).some(
            (option) => option.value.toLowerCase() === newCategory.toLowerCase()
        );

        // If it's a new category, add it to the dropdown
        if (!categoryExists) {
            const newOption = document.createElement("option");
            newOption.value = newCategory;
            newOption.textContent = newCategory;
            select.appendChild(newOption);

            // Update categories list in localStorage
            const savedCategories = JSON.parse(localStorage.getItem("savedCategories")) || [];
            savedCategories.push(newCategory);
            localStorage.setItem("savedCategories", JSON.stringify(savedCategories));
        }

        // Save last selected category as the new one
        localStorage.setItem("lastSelectedCategory", newCategory);
        select.value = newCategory;

        // Refresh displayed quotes
        filterQuotes(newCategory);

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

        const fileReader = new FileReader();
        fileReader.onload = function(event) {
            try {
                const importedQuotes = JSON.parse(event.target.result);
                quotes = importedQuotes;
                localStorage.setItem("quotes", JSON.stringify(quotes));
                alert("Quotes imported successfully!");
            } catch {
                alert("Invalid JSON file");
            }
        };
        fileReader.readAsText(file);
    }

    const lastQuote = sessionStorage.getItem("lastViewedQuote");
    if (lastQuote) {
        quoteDisplay.textContent = `Last viewed: ${lastQuote}`;
    }


    function populateCategories() {
       const select = document.getElementById("categoryFilter");
        select.innerHTML = `<option value="All">All</option>`;

         // Load quotes and categories from localStorage
    const storedQuotes = JSON.parse(localStorage.getItem("quotes")) || quotes;

        // Get all unique categories from the quotes array
    const uniqueCategories = [...new Set(quotes.map(quote => quote.category))];
        uniqueCategories.forEach(category => {
             if (category && category.trim() !== "") {
           const option = document.createElement("option")
                
            option.value = category;
        option.textContent = category;
        select.appendChild(option);
             }
    });

     const savedCategory = localStorage.getItem("lastSelectedCategory") || "All";
        select.value = savedCategory;
        filterQuotes(savedCategory);
    

         select.addEventListener("change", (event) => {
        filterQuotes(event.target.value);
    });

    // Append the dropdown to the page
    allCategories.appendChild(select);
        };

        function filterQuotes(selectedCategory) {
             const select = document.getElementById("categoryFilter");
  const category = selectedCategory || select.value;

            localStorage.setItem("lastSelectedCategory", selectedCategory);

            let filteredQuotes =
    category === "all"
      ? quotes
      : quotes.filter((quote) => quote.category === category);

   if (selectedCategory === "All") {
        filteredQuotes = quotes; // Show all quotes
    } else {
        filteredQuotes = quotes.filter(quote => quote.category === selectedCategory);
    } 

    // Show a random quote from the filtered list
    if (filteredQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        const randomQuote = filteredQuotes[randomIndex];
        quoteDisplay.textContent = randomQuote.text;
    } else {
        quoteDisplay.textContent = "No quotes found in this category.";
    }
        };

    populateCategories();
    createAddQuoteForm();
    showButton.addEventListener("click", showRandomQuote);
    
});
