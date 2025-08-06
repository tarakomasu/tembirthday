export default function Home() {
  const images = [
    "/まにゃへ.png",
    "/名古屋！.png",
    "/グランピング！！.png",
    "/熱海！.png",
    "/八丈島！！.png",
  ];

  return (
    <div>
      <main>
        {images.map((src, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={index}
            src={src}
            alt={`Letter image ${index + 1}`}
            style={{ width: "100%", display: "block" }}
          />
        ))}
      </main>
    </div>
  );
}