"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import CKEditor from "ckeditor5-custom-build/src/ckeditor";
import DecoupledDocumentEditor from "@ckeditor/ckeditor5-build-classic";

export default function CreateQuestion() {
  const { register, handleSubmit, formState = { errors } } = useForm();
  const [result, setResult] = useState();
  const [questionType, setQuestionType] = useState(1);
  const onSubmit = (data) => {
    setResult(data);

    console.log("Data ", data, "  ", questionType);
  };
  return (
    <div>
      CreateQuestion
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            margin: "0 auto",
          }}
        >
          <label>Normal question</label>
          <select
            onChange={(value) => {
              setQuestionType(value);
            }}
            {...register("typeQuestions")}
          >
            <option value={0}>Multible choices</option>
            <option value={1}>type 1</option>
            <option value={2}>type 2</option>
            <option value={3}>type 3</option>
          </select>

          <label>Question</label>
          <CKEditor
            editor={DecoupledDocumentEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onReady={(editor) => {
              console.log("CKEditor5 React Component is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
          />
          {/* <input type="text" placeholder="Question" {...register("question")} /> */}
          <table style={{ textAlign: "center" }}>
            <tbody>
              <tr>
                <td>Answer</td>
                <td>Correct answer</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Answer A"
                    {...register("answer.a.value")}
                  />
                </td>
                <td>
                  <input type="checkbox" {...register("answer.a.isCorrect")} />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Answer B"
                    {...register("answer.b.value")}
                  />
                </td>
                <td>
                  <input type="checkbox" {...register("answer.b.isCorrect")} />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Answer C"
                    {...register("answer.c.value")}
                  />
                </td>
                <td>
                  <input type="checkbox" {...register("answer.c.isCorrect")} />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Answer D"
                    {...register("answer.d.value")}
                  />
                </td>
                <td>
                  <input type="checkbox" {...register("answer.d.isCorrect")} />
                </td>
              </tr>
            </tbody>
          </table>

          <input
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          />
        </form>
      </div>
      <div>
        <p>{result?.question}</p>
        <p>A. {result?.answer?.a?.value}</p>
        <p>B. {result?.answer?.b?.value}</p>
        <p>C. {result?.answer?.c?.value}</p>
        <p>D. {result?.answer?.d?.value}</p>
      </div>
    </div>
  );
}
