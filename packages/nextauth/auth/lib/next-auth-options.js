import { encode } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import { WEBAPP_URL } from "../../../utils/constants";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const backendEndpointUrl = process.env.API_URL;

const isNumber = (value) => Boolean(parseInt(value));
export const AUTH_OPTIONS = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      type: "credentials",
      async authorize(credentials) {
        console.log(
          "credentialscredentialscredentials343434343434===> ",
          credentials?.email
        );

        let userData = {};
        let api_url = null;
        if (credentials?.auth_data_type == "signin") {
          userData = {
            email: credentials?.email,
            password: credentials?.password,
          };
          api_url = backendEndpointUrl + "/signin";
        } else {
          userData = {
            firstName: credentials?.firstName,
            lastName: credentials?.lastName,
            email: credentials?.email,
            password: credentials?.password,
            signupType: "CREDENTIALS",
            socialId: credentials?.socialId,
          };
          api_url = backendEndpointUrl + "/signup";
        }
        // Options for the fetch request
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        };
        // Make the POST request using fetch
        const response = await fetch(api_url, options);
        const responseData = await response.json();
        if (responseData?.status == 201 && responseData) {
          return responseData?.data;
        } else {
          throw new Error(responseData?.message);
        }
      },
    }),
    GoogleProvider({
      name: "google",
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    FacebookProvider({
      name: "facebook",
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    // decorate the native JWT encode function
    // Impl. detail: We don't pass through as this function is called with encode/decode functions.
    encode: async ({ token, maxAge, secret }) => {
      if (token?.sub && isNumber(token.sub)) {
      }
      return encode({ secret, token, maxAge });
    },
  },

  pages: {
    signIn: "/signin",
    signOut: "/auth/logout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify",
  },
  callbacks: {
    async jwt({
      // Always available but with a little difference in value
      token,
      // Available only in case of signIn, signUp or useSession().update call.
      trigger,
      // Available when useSession().update is called. The value will be the POST data
      session,
      // Available only in the first call once the user signs in. Not available in subsequent calls
      user,
      // Available only in the first call once the user signs in. Not available in subsequent calls
      account,
    }) {
      // The arguments above are from the provider so we need to look up the
      // user based on those values in order to construct a JWT.

      if (account?.type === "oauth") {
        if (!account.provider || !account.providerAccountId) {
          return token;
        }
      }

      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      session.user = token;
      return session;
    },

    // async redirect({ url, baseUrl }) {
    //   console.log("urlurlurl2323232332322323233===> ", url);
    //   // // Allows relative callback URLs
    //   if (url.startsWith("/")) return `${baseUrl}${url}`;
    //   // // Allows callback URLs on the same domain
    //   else if (new URL(url).hostname === new URL(WEBAPP_URL).hostname)
    //     return url;
    //   return WEBAPP_URL;
    // },
  },
};
/**
 * Identifies the profile the user should be logged into.
 */
const determineProfile = ({ token, profiles }) => {
  // If profile switcher is disabled, we can only show the first profile.
  if (!ENABLE_PROFILE_SWITCHER) {
    return profiles[0];
  }
  if (token.upId) {
    // Otherwise use what's in the token
    return { profileId: token.profileId, upId: token.upId };
  }
  // If there is just one profile it has to be the one we want to log into.
  return profiles[0];
};
