import axios from "axios";
export const getHomePage = async (url: string) => {
    const { data } = await axios.get(url, {
        params: { hl: 'en', gl: 'US' },
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            'X-RapidAPI-Host': import.meta.env.VITE_API_HOST
        }
    });

    return data
}
