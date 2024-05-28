class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleQuery = async (query) => {
      try {
        console.log("Sending query to the server:", query);
        const response = await fetch('https://c3d1-105-154-27-232.ngrok-free.app/query', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });
  
        console.log("Response received from the server:", response);
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json();
  
        const message = this.createChatBotMessage(data.response.join('\n'));
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      } catch (error) {
        console.error('Error fetching answer:', error);
        const errorMessage = this.createChatBotMessage("Sorry, there was an error connecting to the server.");
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, errorMessage],
        }));
      }
    };
  }
  
  export default ActionProvider;
  