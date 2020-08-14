//This is the initial markdown you will see on page load
export const starterText = `
# Welcome to my Markdown Previewer

## Here you can type and preview your markdown

This useful tool has been built with the help of the [Marked.js library](https://marked.js.org).

I have written the \`React.js\` code that you are previewing.

This is a snippet: 
\`\`\`
return (
    <div id="container">
      <h1>Markdown previewer</h1>
      <form>
        <textarea 
          id="editor" 
          value={text}
          onChange={e => setText(e.target.value)} 
          />
      </form>
      <div id="preview" dangerouslySetInnerHTML={createMarkup()}></div>
    </div>  
  )  
\`\`\`

I hope you find this project to be: 
- Intestesting
- Exciting
- Captivating

In the words of Linus Torvalds, the principal developer of the Linux kernel: 

> "Talk is cheap. Show me the code"

![Linus Torvalds pic](https://recruitingdaily.com/wp-content/uploads/sites/6/2017/02/quote-talk-is-cheap-show-me-the-code-linus-torvalds-45-66-13-e1487242875427-300x125.jpg).

**Happy coding and thanks for stopping by!**
`
