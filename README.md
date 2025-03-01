# Personal Meet - Premium Video Conference App

A high-quality video conferencing application similar to Google Meet, built with React, TypeScript, and WebRTC.

![Personal Meet Home Screen](https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)

## ✨ Features

- **Instant Meeting Creation**: Generate unique meeting IDs with one click
- **Easy Sharing**: Copy and share meeting links with anyone
- **HD Video & Audio**: Crystal clear communication with optimized media settings
- **Screen Sharing**: Present your screen to all participants
- **Real-time Chat**: Send messages to everyone in the meeting
- **Participant Management**: See who's in the meeting with audio/video status
- **Responsive Design**: Works beautifully on desktop and mobile devices
- **No Time Limits**: Meet as long as you need
- **No Account Required**: Just enter your name and join

![Meeting Interface](https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)

## 🚀 Technologies Used

- **React 18** with TypeScript
- **WebRTC** (via PeerJS) for peer-to-peer communication
- **Firebase Realtime Database** for signaling and chat
- **React Router** for navigation
- **Tailwind CSS** for beautiful, responsive UI
- **Lucide React** for modern, customizable icons

## 🛠️ Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/kumaryash-24/Video_Conference.git
cd Video_Conference
```

2. Install dependencies
```bash
npm install
```

3. Create a Firebase project
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Realtime Database
   - Set up authentication (if needed)
   - Copy your Firebase configuration

4. Update Firebase configuration
   - Open `src/firebase.ts`
   - Replace the placeholder config with your Firebase project details

5. Start the development server
```bash
npm run dev
```

## 📱 Usage Guide

### Creating a Meeting

1. Open the application in your browser
2. Enter your name
3. Click "New Meeting"
4. Allow camera and microphone permissions when prompted
5. Your meeting will start immediately

### Joining a Meeting

1. Get the meeting ID or link from the meeting creator
2. Open the application in your browser
3. Enter your name
4. Enter the meeting ID or use the full link
5. Click "Join Meeting"
6. Allow camera and microphone permissions when prompted

### During the Meeting

- Use the controls at the bottom to toggle your microphone and camera
- Click the chat icon to open the in-meeting chat
- Click the screen share button to present your screen
- Click the participants icon to see who's in the meeting
- Click the share button to copy the meeting link
- Click the leave button to exit the meeting

![Meeting Controls](https://images.unsplash.com/photo-1611095973763-414019e72400?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)

## 🔒 Privacy and Security

- Meetings are accessible only to those with the meeting ID
- All video and audio is transmitted peer-to-peer
- No meeting content is stored on our servers
- Chat messages are stored only for the duration of the meeting

## 🌐 Deployment

This application can be deployed to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting
- AWS Amplify

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

If you have any questions or feedback, please open an issue on GitHub.

---

Made by Kumar Yash ❤️
