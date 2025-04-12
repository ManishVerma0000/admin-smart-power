// src/data/messages.ts
export interface Message {
    id: number;
    text: string;
    sender: 'me' | 'other';
  }
  
  const messages: Message[] = [
    { id: 1, text: 'Hey there!', sender: 'other' },
    { id: 2, text: 'Hello! How are you?', sender: 'me' },
    { id: 3, text: "I'm good. You?", sender: 'other' },
  ];
  
  export default messages;
  