export default function Home() {
  const images = [
    "/letter-1.png",
    "/nagoya.png",
    "/glamping.png",
    "/atami.png",
    "/hachijojima.png",
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