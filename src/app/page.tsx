"use client"
import { useState } from 'react';
import { QuillNoSSRWrapper } from './quil';

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    ['clean'],
  ],
};

const formats = [
  'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'link', 'image'
];

export default function MyQuillEditor() {
  const [content, setContent] = useState('');

  return (
    <div>
      <QuillNoSSRWrapper 
        value={content} 
        onChange={setContent} 
        modules={modules} 
        formats={formats} 
        theme="snow" 
      />
    </div>
  );
}
