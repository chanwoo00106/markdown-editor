import React, { useCallback, useEffect, useRef } from 'react'
import useCodeMirror from './useCodeMirror'
import './Editor.css'

interface Props {}

const Editor: React.FC<Props> = () => {
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: 'hello world',
    onChange: () => {}
  })

  useEffect(() => {
    if (editorView) {
    }
  }, [editorView])

  return <div style={{ minHeight: '100vh' }} ref={refContainer} />
}

export default Editor
