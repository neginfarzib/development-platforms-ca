import { allArticles } from "./manage-all-article.js";
import { supabase } from "./supabase.js";

const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", hour12: false };

/**
 * Fetching all articles. Then sort them by date
 *
 * @return {Promise<object[]>} A promise that resolves to an array of article objects sorted by date.
 * */
export async function dateSortedAllArticles() {
    let articles = await allArticles();
    let sortedAllArticles = articles.sort((a, b) => new Date(b.created) - new Date(a.created));
    return sortedAllArticles;
}

document.addEventListener("DOMContentLoaded", async () => {
    const articlePostsThumbnail = document.getElementById("article-post-container");
    const errorMessageElement = document.getElementById("errorMessage");

    const articles = await dateSortedAllArticles();
    console.log(articles.length);
    displayArticles(articles);

    async function displayArticles(articles) {
        articlePostsThumbnail.innerHTML = "";

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
                    window.location.href = "./account/login.html";
                }
            });


            const createArticle = document.createElement("div");
            createArticle.classList.add("create-article-container");
            const createArticleLink = document.createElement("a");
            createArticleLink.classList.add("create-article-link-btn");
            createArticleLink.href = "./article/create-article.html";
            createArticleLink.textContent = "Create New Article";
            createArticle.appendChild(createArticleLink);
            articlePostsThumbnail.appendChild(createArticle);
        } 

        const maxArticles = articles.length;
        const articleToShow = articles.slice(0, maxArticles);

        articleToShow.forEach((article) => {
            const articleThumbnail = document.createElement("div");
            articleThumbnail.classList.add("article-thumbnail");

            const articleTitle = document.createElement("h3");
            articleTitle.textContent = article.title;
            articleThumbnail.appendChild(articleTitle);

            const articleBody = document.createElement("p");
            articleBody.textContent = article.body;
            articleThumbnail.appendChild(articleBody);

            const articleCategoryDL = document.createElement("dl");
            const articleCategoryDT = document.createElement("dt");
            articleCategoryDT.textContent = "Category: ";
            articleCategoryDL.appendChild(articleCategoryDT);
            const articleCategoryDD = document.createElement("dd");
            articleCategoryDD.textContent = article.category;
            articleCategoryDL.appendChild(articleCategoryDD);
            articleThumbnail.appendChild(articleCategoryDL);

            const articleCreatedTime = document.createElement("p");
            articleCreatedTime.classList.add("article-thumbnail-created-time-p");
            const date = new Date(article.created);
            articleCreatedTime.textContent = date.toLocaleDateString("en-US", options);
            articleThumbnail.appendChild(articleCreatedTime);

            // Append the article box to the container
            articlePostsThumbnail.appendChild(articleThumbnail);
        });
        const errorMessageDiv = document.createElement("div");
        errorMessageDiv.classList.add("row");
        const errorMessageP = document.createElement("p");
        errorMessageP.id = "errorMessage";
        errorMessageDiv.appendChild(errorMessageP);
        articlePostsThumbnail.appendChild(errorMessageDiv);
    }
});
