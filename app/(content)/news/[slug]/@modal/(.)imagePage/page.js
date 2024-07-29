import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

const InterceptedImagePage = async({ params }) => {

  const imageSlug = params.slug;
  const Item = await getNewsItem(imageSlug);

  if (!Item) notFound();


  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${Item.image}`} alt={Item.title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
