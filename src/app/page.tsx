'use client';

import { useCallback } from "react";
import Quill from "quill";

import "quill/dist/quill.snow.css";
import "./globals.css";

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

const history = {
  delay: 2000,
  maxStack: 100,
  userOnly: true
}

export default function Page() {
  const wrapperRef = useCallback(wrapper => {
    if (wrapper === null) return

    wrapper.innerHTML = ""
    const editor = document.createElement("div")
    wrapper.append(editor)
    new Quill(editor, {theme: "snow", modules: {toolbar: toolBarsOptions, history: history}})
  }, [])

  return <div className="container" ref={wrapperRef}></div>
}