import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: "My Todo List",
                    headerTitle: "My Todo List",
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#ffffff',
                    },
                    headerTintColor: '#000000',
                }}
            />
        </Stack>
    );
} 