import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res) => {
  try {
    // Create svix instance with clerk webhook secret.
    const webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // Getting Headers
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    //Verifying Headers
    await webhook.verify(JSON.stringify(req.body), headers);

    //Getting Data from request body
    const { data, type } = req.body;

    const userData = {
      id: data.id,
      username: data.first_name + " " + data.last_name,
      email: data.email_addresses[0].email_address,
      profile: data.image_url,
    };

    //Switch cases for different events
    switch (type) {
      case "user.created": {
        await User.create(userData);
        break;
      }

      case "user.updated": {
        await User.findOneAndUpdate({id: data.id}, {$set: userData}, {new: true, upsert: true});
        break;
      }

      case "user.deleted": {
        await User.findOneAndDelete({id: data.id});
        break;
      }

      default:
        break;
    }
    res.json({ success: true, message: "Webhook Recieved" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export default clerkWebhooks;