import { NoteData, Tag } from "./App";
import NoteForm from "./NoteForm";

type NewNoteProps = {
  onSubmit: (dta: NoteData) => void;
  onAddTag: (data: Tag) => void;
  availableTags: Tag[];
};

export default function NewNote({
  onSubmit,
  onAddTag,
  availableTags,
}: NewNoteProps) {
  return (
    <>
      <h1 className="mb-4">New Notes</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
}
