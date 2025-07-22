# PollyGlot Translator 🦜

PollyGlot Translator is a simple web application that translates text into French, Spanish, or Japanese using the OpenRouter AI API.

## Features

- Translate text into multiple languages
- Powered by OpenAI's GPT-4o model via OpenRouter API
- Clean and responsive design

## How It Works

1. Enter the text you want to translate.
2. Select a target language (French, Spanish, or Japanese).
3. Click "Translate" to see the result.

## Setup Instructions

1. **Get an API Key**: Sign up at [OpenRouter.ai](https://openrouter.ai/) and generate an API key.
2. **Configure the Key**: Open `config.js` and replace `YOUR_API_KEY_HERE` with your actual API key:
   ```javascript
   export const apiKey = 'your-actual-api-key-here';
   ```
3. Open `index.html` in your browser to start using the app.

## Notes

- An OpenRouter API key is required for the app to work.
- Keep your API key secure and do not share it publicly.

---

**Made with ❤️ by the PollyGlot team**
