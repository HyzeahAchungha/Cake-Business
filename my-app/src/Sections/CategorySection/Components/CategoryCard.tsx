export type CategoryCardProps = {
  category: string;
  title: string;
  imageUrl: string;
};
import { Link } from 'react-router-dom';
export const CategoryCard = (props: CategoryCardProps) => {
  return (

<Link to=  {`/shop/${props.category}`}   className="relative items-center box-border caret-transparent gap-x-4 flex flex-col shrink-0 gap-y-4">

<div className="relative box-border caret-transparent h-32 w-32 p-1.5 rounded-[3.35544e+07px] border-2 border-solid border-transparent md:h-40 md:w-40">
        <div className="relative bg-[lab(96.1596_-0.0023438_-1.13575)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent h-full w-full overflow-hidden rounded-[3.35544e+07px]">
          <img
            alt={props.title}
            src={props.imageUrl}
            className="absolute text-transparent aspect-[auto_145_/_145] box-border h-full max-w-full object-cover w-full inset-0"
          />
        </div>
      </div>
      <span className="text-[lab(27.1134_-0.956401_-12.3224)] font-bold box-border caret-transparent block tracking-[0.4px] text-center">
        {props.title}
      </span>
</Link>

    // <a
    //   href={`https://www.the3bsbakery.store/shop?category=${props.category}`}
    //   className="relative items-center box-border caret-transparent gap-x-4 flex flex-col shrink-0 gap-y-4"
    // >
    //   <div className="relative box-border caret-transparent h-32 w-32 p-1.5 rounded-[3.35544e+07px] border-2 border-solid border-transparent md:h-40 md:w-40">
    //     <div className="relative bg-[lab(96.1596_-0.0023438_-1.13575)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent h-full w-full overflow-hidden rounded-[3.35544e+07px]">
    //       <img
    //         alt={props.title}
    //         src={props.imageUrl}
    //         className="absolute text-transparent aspect-[auto_145_/_145] box-border h-full max-w-full object-cover w-full inset-0"
    //       />
    //     </div>
    //   </div>
    //   <span className="text-[lab(27.1134_-0.956401_-12.3224)] font-bold box-border caret-transparent block tracking-[0.4px] text-center">
    //     {props.title}
    //   </span>
    // </a>
  );
};