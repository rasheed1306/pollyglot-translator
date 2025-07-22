const translator = document.querySelector('#translate');
const url = 'https://openrouter.ai/api/v1/chat/completions';
const defaultData = {
    model: 'openai/gpt-4o',
    messages: [{ role: 'user', content: 'What is the meaning of life?' }]
};
const authKey = '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';
const answer = document.querySelector("#translated")

const headers = {
    headers: {
        Authorization: `Bearer ${authKey}`,
        'content-type': 'application/json'
    }
};

async function getResponse(prompt) {
    let data = {
        model: 'openai/gpt-4o',
        messages: [{ role: 'user', content: `${prompt}` }]
    }
    try {
        answer.textContent = "Translating..."
        const response = await axios.post(url, data, headers);
        const message = response.data.choices[0].message.content;
        addResponse(message);
        console.log(message);
    } catch (e) {
        answer.textContent = "Translation failed. Please try again.";
        console.log("Translation failed. Please try again.", e);
    }
}

function addResponse(message) {
    answer.textContent = message;
}

function getPrompt(contents, language) {
    return `I would like you to translate the text '${contents}' in the language '${language}' in the most concise way possible.`;
}

translator.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get input value and validate
    let translateInput = document.querySelector('#translateInput').value.trim();
    if (!translateInput) {
        answer.textContent = "Please enter text to translate";
        return;
    }

    // Get selected language and validate
    let selectedLangElement = document.querySelector('input[name="language"]:checked');
    if (!selectedLangElement) {
        answer.textContent = "Please select a language";
        return;
    }
    let selectedLang = selectedLangElement.id;

    // Create prompt and get response
    let prompt = getPrompt(translateInput, selectedLang);
    getResponse(prompt);
});

