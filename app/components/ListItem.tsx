import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: BlogPost;
};

// export default function ListItem({ post }: Props) {
//   const { id, title, date } = post;
//   const formattedDate = getFormattedDate(date);
//   return (
//     <li className="mt-4 text-2xl dark:text-white/90">
//       <Link href={`/posts/${id}`} className="hover:underline underline">
//         {title} - {formattedDate}
//       </Link>
//     </li>
//   );
// }
export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li className="mt-4 text-2xl dark:text-white/90">
      <Link href={`/posts/${id}`} className="hover:underline">
        <div>
          <h2>{title}</h2>
          <p className="text-sm">{formattedDate}</p>
        </div>
      </Link>
    </li>
  );
}
