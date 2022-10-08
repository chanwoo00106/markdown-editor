import './preview.css'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkReact from 'remark-react'
import React from 'react'
import 'github-markdown-css/github-markdown.css'

interface Props {
  doc: string
}

const Preview: React.FC<Props> = props => {
  const md: any = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkReact, React as any)
    .processSync(props.doc).result

  return <div className="preview markdown-body">{md}</div>
}

export default Preview
