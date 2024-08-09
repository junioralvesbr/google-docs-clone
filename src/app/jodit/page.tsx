'use client'

import React, {useState, useRef, useMemo} from "react";
import dynamic from "next/dynamic";
import JoditEditor from "jodit-react";
import Uploader from "quill/modules/uploader";

const JodiEditor = dynamic(() => import("jodit-react"), {ssr: false})

export default function Page() {
  const editor = useRef(null);
	const [content, setContent] = useState('Comece a escrever...');

	const config = useMemo(() => ({
			readonly: false, // all options from https://xdsoft.net/jodit/docs/,
			placeholder: 'Start typings...'
		}), []);

    const handleChange = (value) => {
      setContent(value)
    }

	return (
		<main>
      <div className="h-screen w-screen flex items-center flex-col">
        <div className="m-10  flex flex-col items-center">
         <h1>Jodit Rich Text Editor</h1>
        </div>
        <div className="h-full w-[90vw]">
        {/* This is the main initialization of the Jodit editor */}
          <JoditEditor 
            ref={editor}            //This is important
            value={content}         //This is important
            config={config}         //Only use when you declare some custom configs
            onChange={handleChange} //handle the changes
            className="w-full h-[70%] mt-10 bg-white"
            />
            <style>
              {`.jodit-wysiwyg{height:300px !important}`}
            </style>
        </div>

        <div 
        className="my-10 h-full w-[90vw]"
        >Preview:
        <div dangerouslySetInnerHTML={{ __html: content }}></div>

        </div>
      </div>
    </main>
	);
}