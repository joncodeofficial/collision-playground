import draculaTheme from 'monaco-themes/themes/Dracula.json';
import { type editor } from 'monaco-editor';
import Editor, { type Monaco } from '@monaco-editor/react';
import { CircleToCircleCollision } from '../constants/CircleToCircleCollision';

const CodeEditor = () => {
  const handleEditorMount = (_: unknown, monaco: Monaco) => {
    monaco.editor.defineTheme('dracula', draculaTheme as editor.IStandaloneThemeData);
    monaco.editor.setTheme('dracula');
  };

  return (
    <Editor
      theme='vs-dark'
      defaultLanguage='cpp'
      onMount={handleEditorMount}
      defaultValue={CircleToCircleCollision}
      options={{
        minimap: { enabled: false },
        fontSize: 16,
        scrollbar: { vertical: 'hidden' },
        readOnly: true,
        wordWrap: 'on',
      }}
    />
  );
};

export default CodeEditor;
