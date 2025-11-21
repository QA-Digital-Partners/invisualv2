import Container from "../components/Container"


const LearnMore = ({ href = "/" }) => (
    <button className="font-semibold text-[20px] self-start leading-[20px]
        underline underline-offset-3 decoration-white/60
        transition-colors duration-300
        pb-4
        hover:text-[#D92630] hover:decoration-[#D92630]">
        <a href={href} >
            Learn more
        </a>
    </button>
)

const Title = ({ children, className }) => <h3 className={`uppercase text-[40px] leading-[45px] font-bold ${className}`}>{children}</h3>

const Description = ({ children, className }) => <p className={`text-[16px] leading-[25px] ${className}`}>{children}</p>

const Card = ({ className, children }) => {
    return (
        <article
            style={{
                backgroundImage: `url(/aditionalServices/bg.webp)`,
                backgroundSize: "101% 101%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                zIndex: 0,
                boxShadow: "-1px 0px 7px 2px rgba(0,0,0,0.63)"
            }}
            className={`h-full min-h-[400px] md:min-h-[350px] p-6 relative overflow-hidden border border-black/30 text-white ${className}`}>
            {children}
            <span
                className="absolute bottom-0 z-10 left-0 w-full h-1/2 pointer-events-none"
                style={{
                    background: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
                    zIndex: -1
                }}
            />
        </article>
    )
}

const ServicesList = () => {
    return (
        <div className="flex flex-col sm:flex-row sm:grid  md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6">
            <Card className="md:space-y-8 items-center h-auto sm:col-span-2 lg:row-span-2 lg:col-span-1  flex flex-col ">
                <div className="space-y-2  max-lg:flex-1">
                    <Title>Commercial wraps</Title>
                    <Description>
                        From food trucks to service vans, your vehicle is a powerful branding tool.
                        InVisual Signs designs custom commercial wraps that grab attention and make your business unforgettable wherever it goes.
                    </Description>
                </div>
                <LearnMore />
                <img
                    alt="Truck commercial wrap"
                    style={{
                        zIndex: -1
                    }}
                    loading="lazy"
                    src="/aditionalServices/truck-orange.webp"
                    className="absolute -bottom-40 lg:-bottom-20 w-full min-w-[450px] max-w-[600px] object-cover h-[450px]  "
                />
            </Card>

            <Card className="sm:col-span-2 flex justify-end ">
                <div className="sm:max-w-[50%] flex flex-col ">
                    <div className="flex-1 space-y-1">
                        <Title className="text-[20px]">Fleet wraps</Title>
                        <Description>
                            Fleet wraps bring <strong>unity</strong> to your vehicles and amplify brand visibility.
                            InVisual Signs ensures every wrap aligns with your identity,
                            <strong> building recognition through numbers</strong> and creating impact wherever your fleet goes.
                        </Description>
                    </div>
                    <LearnMore />
                </div>
                <img
                    alt="Red truck fleet wrap"
                    style={{
                        zIndex: -1
                    }}
                    loading="lazy"
                    src="/aditionalServices/truck-red.webp"
                    className="absolute w-full left-0  max-w-[450px] h-full object-contain max-h-[500px] "
                />
            </Card>
            <Card className="flex flex-col ">
                <div className="flex-1 space-y-1">
                    <Title className="!text-[25px]">Color change</Title>
                    <Description className="sm:max-w-[80%]">
                        Transform your vehicle with a complete color change in stunning finishes like gloss, matte, satin, or metallic.
                        Give your car a fresh new look while preserving the original paint underneath, combining style and protection in one service.
                    </Description>
                </div>
                <LearnMore />
                <img
                    alt="Gray car"
                    style={{
                        zIndex: -1
                    }}
                    loading="lazy"
                    src="/aditionalServices/gray-car.webp"
                    className="absolute top-0 w-full -right-30 max-w-[500px] h-full object-cover max-h-[600px] "
                />
            </Card>
            <Card className="flex flex-col ">
                <div className="flex-1 space-y-1">
                    <Title className="!text-[25px]">Specialty Vehicles</Title>
                    <Description className="sm:max-w-[80%]">
                        Not all vehicles are created equal and neither are our wraps. Whether it’s a motorcycle,
                        boat, or ATV, specialty wraps deliver custom looks built for adventure, style, and durability.
                    </Description>
                </div>
                <LearnMore />
                <img
                    alt="Specialty vehicle"
                    style={{
                        zIndex: -1
                    }}
                    loading="lazy"
                    src="/aditionalServices/truck-t.webp"
                    className="absolute  h-full max-h-[65%] w-full -right-20 bottom-0 object-contain "
                />
            </Card>
            <Card className="col-span-2 flex justify-end">
                <div className="sm:max-w-[50%] flex flex-col">
                    <div className="flex-1 space-y-1">
                        <Title className="!text-[30px] leading-[35px]">Vinyl Installation & Removal</Title>
                        <Description>
                            Upgrade or reset with confidence. Our vinyl installation delivers crisp,
                            clean results on any surface, and when it's time for removal, we ensure a spotless finish with zero hassle.
                        </Description>
                    </div>
                    <LearnMore />
                </div>
                <img
                    alt="Working person"
                    style={{
                        zIndex: -1
                    }}
                    loading="lazy"
                    src="/aditionalServices/workingperson.webp"
                    className="absolute w-[450px] left-0 h-full bottom-0 object-cover "
                />
            </Card>
        </div>
    )
}

export default function AdditionalServices() {
    return (
        <section className="overflow-x-clip relative">
            <div
                className="w-[200%]  absolute h-[78%] rotate-17 origin-top-left "
                style={{
                    boxShadow: "0 0 21.45px 0px #000000B2"
                }} />

            <div className="h-[320px] overflow-hidden rotate-17 origin-top-left flex flex-col gap-5 translate-y-14">
                <div
                    style={{
                        background: "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))"
                    }}
                    className="h-[2px] w-full max-w-[600px] rounded"
                />
                <div
                    style={{
                        background: "radial-gradient(60% 60% at 30% 90%,#D92630 10%, #D92630 50%, #1D1D1D 100%)",
                        backgroundBlendMode: "screen"
                    }}
                    className="h-7 max-w-[600px]" />
            </div>
            <Container className="p-2 relative">
                <header className="leading-[40px]  transform translate-y-8 max-h-min font-extrabold ">
                    <h2 className="uppercase flex flex-col text-[#D92630] text-[34px]">
                        Wraps
                        <span className="uppercase text-white text-[28px]">Additional services</span>
                    </h2>
                </header>
                <ServicesList />
                <img
                    style={{
                        zIndex: -1
                    }}
                    alt="Background decoration"
                    src="/aditionalServices/bg-decoration.webp"
                    className=" absolute bottom-0 max-md:hidden right-0 w-[500px] h-[450px] object-contain"
                />
            </Container>
        </section>
    )
}

