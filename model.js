import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  }
});

const Subscriber = mongoose.model("Subscriber", subscriberSchema);

export default Subscriber;