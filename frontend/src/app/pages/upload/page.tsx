// {/* <form onSubmit={handleSubmit}>
//         <div
//           {...getRootProps({
//             className: "border-2 border-dashed p-6 text-center mb-4",
//           })}
//         >
//           <input {...getInputProps()} />
//           <p>Drag & drop images here, or click to select</p>
//           <button type="button" onClick={open} className="bg-blue-500 text-white px-4 py-2 rounded">
//             Browse Files
//           </button>
//         </div>

//         {/* Preview section */}
//         <div className="space-y-6">
//           {files.map((f, index) => (
//             <div key={index} className="border p-4 rounded">
//               <img
//                 src={f.preview}
//                 alt="preview"
//                 className="w-32 h-32 object-cover mb-2"
//               />

//               <input
//                 type="text"
//                 placeholder="Title"
//                 value={f.title}
//                 onChange={(e) => handleChange(index, "title", e.target.value)}
//                 className="border p-2 w-full mb-2"
//               />

//               <textarea
//                 placeholder="Description"
//                 value={f.description}
//                 onChange={(e) =>
//                   handleChange(index, "description", e.target.value)
//                 }
//                 className="border p-2 w-full mb-2"
//               />

//               <input
//                 type="text"
//                 placeholder="Tags (comma separated)"
//                 value={f.tags}
//                 onChange={(e) => handleChange(index, "tags", e.target.value)}
//                 className="border p-2 w-full"
//               />
//             </div>
//           ))}
//         </div>

//         <button
//           type="submit"
//           className="mt-6 bg-green-500 text-white px-6 py-2 rounded"
//         >
//           Submit All
//         </button>
//       </form> */}