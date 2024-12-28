interface Articale{
  title:string,
  content:string , 
  username:string,
  date: string,
  id:number
}
export default function Articale({ title, content , username,date,id }:Articale) {
  content = content.substring(0,500)
  content = content.substring(0 , content.lastIndexOf(' '))
  
  return (
    // <li className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
    <a href={`/blog/${id}`}>
      <div className="grid grid-cols-1 gap-3 md:col-span-2">
        <h2 className="font-bold dark:text-black">{title}</h2>
        <span className="font-serif italic tracking-tighter text-slate-500">{dateFormatter.format(new Date(date))}</span>
        <p className="font-serif italic tracking-tighter text-slate-500">
          {content}
        </p>
        <h3 className="text-right font-light italic">written by {username}</h3>
      </div>
    </a>
    // </li>
  );
}

export const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});