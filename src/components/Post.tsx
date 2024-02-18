interface PostProps {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
}

export default function Post(props: PostProps) {
  return (
    <section className="w-1/4 p-5 rounded-lg bg-slate-800 ">
      <div>
        <h3 className="text-xl font-medium text-slate-300">{props.author}</h3>
        <h1 className="text-2xl font-bold leading-10">{props.title}t</h1>
      </div>
      <div className="py-5 text-slate-200">
        <h2>{props.content}</h2>
      </div>
      <div>
        <div className="text-sm text-right text-slate-400">
          {props.createdAt.toLocaleDateString("pl-PL")}
        </div>
      </div>
    </section>
  );
}
