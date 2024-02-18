"use client";

import Button from "@/components/Button";
import Link from "next/link";
import { createPost } from "../actions";
import { useFormState } from "react-dom";
import { useEffect } from "react";

const initialState = {
  message: "",
};

export default function Page() {
  const [state, formAction] = useFormState(createPost, initialState);

  useEffect(() => {
    if (state.message === "CREATED") {
      alert("Utworzono, powróć i odśwież stronę!");
    }
    if (state.message === "ERROR") {
      alert("Błąd!");
    }
  }, [state]);

  return (
    <form
      action={formAction}
      className="h-full flex justify-center items-center"
    >
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Utwórz nowy post!</h1>
        <div>
          <label htmlFor="author">Autor</label> <br />
          <input
            name="author"
            className="bg-slate-800 px-4 py-2.5 border-slate-700 rounded-lg border outline-none focus:outline focus:outline-blue-700 transition-all duration-150 mt-2"
            required
            id="author"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="title">Tytuł</label> <br />
          <input
            name="title"
            className="bg-slate-800 px-4 py-2.5 border-slate-700 rounded-lg border outline-none focus:outline focus:outline-blue-700 transition-all duration-150 mt-2"
            required
            id="title"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="content">Zawartość</label> <br />
          <input
            name="content"
            className="bg-slate-800 px-4 py-2.5 border-slate-700 rounded-lg border outline-none focus:outline focus:outline-blue-700 transition-all duration-150 mt-2"
            required
            id="content"
            type="text"
          />
        </div>
        <div className="space-y-4">
          <Button className="w-full" type="submit">
            Zapostuj!
          </Button>
          <Link className="block text-center" href="/">
            Powrót
          </Link>
        </div>
      </div>
    </form>
  );
}
