import axios from 'axios';

const data = {
    model: 'openai/gpt-4o',
    messages: [{ role: 'user', content: 'What is the meaning of life?' }]
};
const headers = {
    headers: {
        Authorization: 'Bearer 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',
        'content-type': 'application/json'
    }
}
    ;

const url = 'https://openrouter.ai/api/v1/chat/completions';

async function getResponse() {
    try {
        const response = await axios.post(url, data, headers);
        console.log(response.data.choices[0].message.content);
    } catch (e) {
        console.log("Response is not retrieved", e);
    }

}


getResponse();