import { supabase } from "./supabase.js";

/**
 * Fetching all blog articles from API-sever
 * @return {Promise<object[]>} array of articles fetched from API-server
 * */
export async function allArticles() {
    try {
        const { data, error } = await supabase.from("articles").select("*").order("created", { ascending: false });

        if (error) {
            throw new Error(error); // convert Supabase error into a throw
        }
        return data;
    } catch (error) {
        const errorMessageElement = document.getElementById("errorMessage");
        errorMessageElement.style.display = "block";
        errorMessageElement.innerHTML = err.message;

        console.error("Error fetching data:", err);
    }
}
