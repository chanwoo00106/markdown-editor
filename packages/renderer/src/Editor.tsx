import React, { useCallback, useEffect } from 'react'
import useCodeMirror from './useCodeMirror'
import './Editor.css'

interface Props {
  initialDoc: string
  onChange: (doc: string) => void
}

const Editor: React.FC<Props> = ({ onChange, initialDoc }) => {
  const handleChange = useCallback(
    (state: any) => onChange(state.doc.toString()),
    [onChange]
  )
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc,
    onChange: handleChange
  })

  useEffect(() => {
    if (editorView) {
      //
    }
  }, [editorView])

  return (
    <div
      className="editor-wrapper"
      style={{ minHeight: '100vh' }}
      ref={refContainer}
    />
  )
}

export default Editor
