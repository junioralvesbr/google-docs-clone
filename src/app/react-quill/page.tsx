'use client'
import {useState} from "react";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), {ssr: false})

import 'react-quill/dist/quill.snow.css';

const toolBarsOptions = [
  [{'font': []}],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ size: ["small", false, "large", "huge"] }],
  ["bold", "italic", "underline", "strike"],
  [{ align: [] }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ direction: "rtl" }],
  ["image", "link", "video", "blockquote", "code-block"],
  ["clean"],
]

const quillFormats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'image',
  'align',
  'color',
  'code-block',
];

export default function Page() {
  const [value, setValue] = useState("")

  return (
    <div>
      <ReactQuill theme="snow" modules={{toolbar: toolBarsOptions}} value={value} onChange={setValue} formats={quillFormats} />
      <button></button>
    </div>)
}  