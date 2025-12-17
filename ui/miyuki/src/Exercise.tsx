import React, { useState, useRef } from "react"
import Editor, { OnMount } from "@monaco-editor/react"
import { ProgressStatus } from "./ProgressStatus";
import { ProgressBar } from "./ProgressBar";
import { Link } from "react-router-dom";


type ResultStatus = "success" | "error" | null


const ExerciseResult: React.FC<{ status: ResultStatus }> = ({ status }) => {
  if (!status) return null;

  if (status === "success") {
    return (
      <div className="border-l-4 border-green-500 bg-green-50 p-4 mb-6">
        <h4 className="text-green-700 font-semibold">
          ✔ ¡Muy bien! Tu solución pasó todas las pruebas
        </h4>
      </div>
    );
  }

  return (
    <div className="border-l-4 border-red-500 bg-red-50 p-4 mb-6">
      <h4 className="text-red-700 font-semibold mb-2">
        ✖ Ups, no pudimos evaluar tu solución
      </h4>
      <div className="bg-white border rounded p-3 text-sm font-mono">
        Timed out connecting to server: &lt;no reason&gt;
      </div>
      <a href="#" className="text-blue-500 text-sm mt-2 inline-block">
        💬 Ver consultas sobre este ejercicio
      </a>
    </div>
  );
};

const SubmitButton: React.FC<{ onClick: () => void; disabled?: boolean }> = ({
  onClick,
  disabled,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-full py-3 rounded font-semibold flex justify-center items-center gap-2 text-white ${disabled ? "bg-gray-400" : "bg-pink-500 hover:bg-pink-600"
      }`}
  >
    <span className={disabled ? "animate-spin" : ""}>↻</span> Enviar
  </button>
);

const NextButton: React.FC = () => (
  <a
    href="#"
    className="block w-full mt-4 bg-pink-400 hover:bg-pink-500 text-white py-3 rounded font-semibold text-center"
  >
    Siguiente Ejercicio: Combinando funciones →
  </a>
);

const Assignment: React.FC<{ showHint: boolean, setShowHint: (value: boolean) => void }> = ({ showHint, setShowHint }) => {
  return (
    <div>
      <p className="mb-4">
        ¿Te imaginás cómo se puede escribir la función{" "}
        <code>areaRectangulo</code> que calcule el área de un rectángulo?
      </p>

      <button
        onClick={() => setShowHint(!showHint)}
        className="text-blue-500 flex items-center gap-2 mb-2"
      >
        💡 ¡Dame una pista!
      </button>

      {showHint && (
        <div className="bg-blue-50 border border-blue-200 p-3 rounded">
          El área de un rectángulo se calcula multiplicando base por altura.
        </div>
      )}
    </div>
  )
}

const Exercise: React.FC = () => {
  const defaultCode = "areaRectangulo lado1 lado2 = lado1 * lado2";

  const [code, setCode] = useState<string>(defaultCode);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [result, setResult] = useState<ResultStatus>(null);
  const [processing, setProcessing] = useState<boolean>(false);

  const editorRef = useRef<any>(null);

  const handleEditorMount: OnMount = (editor) => {
    editorRef.current = editor;
  };

  const submit = () => {
    setProcessing(true);
    setResult(null);

    setTimeout(() => {
      const success = Math.random() > 0.5;
      setResult(success ? "success" : "error");
      setProcessing(false);
    }, 1500);
  };

  const currentProgressStatus: ProgressStatus = processing
    ? "processing"
    : result === "success"
      ? "passed"
      : result === "error"
        ? "failed"
        : "pending";

  return (
    <div
      className={`max-w-6xl mx-auto p-6 ${fullscreen ? "fixed inset-0 bg-white z-50 overflow-auto" : ""
        }`}
    >
      <nav className="text-sm text-gray-500 mb-4 flex items-center gap-2">
        <span className="font-semibold text-blue-600">▲</span>
        <a href="#" className="hover:underline">
          Organización de prueba de contenido
        </a>
        <span>/</span>
        <a href="#" className="hover:underline">
          4. Programación Funcional
        </a>
        <span>/</span>
        <Link to="/lesson/1" className="hover:underline">1. Valores y Funciones</Link>
        <span>/</span>
        <span className="text-gray-700">
          8. Múltiples parámetros
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Ejercicio 8: Múltiples parámetros
      </h1>

      <ProgressBar
        items={[
          { status: "passed" },
          { status: "passed" },
          { status: "passed" },
          { status: "passed" },
          { status: "passed" },
          { status: "passed" },
          { status: "passed" },
          { status: currentProgressStatus, active: true },
          { status: "pending" },
        ]}
      />


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Assignment setShowHint={setShowHint} showHint={showHint} />

        <div className="border rounded">
          <div className="flex justify-between items-center border-b px-3 py-2">
            <div className="font-semibold">✏️ Solución</div>
            <div className="flex gap-3 text-gray-600">
              <button onClick={() => setFullscreen(!fullscreen)} title="Pantalla completa">⛶</button>
              <button
                onClick={() => editorRef.current?.getAction("editor.action.formatDocument")?.run()}
                title="Dar formato"
              >
                ⇥
              </button>
              <button onClick={() => setCode(defaultCode)} title="Reiniciar">↺</button>
            </div>
          </div>

          <Editor
            height={fullscreen ? "calc(100vh - 220px)" : "300px"}
            language="haskell"
            theme="vs-light"
            value={code}
            onChange={(v) => setCode(v ?? "")}
            onMount={handleEditorMount}
            options={{ minimap: { enabled: false }, wordWrap: "on" }}
          />

          <div className="p-4">
            <SubmitButton onClick={submit} disabled={processing} />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <ExerciseResult status={result} />
        {result && <NextButton />}
      </div>
    </div>
  );
};

export default Exercise;
