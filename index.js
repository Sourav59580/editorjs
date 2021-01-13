const editor = new EditorJS({
    holder: 'editorjs',
/** 
     * Available Tools list. 
     * Pass Tool's class or Settings object for each Tool you want to use 
     */
   tools:{
       header: {
           class: Header,
           inlineToolbar: ['link']
       },
       delimiter: Delimiter,
       paragraph: {
        class: Paragraph,
        inlineToolbar: true,
      },
      embed: Embed,
      image: SimpleImage,
   }
}
);

function myFunction(){
    editor.save().then((output) => {
        console.log('Data: ', output);
    }).catch((error) => {
        console.log('Saving failed: ', error)
    });
}