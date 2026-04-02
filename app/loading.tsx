export default function Loading() {
  return (
    <div className="flex flex-row mx-40 mt-20 gap-20 animate-pulse">
      
      {/* Sinistra - immagini */}
      <div className="flex flex-col gap-6">
        {/* Immagine principale */}
        <div className="w-[520px] h-[500px] bg-gray-200 rounded-xl" />
        
        {/* Thumbnail */}
        <div className="flex flex-row gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-[100px] h-[100px] bg-gray-200 rounded-lg" />
          ))}
        </div>
      </div>

      {/* Destra - testo */}
      <div className="flex flex-col gap-4 pt-10 flex-1">
        {/* Brand */}
        <div className="w-32 h-4 bg-gray-200 rounded" />
        {/* Titolo */}
        <div className="w-72 h-8 bg-gray-200 rounded" />
        <div className="w-48 h-8 bg-gray-200 rounded" />
        {/* Descrizione */}
        <div className="flex flex-col gap-2 mt-2">
          <div className="w-full h-4 bg-gray-200 rounded" />
          <div className="w-full h-4 bg-gray-200 rounded" />
          <div className="w-3/4 h-4 bg-gray-200 rounded" />
        </div>
        {/* Prezzo */}
        <div className="flex flex-row items-center gap-4 mt-4">
          <div className="w-24 h-8 bg-gray-200 rounded" />
          <div className="w-12 h-6 bg-gray-200 rounded" />
        </div>
        <div className="w-16 h-4 bg-gray-200 rounded" />
        {/* Carrello */}
        <div className="flex flex-row gap-4 mt-4">
          <div className="w-36 h-14 bg-gray-200 rounded-xl" />
          <div className="flex-1 h-14 bg-gray-200 rounded-xl" />
        </div>
      </div>

    </div>
  );
}