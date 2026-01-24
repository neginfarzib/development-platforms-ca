import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://nywbqeglebhykvbxvacp.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55d2JxZWdsZWJoeWt2Ynh2YWNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgyOTk5MTcsImV4cCI6MjA4Mzg3NTkxN30.SQn3PiBmAMuLrKfPFd8z1ZFPOde34y6RMlNz4K9A-lY";

export const supabase = createClient(supabaseUrl, supabaseKey);
