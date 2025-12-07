import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import mime from "mime";

// ==== 1. Supabase credentials ====
const SUPABASE_URL = "https://tghodrmjcvuijdsgqbwj.supabase.co";
const SUPABASE_KEY = "sb_secret_iOTmXhqjQiZ_iZpUwUhjng_b4HSZxVW"; // Secret key from Supabase Settings → API
const BUCKET_NAME = "virtual-tour"; // The bucket you created

// ==== 2. Path to local assets folder ====
// Local folder with your 360 images
const localFolder = path.join(process.cwd(), "public/assets");

// ==== 3. Initialize client ====
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// === 4. Recursive upload ===
async function uploadFolder(folderPath, prefix = "") {
  const items = fs.readdirSync(folderPath, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(folderPath, item.name);
    const bucketPath = path.join(prefix, item.name).replace(/\\/g, "/");

    if (item.isDirectory()) {
      await uploadFolder(fullPath, bucketPath);
    } else {
      const fileBuffer = fs.readFileSync(fullPath);

      const contentType = mime.getType(fullPath) || "application/octet-stream";

      console.log("Uploading:", bucketPath, "→", contentType);

      const { error } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(bucketPath, fileBuffer, {
          contentType,
          upsert: true,
        });

      if (error) {
        console.error("❌ Upload failed:", bucketPath, error.message);
      }
    }
  }
}

uploadFolder(localFolder)
  .then(() => console.log("✅ ALL FILES UPLOADED SUCCESSFULLY"))
  .catch(err => console.error("❌ Unexpected error:", err));
  

/* // ==== 4. Upload images ====
// async function uploadImages() {
  const files = fs.readdirSync(localFolder);

  console.log("Uploading files...");

  for (const file of files) {
    const filePath = path.join(localFolder, file);
    const fileData = fs.readFileSync(filePath);

    const { error } = await supabase.storage
      .from(BUCKET_NAME) 
      .upload(file, fileData, { upsert: true }); // overwrite if exists

    if (error) {
      console.error("Error uploading", file, error);
    } else {
      console.log("Uploaded:", file);
    }
  }
  console.log("\nGenerating public URLs...");

  const { data: filesInBucket, error: listError } =
    await supabase.storage.from(BUCKET_NAME).list();

  if (listError) {
    console.error(listError);
    return;
  }

  for (const file of filesInBucket) {
    const { data: urlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(file.name);

    console.log(file.name, "→", urlData.publicUrl);
  }



uploadImages(); */


