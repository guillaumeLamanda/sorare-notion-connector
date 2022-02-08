import { GraphQLClient } from "graphql-request";
import { get } from "https";
import bcrypt from "bcryptjs";
import { getSdk } from "./graphql/sdk";
import axios from "axios";

export const sorare = () => {
  const aud = "sorare-notion-integration";
  const client = new GraphQLClient("https://api.sorare.com/graphql");
  const sdk = getSdk(client);

  return {
    client,
    sdk,
    authenticate: async () => {
      const {
        data: { salt },
      } = await axios.get(
        `https://api.sorare.com/api/v1/users/${process.env.SORARE_LOGIN}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const hashedPassword = bcrypt.hashSync(
        process.env.SORARE_PASSWORD as string,
        salt
      );
      console.log({ hashedPassword });

      const { signIn } = await sdk.signInMutation({
        input: {
          email: process.env.SORARE_LOGIN,
          password: hashedPassword,
        },
        aud,
      });

      if (!signIn?.currentUser?.jwtToken) {
        console.log(signIn);
        throw new Error("Authentication error");
      }

      if (signIn.otpSessionChallenge) {
      }

      client.setHeader(
        "Authorization",
        `Bearer ${signIn.currentUser.jwtToken.token}`
      );
      client.setHeader("JWT-AUD", aud);
    },
  };
};
