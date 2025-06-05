// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCbWyVqhZdWL5tGF5Y2YXRpY5PJLC0ee6M",
  authDomain: "elibrarylogin-3d7e6.firebaseapp.com",
  projectId: "elibrarylogin-3d7e6",
  storageBucket: "elibrarylogin-3d7e6.appspot.com",
  messagingSenderId: "872832392728",
  appId: "1:872832392728:web:10489984713141407ded6d"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Chatbot functionality
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');

chatbotSend.addEventListener('click', async () => {
  const userMessage = chatbotInput.value.trim();
  if (!userMessage) return;

  // Display user message
  const userMessageDiv = document.createElement('div');
  userMessageDiv.textContent = userMessage;
  userMessageDiv.style.cssText = 'margin: 5px 0; padding: 10px; background: #e2e8f0; border-radius: 5px; align-self: flex-end;';
  chatbotMessages.appendChild(userMessageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

  chatbotInput.value = '';

  // Display bot typing indicator
  const botTypingDiv = document.createElement('div');
  botTypingDiv.textContent = 'Typing...';
  botTypingDiv.style.cssText = 'margin: 5px 0; padding: 10px; background: #f8fafc; border-radius: 5px; align-self: flex-start; color: #64748b;';
  chatbotMessages.appendChild(botTypingDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

  try {
    // Remove typing indicator
    botTypingDiv.remove();

    const noResultsDiv = document.createElement('div');
    noResultsDiv.textContent = 'The book chatbot feature has been disabled.';
    noResultsDiv.style.cssText = 'margin: 5px 0; padding: 10px; background: #f8fafc; border-radius: 5px; align-self: flex-start; color: #64748b;';
    chatbotMessages.appendChild(noResultsDiv);
  } catch (error) {
    console.error('Error:', error);
    botTypingDiv.remove();
    const errorDiv = document.createElement('div');
    errorDiv.textContent = 'Sorry, something went wrong. Please try again later.';
    errorDiv.style.cssText = 'margin: 5px 0; padding: 10px; background: #fee2e2; border-radius: 5px; align-self: flex-start; color: #991b1b;';
    chatbotMessages.appendChild(errorDiv);
  }

  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
});