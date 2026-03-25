import { UTApi } from "uploadthing/server";
import { NextResponse } from "next/server";

const utapi = new UTApi();
const RETENTION_DAYS = 30;

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - RETENTION_DAYS);

  const { files } = await utapi.listFiles();
  const stale = files.filter((f) => new Date(f.uploadedAt) < cutoff);

  if (stale.length === 0) {
    return NextResponse.json({ deleted: 0, message: "Nothing to clean up." });
  }

  await utapi.deleteFiles(stale.map((f) => f.key));

  return NextResponse.json({
    deleted: stale.length,
    message: `Deleted ${stale.length} file${stale.length === 1 ? "" : "s"} older than ${RETENTION_DAYS} days.`,
  });
}
