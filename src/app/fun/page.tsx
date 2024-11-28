import FunContainer from "@/container/pageFun";

export const generateMetadata = async () => {
  const title = "We are getting married!";
  const desc = "Wedding invitation";
  const img = "/assets/images/chew/cuoi_pc.jpg";
  try {
    const metadata = {
      title: title,
      description: desc,
      keywords: ["wedding", "tam", "khuong"],
      openGraph: {
        title: title,
        description: desc,
        images: img,
      },
    };
    return metadata;
  } catch (error: any) {
    console.error("Fail");
    return {};
  }
};
const Fun = () => {
  return <FunContainer />;
};

export default Fun;
