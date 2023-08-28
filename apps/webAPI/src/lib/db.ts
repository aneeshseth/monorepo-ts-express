let alreadyDone = false;
import mongoose from 'mongoose'

export async function ensureDbConnected() {
    if (alreadyDone) return;
    await mongoose.connect("mongodb+srv://user123:pass123@cluster0.217iyoa.mongodb.net/")
    alreadyDone = true;
}