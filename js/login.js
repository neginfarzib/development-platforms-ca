import { supabase } from "./supabase.js";

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        console.log("Supabase response:", data, error);
        if (error) {
            const errorMessageElement = document.getElementById("errorMessage");
            errorMessageElement.style.display = "block";
            errorMessageElement.style.color = "red";
            errorMessageElement.innerHTML = error.message;
            return;
        }

        if (data.user) {
            window.location.href = "../index.html";
        }
    } catch (error) {
        console.log(">>>error>>>", error);
        const errorMessageElement = document.getElementById("errorMessage");
        errorMessageElement.style.display = "block";
        errorMessageElement.style.color = "red";
        errorMessageElement.innerHTML = error;
    }
});
