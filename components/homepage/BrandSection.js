import Image from 'next/image';

const BrandsSection = () => {
    const brands = [{
        "name" : "Red Bull",
        "logo" : "/assets/redbull.svg"
    }, {
        "name" : "Amul",
        "logo" : "/assets/amul.svg"
    }, {
        "name" : "ITC",
        "logo" : "/assets/itc.svg"
    }, {
        "name" : "Tata",
        "logo" : "/assets/tata.svg"
    }, {
        "name" : "Cadbury",
        "logo" : "/assets/cadbury.svg"
    }, {
        "name" : "Boat",
        "logo" : "/assets/boat.svg"
    }, {
        "name" : "Parle",
        "logo" : "/assets/parle.svg"
    }, {
        "name" : "Durex",
        "logo" : "/assets/durex.svg"
    }, {
        "name" : "Red Bull",
        "logo" : "/assets/redbull.svg"
    }, {
        "name" : "Amul",
        "logo" : "/assets/amul.svg"
    }, {
        "name" : "ITC",
        "logo" : "/assets/itc.svg"
    }, {
        "name" : "Tata",
        "logo" : "/assets/tata.svg"
    }, {
        "name" : "Cadbury",
        "logo" : "/assets/cadbury.svg"
    }, {
        "name" : "Boat",
        "logo" : "/assets/boat.svg"
    }, {
        "name" : "Parle",
        "logo" : "/assets/parle.svg"
    }, {
        "name" : "Durex",
        "logo" : "/assets/durex.svg"
    },  ]
  return (
    <section className='brands_section'>
      <h2>Brands</h2>
      <div className="brands_container">
        {brands.length > 0 && brands.map((ele,i)=>{
            return <div className='brand' key={i}>
                <Image 
                src={ele.logo}
                width={20}
                height={20}
                alt={ele.logo}
                />
            </div>
        })}
      </div>
      
    </section>
  )
}

export default BrandsSection
