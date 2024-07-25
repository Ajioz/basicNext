import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

const InterceptedImagePage = ({ params }) => {
  const imageSlug = params.slug;
  const Item = DUMMY_NEWS.find((item) => item.slug === imageSlug);

  if (!Item) notFound();

  return (
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${Item.image}`} alt={Item.title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
