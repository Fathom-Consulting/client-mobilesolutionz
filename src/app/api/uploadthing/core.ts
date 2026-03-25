import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  vehiclePhotos: f({ image: { maxFileSize: "8MB", maxFileCount: 10 } })
    .middleware(async () => ({}))
    .onUploadComplete(async ({ file }) => {
      console.log("Upload complete:", file.ufsUrl);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
