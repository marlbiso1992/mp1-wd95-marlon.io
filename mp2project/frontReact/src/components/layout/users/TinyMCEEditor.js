import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
 

 const TinyMCEEditor = ({ value, onChange }) => {    
     
    return (

    <Editor
      apiKey="tp86hklgwdc1no1hk32chzlgz0y9vo311illnh5yk0ow3jwy"
      initialValue={value}
      init={{
        height: 300,
        width: 600,
        menubar: true,
        plugins: [
     
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help'
      }}
      onEditorChange={onChange}
    />


        )


    }




export default TinyMCEEditor
