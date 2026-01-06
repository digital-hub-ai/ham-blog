import mongoose, { ConnectOptions } from &apos;mongoose&apos;;

type MongooseCached = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  // This prevents duplicate declarations in the global scope
  // eslint-disable-next-line no-var
  var mongoose: MongooseCached;
}

const MONGODB_URI = process.env.MONGODB_URI || &apos;mongodb://localhost:27017/aivault&apos;;

if (!MONGODB_URI) {
  throw new Error(
    &apos;Please define the MONGODB_URI environment variable inside .env.local&apos;
  );
}

let cached: MongooseCached = global.mongoose || { conn: null, promise: null };

async function dbConnect(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: ConnectOptions = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts);
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  if (!cached.conn) {
    throw new Error(&apos;Failed to establish database connection&apos;);
  }

  return cached.conn;
}

export default dbConnect;
