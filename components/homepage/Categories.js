
import { useRouter } from "next/navigation";

const Categories = ({categoryData, heading}) => {
    const router = useRouter()

    
  const handleClick = () => {
    router.push("/category")
  }
  
    return (
        <div className="xl:container mx-[5%] xl:mx-auto py-[60px]">
            <h2 className="text-black text-xl md:text-4xl font-bold pb-[20px] md:pb-[48px]">
                {heading}</h2>
            <div className="cursor-pointer grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 2xl:grid-cols-10 gap-x-[10px] md:gap-x-[20px] gap-y-[20px] md:gap-y-[40px]">
                {categoryData.map((data, i) => (
                    <div key={i} onClick={handleClick}>
                        <div className="category-card bg-[#F4FFFE] rounded-[10px] py-[10px] px-[20px] w-[126px] h-[145px] text-center flex flex-col shadow-[0px_4px_14px_0px_rgba(0,0,0,0.15)]">
                            <img src={data.imageUrl} alt="" className="h-[80px]" />
                            <p className="text-[#3F3F3F] text-[13px] font-extrabold pt-[5px]">{data.title}</p>
                        </div>
                    </div>
                ))}

              
            </div>


        </div>
    )
}

export default Categories