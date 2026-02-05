import { useState } from "react";
import { createPortal } from "react-dom";

interface ClickImageProps {
  src: string;
  alt: string;
}

function ClickImage({ src, alt }: ClickImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={() => setOpen(true)}
        className="w-full h-100 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
      />
      {open && createPortal(
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center"
          onClick={() => setOpen(false)}
          style={{ padding: 0, margin: 0, zIndex: 9999 }}
        >
          <div className="relative" style={{ padding: 0, margin: 0, lineHeight: 0 }}>
            <img
              src={src}
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-xl"
              onClick={(e) => e.stopPropagation()}
              style={{ display: 'block', margin: 0, padding: 0 }}
            />
            
            <button
              className="absolute top-6 right-6 bg-transparent text-white text-5xl hover:scale-110"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default ClickImage;