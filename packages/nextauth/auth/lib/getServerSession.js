import { LRUCache } from "lru-cache";

import { getToken } from "next-auth/jwt";
import { getServerSession } from "next-auth";

const CACHE = new LRUCache({ max: 1000 });

export async function getServerSessions(options) {
  let token = await getServerSession();

  if (!token || !token?.user?.email || !token?.user?.sub) {
    // log.debug("Couldnt get token");
    return null;
  }

  const cachedSession = CACHE.get(JSON.stringify(token));

  if (cachedSession) {
    return cachedSession;
  }

  CACHE.set(JSON.stringify(token), "session");

  return token;
}
