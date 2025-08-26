'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";


type FileMeta = {
  file: File;
  preview: string;
  title: string;
  description: string;
  tags: string;
};


export default function DashboardPage() {
     const router = useRouter();
  const [files, setFiles] = useState<FileMeta[]>([]);

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: { "image/*": [".jpeg", ".jpg", ".png"] },
    maxFiles: 5,
    onDrop: (acceptedFiles) => {
      // Enhance files with metadata (title, desc, tags)
      const mapped = acceptedFiles.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
        title: "",
        description: "",
        tags: "",
      }));
      setFiles((curr) => [...curr, ...mapped]);
    },
  });

  const handleChange = (index, field, value) => {
    const updated = [...files];
    updated[index][field] = value;
    setFiles(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/pages/gallery')
    const formData = new FormData();

    files.forEach((f, i) => {
      formData.append("files", f.file);
      formData.append(`title_${i}`, f.title);
      formData.append(`description_${i}`, f.description);
      formData.append(`tags_${i}`, f.tags);
    });

   
  };

  return (
    <div>
      <h1>Media Upload</h1>

      <form onSubmit={handleSubmit}>
        <div
          {...getRootProps({
            className: "border-2 border-dashed p-6 text-center mb-4",
          })}
        >
          <input {...getInputProps()} />
          <p>Drag & drop images here, or click to select</p>
          <button type="button" onClick={open} className="bg-blue-500 text-white px-4 py-2 rounded">
            Browse Files
          </button>
        </div>

        {/* Preview section */}
        <div className="space-y-6">
          {files.map((f, index) => (
            <div key={index} className="border p-4 rounded">
              <img
                src={f.preview}
                alt="preview"
                className="w-32 h-32 object-cover mb-2"
              />

              <input
                type="text"
                placeholder="Title"
                value={f.title}
                onChange={(e) => handleChange(index, "title", e.target.value)}
                className="border p-2 w-full mb-2"
              />

              <textarea
                placeholder="Description"
                value={f.description}
                onChange={(e) =>
                  handleChange(index, "description", e.target.value)
                }
                className="border p-2 w-full mb-2"
              />

              <input
                type="text"
                placeholder="Tags (comma separated)"
                value={f.tags}
                onChange={(e) => handleChange(index, "tags", e.target.value)}
                className="border p-2 w-full"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-800"
        >
          Submit All
        </button>
      </form>

    </div>
  );
}
