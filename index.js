const translator = document.querySelector('#translate');
const url = 'https://openrouter.ai/api/v1/chat/completions';
const authKey = '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';
const answer = document.querySelector("#translated");
const step1 = document.querySelectorAll(".step-1");
const step2 = document.querySelectorAll(".step-2");

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

function toggle(elements) {
    elements.forEach(element => {
        element.classList.toggle('hidden');
    });
}

function toggleVisibility() {
    toggle(step1);
    toggle(step2);
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

    // Toggle to step 2 to show results
    toggleVisibility();
});

// Add reset functionality
const resetButton = document.querySelector('#reset-button');
if (resetButton) {
    resetButton.addEventListener('click', () => {
        // Clear form inputs
        document.querySelector('#translateInput').value = '';

        // Uncheck all radio buttons
        document.querySelectorAll('input[name="language"]').forEach(radio => {
            radio.checked = false;
        });

        // Clear translation result
        answer.textContent = 'Translated To';

        // Toggle back to step 1
        toggleVisibility();
    });
}

