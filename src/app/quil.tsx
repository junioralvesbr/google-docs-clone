import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

export const QuillNoSSRWrapper = dynamic(() => import('react-quill'), { 
  ssr: false, 
  loading: () => <p>Carregando...</p>,
});
