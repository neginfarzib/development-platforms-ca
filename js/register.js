import { supabase } from './supabase.js';

const registerForm = document.querySelector('form');

registerForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const email = form.email.value.trim();
  const password = form.password.value;

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      displayMessage;
      // handler error
    }

    if (data.user) {
      // display a message to the user or redirect
    }
  } catch (error) {
    // handler error
  }
});
