import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  }
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;