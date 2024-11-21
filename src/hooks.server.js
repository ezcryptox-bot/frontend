import { SvelteKitAuth } from "@auth/sveltekit";
import Google from "@auth/sveltekit/providers/google";
import { GOOGLE_ID, GOOGLE_SECRET } from "$env/static/private";

export const {handle, signIn } = SvelteKitAuth({
    providers:[Google({clientId: GOOGLE_ID, clientSecret: GOOGLE_SECRET})]
})