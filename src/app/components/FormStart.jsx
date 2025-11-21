import BasicButton from "../components/basicButton";
import Container from "../components/Container"

const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      className="bg-[#1A1A1A] p-1 w-full hover:ring-1 h-[30px] hover:ring-[#D92630] focus:outline-none placeholder:text-white focus:ring-1 focus:ring-[#D92630] text-white px-2"
      placeholder={placeholder} />
  )
}

const SelectService = () => {
  return (
    <select
      className={`
                bg-[#1A1A1A] hover:ring-1 cursor-pointer h-[30px] w-full hover:ring-[#D92630] p-1 px-2
                pr-8 text-white focus:outline-none 
                focus:ring-1 focus:ring-[#D92630]    
                `}>
      <option value="">Services</option>
      <option value="wrap">Wrap</option>
      <option value="vinyl">Vinyl Installation & Removal</option>
      <option value="color">Color Change</option>
      <option value="fleet">Fleet Wrap</option>
      <option value="commercial">Commercial Wrap</option>
      <option value="specialty">Specialty Vehicle</option>
    </select>
  )
}

export default function FormStart() {
  return (
    <section className="flex text-white px-8 min-h-[75dvh]">
      <Container
        style={{
          boxShadow: "-1px 0px 7px 2px rgba(0,0,0,0.63)"
        }}
        className="bg-[#505050] space-y-8 m-auto min-h-[200px] !px-4 pt-4 pb-8">
        <header className="">
          <h2 className="uppercase font-bold text-[30px] md:text-[40px] leading-[60px] text-center">Ready to start?</h2>
          <p className="text-[14px] leading-[25px] text-center">Share your contact information and one of our representatives will contact you soon.</p>
        </header>
        <form className="flex max-lg:flex-col gap-8 md:gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center lg:grid-cols-4 flex-3 gap-4">
            <Input type="text" placeholder="Name" />
            <Input type="tel" placeholder="Phone" />
            <Input type="email" placeholder="Email" />
            <SelectService />
          </div>
          <div className="flex gap-4 flex-1">
            <BasicButton className="h-[30px] text-[14px]" children="ADD IMAGE" />
            <BasicButton className="h-[30px] text-[14px]" children="SEND" />
          </div>
        </form>
      </Container>
    </section>
  )
}