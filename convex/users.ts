import { v } from "convex/values";
import { internalMutation } from "./_generated/server";

//internalMutation allows us to perform business logic - in this case its to insert a new user to the db
export const createUser = internalMutation({
  //Creates an args object which sets our values we wish to input with their respective types
  args: {
    clerkId: v.string(),
    email: v.string(),
    imageUrl: v.string(),
    name: v.string(),
    //handler async function passes in the MutateContext (ctx) which gives us access to the db - allowing the insert function
    //args is just the args found above and the type safety - makes it cleaner to call it
  },
  handler: async (ctx, args) => {
    //inserts into users table the following key pair values, key found in the db then the value which is args.something
    await ctx.db.insert("users", {
      clerkId: args.clerkId,
      email: args.email,
      imageUrl: args.imageUrl,
      name: args.name,
    });
  },
});
