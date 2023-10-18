type Props = {
  id: string;
};

export default function Video({ id }: Props) {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube video"
      />
    </div>
  );
}
