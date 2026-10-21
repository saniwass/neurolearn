type Props = {
  label: string;
  onChange: (file: File | null) => void;
};

export default function FileInput({ label, onChange }: Props) {
  return (
    <div className="space-y-2">
      <label className="block text-sm text-slate-300">{label}</label>
      <input
        type="file"
        onChange={(e) => onChange(e.target.files?.[0] || null)}
        className="block w-full text-sm text-slate-300 file:mr-4 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-white"
      />
    </div>
  );
}