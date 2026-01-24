import { createArticlePost } from "./create-article.js";
import { supabase } from "./supabase.js";

const result = await supabase.auth.getSession();
const session = result.data.session;
if (session) {
    const loginIde = document.getElementById("login-id");
    loginIde.innerText = session.user.email || "User";
    loginIde.href = "#";

    const registerId = document.getElementById("register-id");
    registerId.innerText = "Logout";
    registerId.href = "#";
    registerId.addEventListener("click", async (e) => {
        e.preventDefault();
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.log("Error signing out:", error.message);
        } else {
            window.location.href = "../account/login.html";
        }
    });
}else {
    window.location.href = "../account/login.html";
}

const createArticleForm = document.getElementById("create-article-form");
if (createArticleForm) {
    document.getElementById("create-article-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const articleTitle = document.getElementById("articleTitle").value.trim();
        const articleBody = document.getElementById("articleBody").value.trim();
        const category = document.getElementById("category").value;

        createArticlePost(articleTitle, articleBody, category);
    });
}
