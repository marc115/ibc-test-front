import { Convert, User } from "../models/User";
// Function to fetch the user and return null on failure
export const authLogin = async (email: string, password: string): Promise<{ user: User | undefined, status: number }> => {
    const url = `${process.env.API_URL}/auth/login`
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password })
        });
        // Return user data if the response is OK, otherwise return null
        if (response.ok) {
            const data = await response.json()
            const user = Convert.toUser(JSON.stringify(data));
            return { user: user, status: response.status };

        } else {
            return { user: undefined, status: response.status };
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        return { user: undefined, status: 500 }; // Assume 500 in case of unknown errors
    }
}