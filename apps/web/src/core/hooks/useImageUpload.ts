import { BASE_URL } from "@/core/lib/basic-link/BackendBasicLink";
import { getErrorMessage } from "@/core/utils/getErrorMessage";
import { useState } from "react";
import { toast } from "sonner";

interface UploadJob {
  jobId: string;
  filename: string;
  status: string;
  url?: string;
}

export function useImageUpload() {
  const [uploading, setUploading] = useState(false);
  const [uploadingMultiple, setUploadingMultiple] = useState(false);

  async function uploadSingleImage(file: File): Promise<string | null> {
    const formData = new FormData();
    formData.append("images", file);

    try {
      setUploading(true);

      const response = await fetch(`${BASE_URL}/images/upload`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`خطا در ارتباط با سرور: ${response.status}`);
      }

      const result = await response.json();

      if (result.jobs && result.jobs.length > 0) {
        const job = result.jobs[0];
        return job.url || `/uploads/products/${job.filename}`;
      }

      throw new Error("آدرس تصویر دریافت نشد");
    } catch (error) {
      toast.error(getErrorMessage(error));
      return null;
    } finally {
      setUploading(false);
    }
  }

  async function uploadMultipleImages(files: File[]): Promise<string[] | null> {
    if (files.length === 0) return null;

    const formData = new FormData();
    files.forEach((file) => formData.append("images", file));

    try {
      setUploadingMultiple(true);

      const response = await fetch(`${BASE_URL}/images/upload`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(`خطا در ارتباط با سرور: ${response.status}`);
      }

      const result = await response.json();

      if (result.jobs && result.jobs.length > 0) {
        return result.jobs.map((job: UploadJob) => {
          return job.url || `/uploads/products/${job.filename}`;
        });
      }

      throw new Error("آدرس تصاویر دریافت نشد");
    } catch (error) {
      toast.error(getErrorMessage(error));
      return null;
    } finally {
      setUploadingMultiple(false);
    }
  }

  async function deleteImage(url: string): Promise<boolean> {
    try {
      const response = await fetch(`${BASE_URL}/images/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error(`خطا در حذف: ${response.status}`);
      }

      const result = await response.json();
      return result.success === true;
    } catch (error) {
      toast.error(getErrorMessage(error));
      return false;
    }
  }

  return {
    uploading,
    uploadingMultiple,
    uploadSingleImage,
    uploadMultipleImages,
    deleteImage,
  };
}
