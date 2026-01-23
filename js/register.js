import { supabase } from "./supabase.js";

const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const fieldset = registerForm.querySelector("fieldset");

    try {
        fieldset.disabled = true;

        console.log("Registering user:", email);
        const { data, error } = await supabase.auth.signUp({
            email,
            password
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
            const errorMessageElement = document.getElementById("errorMessage");
            errorMessageElement.style.display = "block";
            errorMessageElement.style.color = "green";
            errorMessageElement.innerHTML = "Registration successful! Please check your email to verify your account.";

            
            registerForm.reset();
        }
    } catch (error) {
        console.log('>>>error>>>',error);
        const errorMessageElement = document.getElementById("errorMessage");
        errorMessageElement.style.display = "block";
        errorMessageElement.style.color = "red";
        errorMessageElement.innerHTML = error;
    } finally {
        fieldset.disabled = false;
    }
});
