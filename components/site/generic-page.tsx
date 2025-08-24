type Props = {
  title: string
  content: string[]
}

export default function GenericPage({ title, content }: Props) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="prose prose-slate mt-4">
        {content.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  )
}
