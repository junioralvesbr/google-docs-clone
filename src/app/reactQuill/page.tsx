'use client'
import {useState} from "react";
import ReactQuill from "react-quill";

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

export default function Page() {
  const [value, setValue] = useState("")

  return <ReactQuill theme="snow" modules={{toolbar: toolBarsOptions}} value={value} onChange={setValue} />
}  