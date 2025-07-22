import axios from 'axios';
const AuthorisationKey = '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'
const data = {
    model: 'openai/gpt-4o',
    messages: [{ role: 'user', content: 'What is the meaning of life?' }]
};
const headers = {
    headers: {
        Authorization: `Bearer ${AuthorisationKey}`,
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