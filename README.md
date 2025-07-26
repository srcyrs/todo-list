## ✨ Features

- **Add Tasks**: Create new tasks with a simple input field
- **Mark Complete**: Tap the checkbox to mark tasks as complete/incomplete
- **Visual Feedback**: Completed tasks show with strikethrough text and green checkmark
- **Delete Tasks**: Permanently remove tasks with the trash icon
- **Data Persistence**: Tasks are automatically saved to device storage
- **Clean UI**: Modern, minimalist design with smooth interactions
- **Cross-Platform**: Works on both iOS and Android

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS) or Android Emulator (for Android)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd todoList
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npx expo start
   ```

4. **Run on device/simulator**
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator
   - Scan QR code with Expo Go app on your phone

## 📱 How to Use

### Adding Tasks

1. Type your task in the input field at the bottom
2. Tap the blue "+" button to add the task
3. The task will appear in your list immediately

### Managing Tasks

- **Mark Complete**: Tap the square checkbox on the left of any task
- **Mark Incomplete**: Tap the green checkbox again to unmark
- **Delete Task**: Tap the red trash icon on the right of any task

### Visual Indicators

- ✅ **Green checkbox**: Task is completed
- ~~Strikethrough text~~: Completed task text
- 🗑️ **Red trash icon**: Delete task permanently

## 🛠️ Technical Details

### Tech Stack

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tools
- **Expo Router**: File-based routing system
- **AsyncStorage**: Local data persistence
- **Expo Vector Icons**: Icon library (Ionicons)
- **React Native Gesture Handler**: Swipe gestures and touch handling
- **Expo Status Bar**: Status bar management

### Dependencies

```json
{
  "dependencies": {
    "@react-native-async-storage/async-storage": "^2.2.0",
    "expo": "~53.0.20",
    "expo-router": "^5.1.4",
    "expo-status-bar": "~2.2.3",
    "react": "19.0.0",
    "react-native": "0.79.5",
    "react-native-gesture-handler": "^2.27.2"
  }
}
```

### Key Dependencies Explained

- **expo-router**: File-based navigation system for Expo apps
- **@react-native-async-storage/async-storage**: Persistent storage for saving task data
- **react-native-gesture-handler**: Handles touch gestures and interactions
- **expo-status-bar**: Manages the device status bar appearance
- **expo**: Core Expo development platform

### Project Structure

```
todoList/
├── app/
│   ├── _layout.jsx          # Navigation configuration
│   └── index.jsx            # Main todo list screen
├── assets/                  # App icons and images
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

### Key Components

#### Main Screen (`app/index.jsx`)

- **State Management**: Uses React hooks for task data
- **Data Persistence**: AsyncStorage for saving tasks locally
- **UI Components**: FlatList, TouchableOpacity, TextInput
- **Styling**: StyleSheet for consistent design

#### Navigation (`app/_layout.jsx`)

- **Stack Navigator**: Simple single-screen navigation
- **Header Configuration**: Custom title and styling

### Data Flow

1. **Load**: Tasks are loaded from AsyncStorage on app start
2. **Add**: New tasks are added to state and saved to storage
3. **Update**: Task completion status is toggled and saved
4. **Delete**: Tasks are removed from state and storage
5. **Persist**: All changes are automatically saved to device storage

## 🎨 UI/UX Features

### Design Principles

- **Minimalist**: Clean, uncluttered interface
- **Intuitive**: Familiar mobile patterns
- **Responsive**: Works on different screen sizes
- **Accessible**: Clear visual feedback and touch targets

### Color Scheme

- **Primary Blue**: #007AFF (Add button)
- **Success Green**: #4CAF50 (Completed tasks)
- **Danger Red**: #FF3B30 (Delete button)
- **Neutral Gray**: #666 (Completed text)

## 🔧 Development

### Available Scripts

```bash
npm start          # Start Expo development server
npm run android    # Run on Android emulator
npm run ios        # Run on iOS simulator
npm run web        # Run in web browser
```

### Debugging

- Use `console.log()` statements for debugging
- Check Expo DevTools for real-time logs
- Use React Native Debugger for advanced debugging

### Common Issues

- **Metro bundler issues**: Clear cache with `npx expo start --clear`
- **AsyncStorage not working**: Ensure proper async/await usage
- **Icons not showing**: Verify @expo/vector-icons installation

## 📋 Future Enhancements

Potential features for future versions:

- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Task priority levels
- [ ] Search functionality
- [ ] Dark mode theme
- [ ] Cloud sync
- [ ] Task sharing
- [ ] Statistics and progress tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Created with ❤️ for learning and productivity.

---

**Happy task managing!** 🎯
