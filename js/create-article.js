import { supabase } from "./supabase.js";

/**
 * Creating a new article post
 * @param {string} title - blog post title
 * @param {string} body - blog post content
 * @param {string} category - blog post category
 *
 * */
export async function createArticlePost(title, body, category) {
    try {
        const result = await supabase.auth.getUser();
        const user = result.data.user;
        if (!user) {
            throw new Error("User not authenticated");
        }

        const {erro} =  await supabase.from("articles").insert([
            {
                title: title,
                body: body,
                category: category,
                user_id: user.id,
                created: new Date().toISOString()
            }
        ]);

        if (erro) {
            throw new Error(erro.message);
        }

        window.location.href = "../index.html"; 
    } catch (err) {
        const errorMessageElement = document.getElementById("errorMessage");
        errorMessageElement.style.display = "block";
        errorMessageElement.innerHTML = err;

        console.error("An error occurred:", err);
    }
}
