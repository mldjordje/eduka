import { promises as fs } from "fs";
import os from "os";
import path from "path";

const PRIMARY_DATA_DIR = path.join(process.cwd(), "data");
const FALLBACK_DATA_DIR = path.join(os.tmpdir(), "eduka-data");
let DATA_DIR = PRIMARY_DATA_DIR;

function isReadOnlyFs(error: any) {
  return error?.code === "EROFS" || error?.code === "EACCES";
}

async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (error: any) {
    if (isReadOnlyFs(error) && DATA_DIR !== FALLBACK_DATA_DIR) {
      DATA_DIR = FALLBACK_DATA_DIR;
      await fs.mkdir(DATA_DIR, { recursive: true });
      return;
    }
    throw error;
  }
}

export async function readDataFile<T>(fileName: string, defaultValue: T): Promise<T> {
  await ensureDataDir();
  let filePath = path.join(DATA_DIR, fileName);

  try {
    const file = await fs.readFile(filePath, "utf-8");
    return JSON.parse(file) as T;
  } catch (error: any) {
    if (error?.code === "ENOENT") {
      await writeDataFile(fileName, defaultValue);
      return defaultValue;
    }
    if (isReadOnlyFs(error) && DATA_DIR !== FALLBACK_DATA_DIR) {
      DATA_DIR = FALLBACK_DATA_DIR;
      return readDataFile(fileName, defaultValue);
    }
    throw error;
  }
}

export async function writeDataFile<T>(fileName: string, data: T): Promise<void> {
  await ensureDataDir();
  let filePath = path.join(DATA_DIR, fileName);

  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (error: any) {
    if (isReadOnlyFs(error) && DATA_DIR !== FALLBACK_DATA_DIR) {
      DATA_DIR = FALLBACK_DATA_DIR;
      await ensureDataDir();
      filePath = path.join(DATA_DIR, fileName);
      await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
      return;
    }
    throw error;
  }
}
