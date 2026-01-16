export default function CardImageUpload() {
  return (
    <div>
      <label className="text-sm text-gray-400">Upload Card Image</label>
      <div className="mt-2 flex items-center justify-center border border-dashed border-white/20 rounded-xl h-40 text-gray-400 cursor-pointer hover:border-amber-400 transition">
        <span>Click to upload image</span>
        <input type="file" className="hidden" />
      </div>
    </div>
  );
}
